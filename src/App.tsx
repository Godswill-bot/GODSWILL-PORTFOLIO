import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Cpu, BrainCircuit, Wrench, ExternalLink, ChevronDown, Phone, FileText, GraduationCap, Briefcase, LayoutTemplate , Menu, Camera, Store, Search, ShoppingCart, Shirt, Play, Globe, Mic} from 'lucide-react';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection = ({ children, id, className = '' }: AnimatedSectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6 }}
    className={`min-h-screen py-20 flex flex-col justify-center ${className}`}
  >
    {children}
  </motion.section>
);

const BackgroundIcons = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
    <motion.div animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[5%]"><GraduationCap className="w-32 h-32" /></motion.div>
    <motion.div animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[25%] right-[8%]"><BrainCircuit className="w-40 h-40" /></motion.div>
    <motion.div animate={{ y: [0, 25, 0], rotate: [0, 8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] left-[12%]"><Code2 className="w-24 h-24" /></motion.div>
    <motion.div animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] right-[15%]"><LayoutTemplate className="w-36 h-36" /></motion.div>
    <motion.div animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[5%] left-[30%]"><Briefcase className="w-20 h-20" /></motion.div>
  </div>
);


const NextSectionArrow = ({ targetId }: { targetId: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex justify-center mt-12 mb-4 w-full">
      <a href={`#${targetId}`} onClick={handleClick} className="text-neutral-600 hover:text-purple-400 transition-colors animate-bounce p-4 cursor-pointer">
        <ChevronDown size={28} />
      </a>
    </div>
  );
};

