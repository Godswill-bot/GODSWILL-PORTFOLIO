// Voice to Text Converter Application
// Using Web Speech API for real-time speech recognition

class VoiceTextConverter {
    constructor() {
        this.recognition = null;
        this.isRecording = false;
        this.isPlaying = false;
        this.transcriptions = [];
        this.currentTranscriptionId = null;
        this.undoStack = [];
        this.redoStack = [];
        this.recordingStartTime = null;
        this.timerInterval = null;
        this.audioContext = null;
        this.analyser = null;
        this.animationId = null;
        this.mediaStream = null;
        this.interimTranscript = '';
        this.finalTranscript = '';
        
        this.settings = {
            sortBy: 'date-desc',
            filterType: 'all',
            showTimestamps: true,
            autoSave: true
        };
        this.userProfile = {
            name: 'Guest User',
            email: '',
            totalMinutes: 0
        };

        this.initializeElements();
        this.checkBrowserSupport();
        this.initializeEventListeners();
        this.loadData();
        this.drawWaveform();
    }

    initializeElements() {
        // Buttons
        this.newTranscriptionBtn = document.getElementById('newTranscription');
        this.recordBtn = document.getElementById('recordBtn');
        this.recordIcon = document.getElementById('recordIcon');
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.playPauseIcon = document.getElementById('playPauseIcon');
        this.translateBtn = document.getElementById('translateBtn');
        this.searchBtn = document.getElementById('searchBtn');
        this.undoBtn = document.getElementById('undoBtn');
        this.redoBtn = document.getElementById('redoBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.volumeBtn = document.getElementById('volumeBtn');
        this.volumeIcon = document.getElementById('volumeIcon');
        this.pricingBtn = document.getElementById('pricingBtn');
        this.userAvatarBtn = document.getElementById('userAvatarBtn');
        this.listSettingsBtn = document.getElementById('listSettingsBtn');
        this.helpBtn = document.getElementById('helpBtn');
        this.logoHome = document.getElementById('logoHome');
        this.promoBanner = document.getElementById('promoBanner');

        // Content elements
        this.transcriptionTitle = document.getElementById('transcriptionTitle');
        this.transcriptionText = document.getElementById('transcriptionText');
        this.transcriptionList = document.getElementById('transcriptionList');
        this.saveStatus = document.getElementById('saveStatus');

        // Time display
        this.currentTimeDisplay = document.getElementById('currentTime');
        this.totalTimeDisplay = document.getElementById('totalTime');

        // Modals
        this.translateModal = document.getElementById('translateModal');
        this.languageModal = document.getElementById('languageModal');
        this.pricingModal = document.getElementById('pricingModal');
        this.userModal = document.getElementById('userModal');
        this.listSettingsModal = document.getElementById('listSettingsModal');
        this.shortcutsModal = document.getElementById('shortcutsModal');

        // Close modal buttons
        this.closeTranslate = document.getElementById('closeTranslate');
        this.closeLanguageModal = document.getElementById('closeLanguageModal');
        this.closePricing = document.getElementById('closePricing');
        this.closeUser = document.getElementById('closeUser');
        this.closeListSettings = document.getElementById('closeListSettings');
        this.closeShortcuts = document.getElementById('closeShortcuts');

        // Translation elements
        this.targetLanguage = document.getElementById('targetLanguage');
        this.translatedText = document.getElementById('translatedText');
        this.copyTranslation = document.getElementById('copyTranslation');

        // Speech language
        this.speechLanguage = document.getElementById('speechLanguage');
        this.startRecordingBtn = document.getElementById('startRecordingBtn');

        // Search elements
        this.searchBox = document.getElementById('searchBox');
        this.searchInput = document.getElementById('searchInput');
        this.closeSearch = document.getElementById('closeSearch');

        // Export dropdown
        this.exportDropdown = document.getElementById('exportDropdown');

        // Volume elements
        this.volumeSlider = document.getElementById('volumeSlider');
        this.volumeRange = document.getElementById('volumeRange');

        // Audio elements
        this.uploadArea = document.getElementById('uploadArea');
        this.audioFileInput = document.getElementById('audioFileInput');
        this.audioPlayerContainer = document.getElementById('audioPlayerContainer');
        this.audioPlayer = document.getElementById('audioPlayer');
        this.waveformCanvas = document.getElementById('waveformCanvas');
        this.waveformProgress = document.getElementById('waveformProgress');
        this.recordingIndicator = document.getElementById('recordingIndicator');

        // User profile elements
        this.userName = document.getElementById('userName');
        this.userEmail = document.getElementById('userEmail');
        this.totalTranscriptions = document.getElementById('totalTranscriptions');
        this.totalMinutesDisplay = document.getElementById('totalMinutes');
        this.saveProfile = document.getElementById('saveProfile');
        this.clearData = document.getElementById('clearData');

        // Settings elements
        this.sortBy = document.getElementById('sortBy');
        this.filterType = document.getElementById('filterType');
        this.showTimestamps = document.getElementById('showTimestamps');
        this.autoSave = document.getElementById('autoSave');
        this.applySettings = document.getElementById('applySettings');
    }

    checkBrowserSupport() {
        // Check for Web Speech API support
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            this.showToast('⚠️ Speech recognition not supported. Please use Chrome, Edge, or Safari.', 'error');
            console.error('Web Speech API is not supported in this browser');
            return false;
        }

        // Check for secure context (HTTPS or localhost)
        if (!window.isSecureContext) {
            console.warn('Not in secure context. Speech recognition may not work.');
        }

        this.initializeSpeechRecognition();
        return true;
    }

    initializeSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            console.error('Speech Recognition not available');
            return;
        }

        this.recognition = new SpeechRecognition();
        
        // Configuration for better recognition
        this.recognition.continuous = true;          // Keep listening
        this.recognition.interimResults = true;      // Show results while speaking
        this.recognition.maxAlternatives = 1;        // Number of alternatives
        this.recognition.lang = 'en-US';             // Default language

        // Event Handlers
        this.recognition.onstart = () => {
            console.log('🎤 Speech recognition started');
            this.showToast('🎤 Listening... Speak now!', 'success');
        };

        this.recognition.onresult = (event) => {
            console.log('Speech result received:', event);
            this.handleSpeechResult(event);
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.handleSpeechError(event);
        };

        this.recognition.onend = () => {
            console.log('Speech recognition ended');
            this.handleSpeechEnd();
        };

        this.recognition.onspeechstart = () => {
            console.log('Speech detected');
        };

        this.recognition.onspeechend = () => {
            console.log('Speech ended');
        };

        this.recognition.onnomatch = () => {
            console.log('No speech match found');
            this.showToast('Could not recognize speech. Please try again.', 'info');
        };

        this.recognition.onaudiostart = () => {
            console.log('Audio capturing started');
        };

        this.recognition.onaudioend = () => {
            console.log('Audio capturing ended');
        };
    }

    initializeEventListeners() {
        // Logo - Home
        this.logoHome.addEventListener('click', () => this.goHome());
        this.logoHome.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.goHome();
        });

        // New transcription button
        this.newTranscriptionBtn.addEventListener('click', () => this.showLanguageModal());

        // Record button - Direct recording without modal for quick access
        this.recordBtn.addEventListener('click', () => {
            if (this.isRecording) {
                this.stopRecording();
            } else {
                this.showLanguageModal();
            }
        });

        // Play/Pause button
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());

        // Start recording from modal
        this.startRecordingBtn.addEventListener('click', () => {
            this.hideModal(this.languageModal);
            this.startRecording();
        });

        // Translate button
        this.translateBtn.addEventListener('click', () => this.showModal(this.translateModal));
        this.closeTranslate.addEventListener('click', () => this.hideModal(this.translateModal));
        this.targetLanguage.addEventListener('change', () => this.translateText());
        this.copyTranslation.addEventListener('click', () => this.copyTranslatedText());

        // Language modal
        this.closeLanguageModal.addEventListener('click', () => this.hideModal(this.languageModal));

        // Pricing modal
        this.pricingBtn.addEventListener('click', () => this.showModal(this.pricingModal));
        this.closePricing.addEventListener('click', () => this.hideModal(this.pricingModal));

        // User modal
        this.userAvatarBtn.addEventListener('click', () => this.showUserModal());
        this.userAvatarBtn.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.showUserModal();
        });
        this.closeUser.addEventListener('click', () => this.hideModal(this.userModal));
        this.saveProfile.addEventListener('click', () => this.saveUserProfile());
        this.clearData.addEventListener('click', () => this.clearAllData());

        // List settings modal
        this.listSettingsBtn.addEventListener('click', () => this.showListSettingsModal());
        this.listSettingsBtn.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.showListSettingsModal();
        });
        this.closeListSettings.addEventListener('click', () => this.hideModal(this.listSettingsModal));
        this.applySettings.addEventListener('click', () => this.applyListSettings());

        // Help/Shortcuts modal
        this.helpBtn.addEventListener('click', () => this.showModal(this.shortcutsModal));
        this.closeShortcuts.addEventListener('click', () => this.hideModal(this.shortcutsModal));

        // Promo banner
        this.promoBanner.addEventListener('click', () => this.showLanguageModal());
        this.promoBanner.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.showLanguageModal();
        });

        // Search functionality
        this.searchBtn.addEventListener('click', () => this.toggleSearch());
        this.closeSearch.addEventListener('click', () => this.toggleSearch());
        this.searchInput.addEventListener('input', () => this.performSearch());

        // Undo/Redo
        this.undoBtn.addEventListener('click', () => this.undo());
        this.redoBtn.addEventListener('click', () => this.redo());

        // Export
        this.exportBtn.addEventListener('click', () => this.toggleExportDropdown());
        document.querySelectorAll('.export-dropdown button').forEach(btn => {
            btn.addEventListener('click', (e) => this.exportTranscription(e.target.dataset.format));
        });

        // Volume controls
        this.volumeBtn.addEventListener('click', () => this.toggleVolumeSlider());
        this.volumeRange.addEventListener('input', (e) => this.setVolume(e.target.value));

        // Content changes
        this.transcriptionTitle.addEventListener('input', () => this.saveTranscription());
        this.transcriptionText.addEventListener('input', () => {
            this.saveToUndoStack();
            this.saveTranscription();
        });

        // Upload audio
        this.uploadArea.addEventListener('click', () => this.audioFileInput.click());
        this.uploadArea.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.audioFileInput.click();
        });
        this.uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.uploadArea.style.borderColor = '#8b5cf6';
            this.uploadArea.style.background = '#faf5ff';
        });
        this.uploadArea.addEventListener('dragleave', () => {
            this.uploadArea.style.borderColor = '#d1d5db';
            this.uploadArea.style.background = 'transparent';
        });
        this.uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            this.uploadArea.style.borderColor = '#d1d5db';
            this.uploadArea.style.background = 'transparent';
            if (e.dataTransfer.files.length) {
                this.handleAudioFile(e.dataTransfer.files[0]);
            }
        });
        this.audioFileInput.addEventListener('change', (e) => {
            if (e.target.files.length) {
                this.handleAudioFile(e.target.files[0]);
            }
        });

        // Audio player events
        this.audioPlayer.addEventListener('timeupdate', () => this.updateAudioProgress());
        this.audioPlayer.addEventListener('ended', () => this.onAudioEnded());
        this.audioPlayer.addEventListener('loadedmetadata', () => this.onAudioLoaded());

        // Pricing plan selection
        document.querySelectorAll('.btn-pricing-select[data-plan]').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectPlan(e.target.dataset.plan));
        });

        // Close modals on outside click
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.hideModal(e.target);
            }
            if (!this.exportBtn.contains(e.target) && !this.exportDropdown.contains(e.target)) {
                this.exportDropdown.classList.remove('show');
            }
            if (!this.volumeBtn.contains(e.target) && !this.volumeSlider.contains(e.target)) {
                this.volumeSlider.classList.add('hidden');
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
                if (e.ctrlKey && e.key === 's') {
                    e.preventDefault();
                    this.saveTranscription();
                    this.showToast('Saved!', 'success');
                }
                return;
            }

            if (e.ctrlKey && e.key === 'z') {
                e.preventDefault();
                this.undo();
            }
            if (e.ctrlKey && e.key === 'y') {
                e.preventDefault();
                this.redo();
            }
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                this.toggleSearch();
            }
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.saveTranscription();
                this.showToast('Saved!', 'success');
            }
            if (e.ctrlKey && e.key === 'e') {
                e.preventDefault();
                this.toggleExportDropdown();
            }
            if (e.key === ' ' && !this.isRecording) {
                e.preventDefault();
                this.togglePlayPause();
            }
            if (e.key === 'r' || e.key === 'R') {
                e.preventDefault();
                if (this.isRecording) {
                    this.stopRecording();
                } else {
                    this.showLanguageModal();
                }
            }
            if (e.key === '?') {
                e.preventDefault();
                this.showModal(this.shortcutsModal);
            }
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    // Modal functions
    showModal(modal) {
        modal.classList.add('show');
        if (modal === this.translateModal) {
            this.translateText();
        }
    }

    hideModal(modal) {
        modal.classList.remove('show');
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('show');
        });
        this.exportDropdown.classList.remove('show');
        this.volumeSlider.classList.add('hidden');
    }

    showLanguageModal() {
        this.showModal(this.languageModal);
    }

    showUserModal() {
        this.userName.value = this.userProfile.name;
        this.userEmail.value = this.userProfile.email;
        this.totalTranscriptions.textContent = this.transcriptions.length;
        this.totalMinutesDisplay.textContent = Math.round(this.userProfile.totalMinutes);
        this.showModal(this.userModal);
    }

    showListSettingsModal() {
        this.sortBy.value = this.settings.sortBy;
        this.filterType.value = this.settings.filterType;
        this.showTimestamps.checked = this.settings.showTimestamps;
        this.autoSave.checked = this.settings.autoSave;
        this.showModal(this.listSettingsModal);
    }

    goHome() {
        if (this.transcriptions.length > 0) {
            this.loadTranscription(this.transcriptions[0].id);
        }
        this.showToast('Welcome to VoiceText!', 'info');
    }

    // ==========================================
    // SPEECH RECOGNITION - CORE FUNCTIONALITY
    // ==========================================

    async startRecording() {
        // Check if recognition is available
        if (!this.recognition) {
            this.showToast('Speech recognition not available. Please use Chrome or Edge.', 'error');
            return;
        }

        // Request microphone permission first
        try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log('Microphone access granted');
        } catch (err) {
            console.error('Microphone access denied:', err);
            this.showToast('🎤 Microphone access denied. Please allow microphone access and try again.', 'error');
            return;
        }

        // Set the language from dropdown
        const selectedLang = this.speechLanguage.value;
        this.recognition.lang = selectedLang;
        console.log('Recognition language set to:', selectedLang);

        // Create new transcription if needed
        if (!this.currentTranscriptionId) {
            this.createNewTranscription();
        }

        // Clear placeholder text
        if (this.transcriptionText.querySelector('.placeholder-text')) {
            this.transcriptionText.innerHTML = '';
        }

        // Reset transcripts
        this.finalTranscript = this.transcriptionText.innerText || '';
        this.interimTranscript = '';

        // Update UI
        this.isRecording = true;
        this.recordBtn.classList.add('recording');
        this.recordIcon.classList.remove('fa-circle');
        this.recordIcon.classList.add('fa-stop');
        this.recordingIndicator.classList.remove('hidden');

        // Start timer
        this.recordingStartTime = Date.now();
        this.startTimer();

        // Start audio visualization
        this.startAudioVisualization();

        // Start recognition
        try {
            this.recognition.start();
            console.log('Recognition started successfully');
        } catch (e) {
            console.error('Error starting recognition:', e);
            if (e.message.includes('already started')) {
                this.recognition.stop();
                setTimeout(() => {
                    this.recognition.start();
                }, 100);
            } else {
                this.showToast('Error starting speech recognition. Please try again.', 'error');
                this.stopRecording();
            }
        }
    }

    stopRecording() {
        console.log('Stopping recording...');
        
        this.isRecording = false;
        
        // Update UI
        this.recordBtn.classList.remove('recording');
        this.recordIcon.classList.remove('fa-stop');
        this.recordIcon.classList.add('fa-circle');
        this.recordingIndicator.classList.add('hidden');

        // Update stats
        if (this.recordingStartTime) {
            const recordingDuration = (Date.now() - this.recordingStartTime) / 60000;
            this.userProfile.totalMinutes += recordingDuration;
            this.saveUserData();
        }

        // Stop timer
        this.stopTimer();

        // Stop audio visualization
        this.stopAudioVisualization();

        // Stop media stream
        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach(track => track.stop());
            this.mediaStream = null;
        }

        // Stop recognition
        if (this.recognition) {
            try {
                this.recognition.stop();
            } catch (e) {
                console.error('Error stopping recognition:', e);
            }
        }

        // Save the transcription
        this.saveTranscription();
        
        this.showToast('✅ Recording stopped and saved!', 'success');
    }

    handleSpeechResult(event) {
        let interim = '';
        let final = '';

        // Process all results
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            const confidence = event.results[i][0].confidence;
            
            console.log(`Result ${i}: "${transcript}" (confidence: ${confidence}, final: ${event.results[i].isFinal})`);

            if (event.results[i].isFinal) {
                final += transcript + ' ';
            } else {
                interim += transcript;
            }
        }

        // Update the transcription text
        if (final) {
            this.finalTranscript += final;
            this.transcriptionText.innerText = this.finalTranscript;
            this.saveTranscription();
        }

        // Show interim results (optional - shows what's being recognized in real-time)
        if (interim) {
            // You could show interim results in a different color or style
            this.transcriptionText.innerHTML = this.finalTranscript + '<span style="color: #9ca3af; font-style: italic;">' + interim + '</span>';
        }

        // Update save status
        this.updateSaveStatus();
    }

    handleSpeechError(event) {
        console.error('Speech recognition error:', event.error, event.message);
        
        switch (event.error) {
            case 'not-allowed':
                this.showToast('🎤 Microphone access denied. Please allow access in browser settings.', 'error');
                this.stopRecording();
                break;
            case 'no-speech':
                this.showToast('🔇 No speech detected. Please speak louder or check your microphone.', 'info');
                // Don't stop recording, just notify
                break;
            case 'audio-capture':
                this.showToast('🎤 No microphone found. Please connect a microphone.', 'error');
                this.stopRecording();
                break;
            case 'network':
                this.showToast('🌐 Network error. Please check your internet connection.', 'error');
                break;
            case 'aborted':
                console.log('Recognition aborted');
                break;
            case 'service-not-allowed':
                this.showToast('Speech recognition service not allowed. Please use HTTPS.', 'error');
                this.stopRecording();
                break;
            default:
                this.showToast(`Speech error: ${event.error}`, 'error');
        }
    }

    handleSpeechEnd() {
        console.log('Speech recognition ended, isRecording:', this.isRecording);
        
        // Auto-restart if still recording
        if (this.isRecording && this.recognition) {
            console.log('Restarting recognition...');
            setTimeout(() => {
                if (this.isRecording) {
                    try {
                        this.recognition.start();
                        console.log('Recognition restarted');
                    } catch (e) {
                        console.error('Could not restart recognition:', e);
                        // If we can't restart, stop recording gracefully
                        if (!e.message.includes('already started')) {
                            this.stopRecording();
                        }
                    }
                }
            }, 100);
        }
    }

    // Timer functions
    startTimer() {
        this.timerInterval = setInterval(() => {
            const elapsed = Date.now() - this.recordingStartTime;
            this.currentTimeDisplay.textContent = this.formatTime(elapsed);
        }, 100);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        if (this.recordingStartTime) {
            const totalTime = Date.now() - this.recordingStartTime;
            this.totalTimeDisplay.textContent = this.formatTime(totalTime);
        }
    }

    formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        const centiseconds = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
        return `${minutes}:${seconds}.${centiseconds}`;
    }

    // Audio visualization
    startAudioVisualization() {
        if (!this.mediaStream) {
            console.log('No media stream for visualization');
            return;
        }

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            const source = this.audioContext.createMediaStreamSource(this.mediaStream);
            source.connect(this.analyser);
            this.analyser.fftSize = 256;
            this.drawLiveWaveform();
        } catch (err) {
            console.error('Error starting audio visualization:', err);
        }
    }

    stopAudioVisualization() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        if (this.audioContext && this.audioContext.state !== 'closed') {
            this.audioContext.close().catch(e => console.error('Error closing audio context:', e));
            this.audioContext = null;
        }
        this.analyser = null;
        this.drawWaveform();
    }

    drawLiveWaveform() {
        if (!this.analyser || !this.isRecording) return;

        const canvas = this.waveformCanvas;
        const ctx = canvas.getContext('2d');
        const bufferLength = this.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const draw = () => {
            if (!this.isRecording || !this.analyser) {
                this.drawWaveform();
                return;
            }

            this.animationId = requestAnimationFrame(draw);
            this.analyser.getByteFrequencyData(dataArray);

            canvas.width = canvas.offsetWidth * 2;
            canvas.height = canvas.offsetHeight * 2;
            ctx.scale(2, 2);

            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;

            // Background
            ctx.fillStyle = 'rgba(237, 233, 254, 1)';
            ctx.fillRect(0, 0, width, height);

            const barWidth = (width / bufferLength) * 2.5;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = (dataArray[i] / 255) * height * 0.8;

                // Gradient for bars
                const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
                gradient.addColorStop(0, '#8b5cf6');
                gradient.addColorStop(0.5, '#a78bfa');
                gradient.addColorStop(1, '#c4b5fd');

                ctx.fillStyle = gradient;
                
                // Draw bar from center
                const barY = (height - barHeight) / 2;
                ctx.fillRect(x, barY, barWidth - 1, barHeight);

                x += barWidth + 1;
            }
        };

        draw();
    }

    drawWaveform() {
        const canvas = this.waveformCanvas;
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);

        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;

        ctx.fillStyle = '#ede9fe';
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = '#c4b5fd';
        ctx.lineWidth = 2;
        ctx.beginPath();

        const centerY = height / 2;
        const amplitude = height * 0.3;

        for (let x = 0; x < width; x++) {
            const y = centerY + Math.sin(x * 0.05) * amplitude * Math.sin(x * 0.01);
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.stroke();
    }

    // Audio playback
    togglePlayPause() {
        if (!this.audioPlayer.src) {
            this.showToast('No audio loaded. Upload an audio file first.', 'info');
            return;
        }

        if (this.isPlaying) {
            this.audioPlayer.pause();
            this.playPauseIcon.classList.remove('fa-pause');
            this.playPauseIcon.classList.add('fa-play');
        } else {
            this.audioPlayer.play();
            this.playPauseIcon.classList.remove('fa-play');
            this.playPauseIcon.classList.add('fa-pause');
        }
        this.isPlaying = !this.isPlaying;
    }

    updateAudioProgress() {
        const progress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
        this.waveformProgress.style.width = `${progress}%`;
        this.currentTimeDisplay.textContent = this.formatTime(this.audioPlayer.currentTime * 1000);
    }

    onAudioEnded() {
        this.isPlaying = false;
        this.playPauseIcon.classList.remove('fa-pause');
        this.playPauseIcon.classList.add('fa-play');
    }

    onAudioLoaded() {
        this.totalTimeDisplay.textContent = this.formatTime(this.audioPlayer.duration * 1000);
    }

    toggleVolumeSlider() {
        this.volumeSlider.classList.toggle('hidden');
    }

    setVolume(value) {
        this.audioPlayer.volume = value / 100;
        if (value == 0) {
            this.volumeIcon.classList.remove('fa-volume-up', 'fa-volume-down');
            this.volumeIcon.classList.add('fa-volume-mute');
        } else if (value < 50) {
            this.volumeIcon.classList.remove('fa-volume-up', 'fa-volume-mute');
            this.volumeIcon.classList.add('fa-volume-down');
        } else {
            this.volumeIcon.classList.remove('fa-volume-down', 'fa-volume-mute');
            this.volumeIcon.classList.add('fa-volume-up');
        }
    }

    handleAudioFile(file) {
        if (!file.type.startsWith('audio/')) {
            this.showToast('Please upload an audio file.', 'error');
            return;
        }

        const url = URL.createObjectURL(file);
        this.audioPlayer.src = url;
        this.audioPlayerContainer.classList.remove('hidden');

        this.createNewTranscription(file.name.replace(/\.[^/.]+$/, ''));

        this.showToast('Audio file loaded! Note: For audio files, use a transcription service or record live speech.', 'info');
    }

    // Transcription management
    createNewTranscription(title = 'New Transcription') {
        const id = Date.now().toString();
        const transcription = {
            id,
            title: title + ' ' + new Date().toLocaleDateString(),
            text: '',
            createdAt: new Date().toISOString(),
            type: 'audio'
        };

        this.transcriptions.unshift(transcription);
        this.currentTranscriptionId = id;
        this.transcriptionTitle.innerText = transcription.title;
        this.transcriptionText.innerHTML = '';
        this.finalTranscript = '';

        this.renderTranscriptionList();
        this.saveToLocalStorage();
    }

    saveTranscription() {
        if (!this.currentTranscriptionId) return;

        const transcription = this.transcriptions.find(t => t.id === this.currentTranscriptionId);
        if (transcription) {
            transcription.title = this.transcriptionTitle.innerText;
            transcription.text = this.transcriptionText.innerText;
            if (this.settings.autoSave) {
                this.saveToLocalStorage();
            }
            this.updateSaveStatus();
        }
    }

    updateSaveStatus() {
        this.saveStatus.innerHTML = '<i class="fas fa-check-circle"></i> Saved';
        this.saveStatus.style.color = '#10b981';
    }

    loadTranscription(id) {
        const transcription = this.transcriptions.find(t => t.id === id);
        if (transcription) {
            this.currentTranscriptionId = id;
            this.transcriptionTitle.innerText = transcription.title;
            this.transcriptionText.innerText = transcription.text || '';
            this.finalTranscript = transcription.text || '';

            if (!transcription.text) {
                this.transcriptionText.innerHTML = '<p class="placeholder-text">Click "Transcribe more" or start recording to begin transcription. Your transcribed text will appear here.</p>';
            }

            this.renderTranscriptionList();
        }
    }

    deleteTranscription(id, event) {
        event.stopPropagation();
        
        if (!confirm('Are you sure you want to delete this transcription?')) {
            return;
        }

        this.transcriptions = this.transcriptions.filter(t => t.id !== id);
        this.saveToLocalStorage();
        this.renderTranscriptionList();

        if (this.currentTranscriptionId === id) {
            if (this.transcriptions.length > 0) {
                this.loadTranscription(this.transcriptions[0].id);
            } else {
                this.currentTranscriptionId = null;
                this.transcriptionTitle.innerText = 'Voice to Text Transcription';
                this.transcriptionText.innerHTML = '<p class="placeholder-text">Click "Transcribe more" or start recording to begin transcription. Your transcribed text will appear here.</p>';
                this.finalTranscript = '';
            }
        }

        this.showToast('Transcription deleted.', 'success');
    }

    renderTranscriptionList() {
        this.transcriptionList.innerHTML = '';

        let filteredTranscriptions = [...this.transcriptions];

        if (this.settings.filterType !== 'all') {
            filteredTranscriptions = filteredTranscriptions.filter(t => t.type === this.settings.filterType);
        }

        filteredTranscriptions.sort((a, b) => {
            switch (this.settings.sortBy) {
                case 'date-desc':
                    return new Date(b.createdAt) - new Date(a.createdAt);
                case 'date-asc':
                    return new Date(a.createdAt) - new Date(b.createdAt);
                case 'name-asc':
                    return a.title.localeCompare(b.title);
                case 'name-desc':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

        filteredTranscriptions.forEach(transcription => {
            const item = document.createElement('div');
            item.className = `list-item ${transcription.id === this.currentTranscriptionId ? 'active' : ''}`;
            item.innerHTML = `
                <div class="list-item-icon ${transcription.type}">
                    <i class="fas fa-${transcription.type === 'video' ? 'video' : 'music'}"></i>
                </div>
                <span class="list-item-text">${transcription.title}</span>
                <i class="fas fa-trash list-item-delete" data-id="${transcription.id}" title="Delete"></i>
            `;

            item.addEventListener('click', () => this.loadTranscription(transcription.id));
            item.querySelector('.list-item-delete').addEventListener('click', (e) => 
                this.deleteTranscription(transcription.id, e)
            );

            this.transcriptionList.appendChild(item);
        });
    }

    // Settings and data management
    applyListSettings() {
        this.settings.sortBy = this.sortBy.value;
        this.settings.filterType = this.filterType.value;
        this.settings.showTimestamps = this.showTimestamps.checked;
        this.settings.autoSave = this.autoSave.checked;
        
        this.saveSettings();
        this.renderTranscriptionList();
        this.hideModal(this.listSettingsModal);
        this.showToast('Settings applied!', 'success');
    }

    saveUserProfile() {
        this.userProfile.name = this.userName.value;
        this.userProfile.email = this.userEmail.value;
        this.saveUserData();
        this.hideModal(this.userModal);
        this.showToast('Profile saved!', 'success');
    }

    clearAllData() {
        if (!confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
            return;
        }

        localStorage.removeItem('voicetext_transcriptions');
        localStorage.removeItem('voicetext_settings');
        localStorage.removeItem('voicetext_user');

        this.transcriptions = [];
        this.currentTranscriptionId = null;
        this.userProfile = { name: 'Guest User', email: '', totalMinutes: 0 };
        this.finalTranscript = '';
        
        this.transcriptionTitle.innerText = 'Voice to Text Transcription';
        this.transcriptionText.innerHTML = '<p class="placeholder-text">Click "Transcribe more" or start recording to begin transcription. Your transcribed text will appear here.</p>';
        
        this.renderTranscriptionList();
        this.hideModal(this.userModal);
        this.showToast('All data cleared!', 'success');
    }

    selectPlan(plan) {
        this.hideModal(this.pricingModal);
        this.showToast(`Thanks for your interest in the ${plan.charAt(0).toUpperCase() + plan.slice(1)} plan! Payment integration coming soon.`, 'info');
    }

    // Storage functions
    loadData() {
        this.loadTranscriptions();
        this.loadSettings();
        this.loadUserData();
    }

    loadTranscriptions() {
        const saved = localStorage.getItem('voicetext_transcriptions');
        if (saved) {
            this.transcriptions = JSON.parse(saved);
            this.renderTranscriptionList();

            if (this.transcriptions.length > 0) {
                this.loadTranscription(this.transcriptions[0].id);
            }
        }
    }

    loadSettings() {
        const saved = localStorage.getItem('voicetext_settings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
    }

    loadUserData() {
        const saved = localStorage.getItem('voicetext_user');
        if (saved) {
            this.userProfile = { ...this.userProfile, ...JSON.parse(saved) };
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('voicetext_transcriptions', JSON.stringify(this.transcriptions));
    }

    saveSettings() {
        localStorage.setItem('voicetext_settings', JSON.stringify(this.settings));
    }

    saveUserData() {
        localStorage.setItem('voicetext_user', JSON.stringify(this.userProfile));
    }

    // Undo/Redo
    saveToUndoStack() {
        this.undoStack.push(this.transcriptionText.innerText);
        if (this.undoStack.length > 50) {
            this.undoStack.shift();
        }
        this.redoStack = [];
    }

    undo() {
        if (this.undoStack.length > 0) {
            this.redoStack.push(this.transcriptionText.innerText);
            this.transcriptionText.innerText = this.undoStack.pop();
            this.finalTranscript = this.transcriptionText.innerText;
            this.saveTranscription();
            this.showToast('Undo', 'info');
        }
    }

    redo() {
        if (this.redoStack.length > 0) {
            this.undoStack.push(this.transcriptionText.innerText);
            this.transcriptionText.innerText = this.redoStack.pop();
            this.finalTranscript = this.transcriptionText.innerText;
            this.saveTranscription();
            this.showToast('Redo', 'info');
        }
    }

    // Search
    toggleSearch() {
        this.searchBox.classList.toggle('hidden');
        if (!this.searchBox.classList.contains('hidden')) {
            this.searchInput.focus();
        } else {
            this.clearHighlights();
            this.searchInput.value = '';
        }
    }

    performSearch() {
        this.clearHighlights();
        const searchTerm = this.searchInput.value.trim();
        if (!searchTerm) return;

        const text = this.transcriptionText.innerHTML;
        const regex = new RegExp(`(${this.escapeRegExp(searchTerm)})`, 'gi');
        this.transcriptionText.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');

        const matches = this.transcriptionText.querySelectorAll('.highlight');
        if (matches.length > 0) {
            matches[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.showToast(`Found ${matches.length} match${matches.length > 1 ? 'es' : ''}`, 'info');
        }
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    clearHighlights() {
        const highlights = this.transcriptionText.querySelectorAll('.highlight');
        highlights.forEach(h => {
            h.outerHTML = h.innerHTML;
        });
    }

    // Translation
    async translateText() {
        const text = this.transcriptionText.innerText;
        if (!text || text.includes('Click "Transcribe more"')) {
            this.translatedText.textContent = 'No text to translate. Start a transcription first.';
            return;
        }

        const targetLang = this.targetLanguage.value;
        this.translatedText.textContent = 'Translating...';

        try {
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.substring(0, 500))}&langpair=en|${targetLang}`
            );
            const data = await response.json();

            if (data.responseStatus === 200) {
                this.translatedText.textContent = data.responseData.translatedText;
            } else {
                this.translatedText.textContent = 'Translation failed. Please try again.';
            }
        } catch (error) {
            console.error('Translation error:', error);
            this.translatedText.textContent = 'Translation service unavailable. Please try again later.';
        }
    }

    copyTranslatedText() {
        const text = this.translatedText.textContent;
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Translation copied to clipboard!', 'success');
        });
    }

    // Export
    toggleExportDropdown() {
        this.exportDropdown.classList.toggle('show');
    }

    exportTranscription(format) {
        const title = this.transcriptionTitle.innerText;
        const text = this.transcriptionText.innerText;

        if (!text || text.includes('Click "Transcribe more"')) {
            this.showToast('No transcription to export.', 'error');
            return;
        }

        this.exportDropdown.classList.remove('show');

        switch (format) {
            case 'txt':
                this.downloadFile(`${title}.txt`, text, 'text/plain');
                break;
            case 'srt':
                this.downloadFile(`${title}.srt`, this.convertToSRT(text), 'text/plain');
                break;
            case 'pdf':
                this.exportToPDF(title, text);
                break;
            case 'docx':
                this.exportToDocx(title, text);
                break;
        }

        this.showToast(`Exported as ${format.toUpperCase()}!`, 'success');
    }

    convertToSRT(text) {
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
        let srt = '';
        let time = 0;

        sentences.forEach((sentence, index) => {
            const startTime = this.formatSRTTime(time);
            const duration = Math.max(2, sentence.split(' ').length * 0.5);
            time += duration;
            const endTime = this.formatSRTTime(time);

            srt += `${index + 1}\n`;
            srt += `${startTime} --> ${endTime}\n`;
            srt += `${sentence.trim()}\n\n`;
        });

        return srt;
    }

    formatSRTTime(seconds) {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        const ms = Math.floor((seconds % 1) * 1000).toString().padStart(3, '0');
        return `${h}:${m}:${s},${ms}`;
    }

    downloadFile(filename, content, type) {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    exportToPDF(title, text) {
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${title}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
                    h1 { color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px; }
                    p { color: #555; }
                    .footer { margin-top: 40px; font-size: 12px; color: #999; }
                </style>
            </head>
            <body>
                <h1>${title}</h1>
                <p>${text.replace(/\n/g, '<br>')}</p>
                <div class="footer">Generated by VoiceText - ${new Date().toLocaleString()}</div>
            </body>
            </html>
        `;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showToast('PDF exported as HTML. Open in browser and print to PDF.', 'info');
    }

    exportToDocx(title, text) {
        const rtfContent = `{\\rtf1\\ansi\\deff0
{\\fonttbl{\\f0 Arial;}}
{\\colortbl;\\red0\\green0\\blue0;}
\\f0\\fs24
{\\b ${title}}\\par
\\par
${text.replace(/\n/g, '\\par ')}
\\par
\\par
{\\i Generated by VoiceText - ${new Date().toLocaleString()}}
}`;

        this.downloadFile(`${title}.rtf`, rtfContent, 'application/rtf');
    }

    // Toast notifications
    showToast(message, type = '') {
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 VoiceText App Initializing...');
    
    // Check browser compatibility
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isEdge = /Edg/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    
    if (!isChrome && !isEdge && !isSafari) {
        console.warn('For best speech recognition, use Chrome, Edge, or Safari');
    }
    
    window.voiceTextApp = new VoiceTextConverter();
    console.log('✅ VoiceText App Ready!');
});

// Handle window resize for canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('waveformCanvas');
    if (canvas) {
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
    }
});
