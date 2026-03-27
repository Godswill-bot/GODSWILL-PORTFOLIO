# 🎤 VoiceText - Voice to Text Converter

A modern, browser-based voice to text transcription application built with vanilla JavaScript using the Web Speech API.

![VoiceText Banner](https://img.shields.io/badge/VoiceText-Voice%20to%20Text-8b5cf6?style=for-the-badge&logo=microphone&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [Browser Support](#-browser-support)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [API Reference](#-api-reference)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Core Features
- 🎙️ **Real-time Voice to Text** - Convert speech to text instantly using Web Speech API
- 🌍 **Multi-language Support** - 13+ languages including English, Spanish, French, German, Chinese, Japanese, and more
- 📝 **Editable Transcriptions** - Edit your transcribed text directly in the interface
- 💾 **Auto-save** - All transcriptions are automatically saved to local storage
- 📊 **Live Audio Visualization** - Real-time waveform display while recording

### Export Options
- 📄 **TXT** - Plain text export
- 🎬 **SRT** - Subtitle format for videos
- 📑 **PDF** - Export as HTML (printable to PDF)
- 📝 **DOCX** - Rich text format export

### Additional Features
- 🌐 **Translation** - Translate transcriptions to 10+ languages using MyMemory API
- 🔍 **Search** - Search within your transcriptions with highlighting
- ↩️ **Undo/Redo** - Full history support for text changes
- 👤 **User Profiles** - Track your usage statistics
- ⚙️ **Settings** - Customize sorting, filtering, and preferences
- 📱 **Responsive Design** - Works on desktop and tablet devices

## 🎯 Demo

To run the demo:
1. Clone or download this repository
2. Open `index.html` in Chrome or Edge browser
3. Click "Transcribe more" and start speaking!

## 🚀 Installation

### Quick Start (No Installation Required!)

1. **Download the project:**
   ```bash
   git clone https://github.com/yourusername/voice-text-translator.git
   ```
   Or download as ZIP and extract.

2. **Open in browser:**
   - Navigate to the project folder
   - Double-click `index.html`
   - Or right-click → Open with → Chrome/Edge

### Using Live Server (Recommended)

For the best experience with all features:

1. Install [VS Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

## 📖 Usage

### Starting a Transcription

1. Click **"Transcribe more"** button or the **red record button** (🔴)
2. Select your **speech language** from the dropdown
3. Click **"Start Recording"**
4. **Allow microphone access** when prompted by the browser
5. **Speak clearly** into your microphone
6. Watch your speech convert to text in real-time!
7. Click the **stop button** (⬛) when finished

### Managing Transcriptions

- **View History**: All transcriptions appear in the left sidebar
- **Switch**: Click any item to load that transcription
- **Delete**: Hover over an item and click the trash icon
- **Edit**: Click on the text area to edit manually
- **Rename**: Click on the title to change it

### Exporting

1. Click the **"Export"** button
2. Choose your format:
   - **TXT** - Simple text file
   - **SRT** - Subtitle format
   - **PDF** - Opens as HTML (use Ctrl+P to print as PDF)
   - **DOCX** - Rich text format

### Translation

1. Click the **"Translate"** button in the toolbar
2. Select your target language
3. View the translation
4. Click **"Copy Translation"** to copy to clipboard

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Recommended |
| Edge | ✅ Full | Recommended |
| Safari | ⚠️ Partial | May require HTTPS |
| Firefox | ❌ Limited | Speech API not fully supported |
| Opera | ✅ Full | Works well |

> **Note:** The Web Speech API requires a modern browser. For best results, use **Google Chrome** or **Microsoft Edge**.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |
| `Ctrl + F` | Search |
| `Ctrl + S` | Save |
| `Ctrl + E` | Export |
| `Space` | Play/Pause audio |
| `R` | Start/Stop recording |
| `?` | Show shortcuts |
| `Esc` | Close modals |

## 📁 Project Structure

```
voice-text-translator/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── app.js              # Main application logic
├── README.md           # This file
│
└── assets/             # (Optional) Images and icons
```

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript (ES6+)** - Application logic
- **Web Speech API** - Browser-native speech recognition
- **LocalStorage API** - Data persistence
- **MediaDevices API** - Microphone access
- **Web Audio API** - Audio visualization
- **MyMemory Translation API** - Text translation

## 📚 API Reference

### Web Speech API

The application uses the browser's native Web Speech API:

```javascript
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
```

### Translation API

Using MyMemory's free translation service:

```
GET https://api.mymemory.translated.net/get
  ?q={text}
  &langpair={source}|{target}
```

## 🔧 Troubleshooting

### "Microphone access denied"
- Click the lock/info icon in the browser address bar
- Allow microphone access for the site
- Refresh the page and try again

### "Speech recognition not working"
- Ensure you're using Chrome or Edge
- Check that your microphone is connected and working
- Try speaking louder or closer to the microphone
- Check internet connection (required for speech processing)

### "No speech detected"
- Speak clearly and at a normal pace
- Reduce background noise
- Check microphone volume in system settings
- Try a different microphone

### "Translation not working"
- Check your internet connection
- The free API has usage limits (1000 words/day)
- Try shorter text segments

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Ideas for Contribution
- [ ] Add more export formats (Word, JSON)
- [ ] Implement speaker diarization
- [ ] Add cloud storage integration
- [ ] Create mobile app version
- [ ] Add audio file transcription (using Whisper API)
- [ ] Implement custom vocabulary support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 VoiceText

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - Mozilla Developer Network
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Inter font family
- [MyMemory API](https://mymemory.translated.net/) - Translation service

---

<p align="center">
  Made with ❤️ by <a href="#">VoiceText Team</a>
</p>

<p align="center">
  <a href="#-voicetext---voice-to-text-converter">Back to Top ⬆️</a>
</p>