function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md z-50 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            GN.
          </span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
            {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Leadership', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <BackgroundIcons />
      <main className="max-w-6xl mx-auto px-6 pt-16 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-purple-400 font-medium mb-4 tracking-wide">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Godswill Nwafor.
            </h1>
            <h3 className="text-3xl md:text-5xl font-bold text-neutral-400 mb-8">
              I build scalable intelligence & software.
            </h3>
            <p className="max-w-xl text-neutral-400 text-lg leading-relaxed mb-10">
              Software Engineer | UI/UX Designer | AI Specialist. <br />
              First Class Graduate of Software Engineering from Mountain Top University, specializing in building seamless user experiences and full-stack intelligent systems.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior:'smooth'}); }} className="cursor-pointer hover:text-purple-400 transition-colors block"><ChevronDown size={28} /></a>
          </motion.div>
        </section>

        
          {/* Stats Section */}
          <div className="w-full relative border-t border-neutral-800 mt-16 md:mt-24 pt-16 pb-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 px-4 text-[10px] tracking-[0.2em] text-neutral-500 font-semibold uppercase">
              Scroll Down
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full text-center items-center">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">3+</h3>
                <span className="text-neutral-500 text-sm">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">20+</h3>
                <span className="text-neutral-500 text-sm">Projects Delivered</span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">15+</h3>
                <span className="text-neutral-500 text-sm">Happy Clients</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left text-neutral-400">
                <span className="font-medium mb-1 whitespace-nowrap">Based in Abeokuta, NG</span>
                <span className="text-neutral-500 text-sm">Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* About Section */}
        <AnimatedSection id="about">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="h-px bg-neutral-800 flex-1 max-w-sm"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-neutral-400 text-lg leading-relaxed">
            <div>
              <p className="mb-4">
                Hello! I'm Godswill, a First Class Software Engineering graduate from Mountain Top University. I am a passionate Software Engineer, UI/UX Designer, and AI Specialist who enjoys building impactful things that live on the internet.
              </p>
              <p>
                From creating sleek frontend interfaces to designing robust backend architectures, I possess advanced knowledge in using AI to solve real-world problems. I also have professional skills in IT Service Management, networking, and IT operations, allowing me to build complete, efficient digital experiences.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-500 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <div className="relative bg-neutral-900 border border-neutral-800 p-8 rounded-xl h-full flex items-center justify-center">
                <BrainCircuit className="w-32 h-32 text-purple-400 opacity-50" />
              </div>
            </div>
          </div>
          <NextSectionArrow targetId="skills" />
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Technical Arsenal</h2>
            <div className="h-px bg-neutral-800 flex-1 max-w-sm"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend & Design", icon: <Code2 />, skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS/JS", "UI/UX Design"] },
              { title: "Backend", icon: <Cpu />, skills: ["Node.js", "REST APIs", "Database Management", "Express", "Python"] },
              { title: "IT & Hardware", icon: <Wrench />, skills: ["IT Service Management", "Networking", "Computer Hardware", "Hardware Diagnostics", "IT Operations"] },
              { title: "AI & Tools", icon: <BrainCircuit />, skills: ["AI Problem Solving", "Git & GitHub", "Vite", "Software Documentation", "Modern Tech Stack"] }
            ].map((category, i) => (
              <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-colors">
                <div className="text-purple-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2 text-neutral-400">
                  {category.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <NextSectionArrow targetId="experience" />
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experience">
           <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold">Where I've Worked</h2>
            <div className="h-px bg-neutral-800 flex-1 max-w-sm"></div>
          </div>
          <div className="border-l border-neutral-800 ml-4 pl-8 relative">
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[1.5px] top-2 transform -translate-x-1/2 border-4 border-neutral-950"></div>
            <h3 className="text-xl font-bold">IT Intern <span className="text-purple-400">@ Lagos State Internal Revenue Service (LIRS)</span></h3>
            <p className="text-sm text-neutral-500 mb-4 mt-1">IT Placement</p>
            <ul className="space-y-3 text-neutral-400 text-base">
              <li className="flex gap-2"><span className="text-purple-400">▹</span> Gained professional experience in networking, computer hardware, and hardware diagnostics.</li>
              <li className="flex gap-2"><span className="text-purple-400">▹</span> Developed skills in software documentation and enterprise IT operations.</li>
              <li className="flex gap-2"><span className="text-purple-400">▹</span> Utilized Artificial Intelligence practically to solve real-world problems and optimize IT workflows.</li>
            </ul>
          </div>
          <NextSectionArrow targetId="education" />
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection id="education">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="h-px bg-neutral-800 flex-1 max-w-sm"></div>
          </div>
          <div className="border-l border-neutral-800 ml-4 pl-8 relative">
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[1.5px] top-2 transform -translate-x-1/2 border-4 border-neutral-950"></div>
            <h3 className="text-xl font-bold">B.Sc. Software Engineering <span className="text-purple-400">@ Mountain Top University</span></h3>
            <p className="text-sm text-neutral-500 mb-4 mt-1">First Class Honors</p>
            <ul className="space-y-3 text-neutral-400 text-base">
              <li className="flex gap-2"><span className="text-purple-400">▹</span> Comprehensive background in software development lifecycles, advanced algorithm design, and scalable architectures.</li>
              <li className="flex gap-2"><span className="text-purple-400">▹</span> Conducted AI and Full-Stack web application research projects focused on real-world problem-solving methods.</li>
              <li className="flex gap-2"><span className="text-purple-400">▹</span> Developed strong technical proficiency in UI/UX architecture, networking, and computing mathematics.</li>
              </ul>
            </div>
            <NextSectionArrow targetId="projects" />
        </AnimatedSection>
    <AnimatedSection id="projects">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
                <span className="text-purple-500">&gt;</span> Featured Projects
              </h2>
              <p className="text-neutral-400 max-w-xl">
                A selection of modern web applications showcasing complex interactive UIs, responsive digital storefronts, and API-driven data dashboards.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: Lens Photography */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
              <div className="h-48 bg-neutral-950 p-4 border-b border-neutral-800 flex flex-col">
                <div className="flex justify-between items-center mb-4 text-neutral-500 pb-2 border-b border-neutral-800/50">
                  <div className="flex gap-2 font-mono font-semibold"><span>Lens.</span></div>
                  <div className="flex gap-3"><Menu size={16}/></div>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-2 group-hover:bg-neutral-900 transition-colors">
                  <div className="col-span-2 row-span-2 bg-neutral-800/50 rounded-lg flex items-center justify-center border border-neutral-700/50 relative overflow-hidden">
                     <div className="absolute inset-0 bg-linear-to-bl from-purple-500/10 to-transparent"></div>
                    <Camera className="text-neutral-500 w-12 h-12 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="bg-neutral-800/30 rounded-lg border border-neutral-800"></div>
                  <div className="bg-neutral-800/30 rounded-lg border border-neutral-800"></div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold hover:text-purple-400 transition-colors cursor-pointer">Lens Photography</h3>
                  <div className="flex gap-3 text-neutral-400">
                    <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer" />
                  </div>
                </div>
                <p className="text-neutral-400 flex-1 mb-6 text-sm">
                  A modern, responsive photography portfolio showcasing dynamic galleries, animated storytelling, and professional services. Built with React router and structured for impactful visual presentations.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-purple-300/80">
                  <span className="px-2 py-1 bg-purple-500/10 rounded">React</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">React Router</span>
                </div>
              </div>
            </div>

            {/* Project 2: Vendex */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
              <div className="h-48 bg-neutral-950 p-4 border-b border-neutral-800 flex flex-col">
                <div className="flex justify-between items-center mb-4 text-neutral-500 pb-2 border-b border-neutral-800/50">
                  <div className="flex items-center gap-2">
                    <Store size={16} className="text-purple-500"/>
                    <span className="text-xs font-bold uppercase tracking-wider">Vendex</span>
                  </div>
                  <div className="flex gap-2 bg-neutral-900 px-2 py-1 rounded w-24 border border-neutral-800">
                    <Search size={12}/>
                  </div>
                </div>
                <div className="flex-1 flex gap-4">
                  <div className="w-1/3 bg-neutral-900 rounded-lg border border-neutral-800/50 p-2 flex flex-col gap-2">
                     <div className="h-2 bg-neutral-700 rounded w-full"></div>
                     <div className="h-2 bg-neutral-800 rounded w-3/4"></div>
                     <div className="h-2 bg-neutral-800 rounded w-5/6"></div>
                  </div>
                  <div className="flex-1 bg-neutral-800/20 rounded-lg border border-neutral-800/50 p-4 flex flex-col gap-3 group-hover:bg-neutral-800/40 transition-colors">
                    <div className="h-12 bg-neutral-800/60 rounded flex items-center justify-center"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold hover:text-purple-400 transition-colors cursor-pointer">Vendex Platform</h3>
                  <div className="flex gap-3 text-neutral-400">
                    <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer" />
                  </div>
                </div>
                <p className="text-neutral-400 flex-1 mb-6 text-sm">
                  A versatile vendor management and product showcase solution featuring sleek navigation, new arrivals algorithms, and highly scalable frontend architectural patterns.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-purple-300/80">
                  <span className="px-2 py-1 bg-purple-500/10 rounded">React</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">State Management</span>
                </div>
              </div>
            </div>

            {/* Project 3: Clothing Shop */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
              <div className="h-48 bg-neutral-950 p-4 border-b border-neutral-800 flex flex-col">
                <div className="flex justify-between items-center mb-4 text-neutral-500 pb-2 border-b border-neutral-800/50">
                  <div className="flex gap-2 uppercase text-xs tracking-widest font-mono font-bold">Apparel.</div>
                  <div className="flex gap-3">
                    <Search size={14}/>
                    <ShoppingCart size={14}/>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <div className="bg-neutral-800/20 rounded-lg border border-neutral-800 relative overflow-hidden flex items-center justify-center group-hover:border-purple-500/30 transition-colors">
                    <Shirt className="text-neutral-600 w-10 h-10 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="bg-neutral-800/20 rounded-lg border border-neutral-800 relative overflow-hidden flex items-center justify-center group-hover:border-purple-500/30 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="text-neutral-400 w-8 h-8 group-hover:text-white transition-colors" fill="currentColor"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold hover:text-purple-400 transition-colors cursor-pointer">E-Commerce Boutique</h3>
                  <div className="flex gap-3 text-neutral-400">
                    <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer" />
                  </div>
                </div>
                <p className="text-neutral-400 flex-1 mb-6 text-sm">
                  A comprehensive e-commerce frontend for a fashion brand. Includes responsive product grids, sizing guides, interactive shopping cart capabilities, and robust video modals.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-purple-300/80">
                  <span className="px-2 py-1 bg-purple-500/10 rounded">React</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">Responsive Design</span>
                </div>
              </div>
            </div>

            {/* Project 4: VoiceText Translator */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
              <div className="h-48 bg-neutral-950 p-4 border-b border-neutral-800 flex flex-col">
                <div className="flex justify-center items-center mb-6 text-neutral-500 pt-2 pb-2 border-b border-neutral-800/50">
                  <Globe size={18} className="text-purple-500 mr-2" /> <span className="text-sm font-semibold tracking-wide">VoiceText</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                   <div className="w-16 h-16 rounded-full bg-purple-600/10 border border-purple-500/30 flex items-center justify-center relative">
                     <div className="absolute inset-0 rounded-full border border-purple-500/50 group-hover:animate-ping"></div>
                     <Mic className="text-purple-400 w-6 h-6"/>
                   </div>
                   <div className="w-3/4 h-8 bg-neutral-900 rounded-lg p-2 flex flex-col gap-1 border border-neutral-800">
                     <div className="h-2 bg-neutral-700/80 rounded w-full animate-pulse"></div>
                   </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold hover:text-purple-400 transition-colors cursor-pointer">VoiceText Translator</h3>
                  <div className="flex gap-3 text-neutral-400">
                    <ExternalLink className="w-5 h-5 hover:text-white cursor-pointer" />
                  </div>
                </div>
                <p className="text-neutral-400 flex-1 mb-6 text-sm">
                  An intelligent voice-to-text conversion tool utilizing the Web Speech API. Features an intuitive dashboard, settings management, and real-time transcription capabilities.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-purple-300/80">
                  <span className="px-2 py-1 bg-purple-500/10 rounded">HTML/CSS</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">JavaScript</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">Web Speech API</span>
                </div>
              </div>
            </div>
          </div>
          <NextSectionArrow targetId="leadership" />
        </AnimatedSection>

        {/* Leadership & Certifications */}
        <AnimatedSection id="leadership">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold">Leadership & Community</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold">CSRC Role <span className="text-purple-400">@ NACOS, Mountain Top University</span></h3>
                  <p className="text-neutral-400 text-sm mt-2">Served as the CSRC of the Nigerian Association of Computing Students, leading initiatives at Mountain Top University.</p>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold">Member <span className="text-purple-400">@ ATC Africa</span></h3>
                  <p className="text-neutral-400 text-sm mt-2">Participated in meaningful projects that contribute both academically and provide real-world solutions.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Udemy: Complete Python Bootcamp", file: "UDEMY PYTHON.pdf" },
                  { title: "Udemy: UI/UX Design Specialized Course", file: "UDEMY UI UX.pdf" },
                  { title: "Udemy: Web Development Mastery", file: "GODSWILL UDEMY.pdf" },
                  { title: "Professional Certification 1", file: "UC-6250b73c-a1cb-4bb9-9138-5e72fdcebc07.pdf" },
                  { title: "Professional Certification 2", file: "UC-625b781d-9549-43ef-8c42-5727806e76e6.pdf" }
                ].map((cert, i) => (
                  <a key={i} href={`/certifications/${cert.file}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl hover:bg-neutral-800 hover:-translate-y-1 transition-all group">
                    <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-200 group-hover:text-purple-400 transition-colors">{cert.title}</h4>
                      <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">Click to view PDF <ExternalLink size={10}/></p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <NextSectionArrow targetId="contact" />
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="min-h-[70vh] items-center text-center">
          <h2 className="text-purple-400 font-medium tracking-wide mb-4">What's Next?</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="max-w-xl text-neutral-400 text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          <div className="flex flex-col gap-4 max-w-xl mx-auto items-center mb-8 text-neutral-400">
            <p className="flex items-center gap-2"><Mail size={18} /> gnwafor580@gmail.com</p>
            <p className="flex items-center gap-2"><Phone size={18} /> 09064071165</p>
          </div>
          <a
            href="mailto:gnwafor580@gmail.com"
            className="px-8 py-4 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg font-medium transition-colors"
          >
            Say Hello
          </a>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-neutral-500 text-sm pb-10">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" aria-label="Github Profile" className="hover:text-purple-400 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/godswill-nwafor-10a863394/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:gnwafor580@gmail.com" aria-label="Email" className="hover:text-purple-400 transition-colors"><Mail size={20} /></a>
        </div>
        <p>Built with React, Tailwind & Framer Motion</p>
        <p className="mt-1">© 2026 Godswill Nwafor.</p>
      </footer>
    </div>
  );
}

export default App;
