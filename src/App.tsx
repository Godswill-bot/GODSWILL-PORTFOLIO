import { ReactNode, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Cpu, BrainCircuit, Wrench, ExternalLink, ChevronDown, Phone, FileText, GraduationCap, Briefcase, LayoutTemplate , Menu, Store, Search, ShoppingCart, Globe, X, ArrowUpRight, MousePointer2, Figma, Layers3, TerminalSquare, Wand2} from 'lucide-react';
import heroPhoto from './-removebg-preview.png';
import myPhoto from './photo_2026-03-27_23-20-51.jpg';
import lensImg from './WEB 1/42f581180842195.6511cf030827b.png';
import vendexImg from './web 2/221375003-d96b0b79-f644-4349-8642-15f1bbd54b6e.png';
import clothingImg from './web 3/b2d270178866255.64ef6fea1d0fa.jpg';
import voiceTextImg from './voice text translator/mediaio-online-voice-to-text-converter.jpg';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const reveal = {
  hidden: { opacity: 0, y: 80, filter: 'blur(18px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const AnimatedSection = ({ children, id, className = '' }: AnimatedSectionProps) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.18, margin: '-120px' }}
    transition={{ staggerChildren: 0.12 }}
    className={`min-h-screen py-20 flex flex-col justify-center scroll-mt-24 ${className}`}
  >
    <motion.div
      variants={reveal}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  </motion.section>
);

const BackgroundIcons = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.16),transparent_32%),radial-gradient(circle_at_90%_18%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_10%_70%,rgba(20,184,166,0.12),transparent_32%)]"></div>
    <div className="portfolio-grid absolute inset-0 opacity-[0.12]"></div>
    <motion.div animate={{ y: [0, 26, 0], rotate: [0, 8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[12%] left-[4%] text-white/5"><GraduationCap className="w-32 h-32" /></motion.div>
    <motion.div animate={{ y: [0, -34, 0], rotate: [0, -12, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[28%] right-[6%] text-white/5"><BrainCircuit className="w-44 h-44" /></motion.div>
    <motion.div animate={{ y: [0, 25, 0], rotate: [0, 8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[62%] left-[9%] text-white/5"><Code2 className="w-24 h-24" /></motion.div>
    <motion.div animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[18%] right-[13%] text-white/5"><LayoutTemplate className="w-36 h-36" /></motion.div>
    <motion.div animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[5%] left-[30%] text-white/5"><Briefcase className="w-20 h-20" /></motion.div>
  </div>
);

const FloatingIllustrations = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div
      animate={{ y: [0, -16, 0], rotate: [-7, -2, -7] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute right-[7%] top-[13%] hidden rounded-3xl border border-white/12 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl md:block"
    >
      <div className="flex items-center gap-2 text-sm font-bold text-white"><Figma size={18} className="text-pink-300" /> UI Systems</div>
      <div className="mt-3 flex gap-2">
        <span className="h-8 w-8 rounded-full bg-orange-300"></span>
        <span className="h-8 w-8 rounded-full bg-purple-400"></span>
        <span className="h-8 w-8 rounded-full bg-teal-300"></span>
      </div>
    </motion.div>
    <motion.div
      animate={{ y: [0, 18, 0], rotate: [8, 2, 8] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-[2%] top-[23%] hidden rounded-3xl border border-white/12 bg-neutral-950/80 p-4 shadow-2xl backdrop-blur-xl lg:block"
    >
      <div className="flex items-center gap-2 text-sm font-bold text-white"><TerminalSquare size={18} className="text-teal-300" /> build.ts</div>
      <div className="mt-3 space-y-2">
        <span className="block h-2 w-28 rounded-full bg-white/20"></span>
        <span className="block h-2 w-20 rounded-full bg-orange-300/80"></span>
        <span className="block h-2 w-24 rounded-full bg-purple-300/80"></span>
      </div>
    </motion.div>
    <motion.div
      animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-[16%] right-[14%] hidden rounded-full border border-white/12 bg-white/[0.07] px-5 py-3 text-sm font-bold text-white shadow-2xl backdrop-blur-xl sm:block"
    >
      <span className="mr-2 text-orange-300">+</span> AI workflows
    </motion.div>
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
      <a href={`#${targetId}`} onClick={handleClick} title={`Scroll to ${targetId}`} className="text-neutral-600 hover:text-purple-400 transition-colors animate-bounce p-4 cursor-pointer">
        <ChevronDown size={28} />
      </a>
    </div>
  );
};

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.22], [0, -95]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.22], [0, 55]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080807] text-neutral-100 font-sans selection:bg-orange-400/30">
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-linear-to-r from-orange-300 via-purple-400 to-teal-300"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
        className="fixed inset-0 z-[90] grid place-items-center bg-[#f6efe4] text-[#080807]"
      >
        <motion.div
          initial={{ scale: 0.86, opacity: 0, filter: 'blur(10px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="font-cursive text-5xl text-orange-500">Godswill Nwafor</p>
          <p className="mt-2 text-xs font-black uppercase tracking-[0.42em]">portfolio</p>
        </motion.div>
      </motion.div>
      {/* Navigation */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#080807]/70 px-5 shadow-2xl shadow-black/30 backdrop-blur-2xl">
          <span className="text-xl font-black tracking-tight bg-linear-to-r from-amber-300 via-orange-400 to-purple-400 bg-clip-text text-transparent">
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
        <section className="min-h-[96vh] grid lg:grid-cols-[1.02fr_0.98fr] items-center gap-12 relative pt-16 overflow-hidden">
          <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/12 blur-3xl"></div>
          <div className="absolute right-0 bottom-20 -z-10 h-96 w-96 rounded-full bg-purple-500/12 blur-3xl"></div>
          <FloatingIllustrations />
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(18px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
            style={{ y: heroTextY }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-amber-200 shadow-2xl shadow-black/30">
              <Wand2 size={16} className="text-orange-300" />
              Software Engineer, UI/UX Designer & AI Specialist
            </div>
            <h2 className="font-cursive text-3xl text-orange-300 mb-3">Hi, my name is</h2>
            <h1 className="max-w-3xl text-5xl md:text-7xl xl:text-8xl font-black mb-5 tracking-tight leading-[0.95]">
              Godswill Nwafor.
            </h1>
            <h3 className="text-2xl md:text-4xl font-bold text-neutral-300 mb-8 leading-tight">
              I design clean interfaces and build intelligent software systems.
            </h3>
            <p className="max-w-xl text-neutral-400 text-lg leading-relaxed mb-10">
              Software Engineer | UI/UX Designer | AI Specialist. <br />
              First Class Graduate of Software Engineering from Mountain Top University, specializing in building seamless user experiences and full-stack intelligent systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-7 py-4 font-bold text-neutral-950 shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-300"
              >
                View Projects
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 4, filter: 'blur(18px)' }}
            animate={{ opacity: 1, x: 0, rotate: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
            style={{ y: heroImageY }}
            className="relative min-h-[520px] lg:min-h-[660px]"
          >
            <motion.div animate={{ rotate: [0, 2.5, 0], scale: [1, 1.03, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-x-6 bottom-8 top-28 rounded-[2rem] border border-white/10 bg-linear-to-b from-white/[0.10] to-white/[0.025] shadow-2xl shadow-black/40"></motion.div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-24 h-[350px] w-[350px] -translate-x-1/2 rounded-[42%_58%_54%_46%/55%_43%_57%_45%] bg-linear-to-br from-orange-300 via-orange-500 to-purple-600 opacity-90 blur-[1px]"></motion.div>
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-10 top-28 rounded-2xl border border-white/10 bg-neutral-950/75 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Available</p>
              <p className="text-sm font-bold text-white">Lagos + Remote</p>
            </motion.div>
            <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-3 top-48 rounded-2xl border border-white/10 bg-neutral-950/75 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Focus</p>
              <p className="text-sm font-bold text-white">AI Products</p>
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0], x: [0, 8, 0] }} transition={{ duration: 5.7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-28 left-0 hidden rounded-2xl border border-white/10 bg-neutral-950/80 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-orange-400 text-neutral-950">
                  <MousePointer2 size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">20+ Projects</p>
                  <p className="text-xs text-neutral-500">Frontend, AI, tools</p>
                </div>
              </div>
            </motion.div>
            <img
              src={heroPhoto}
              alt="Godswill Nwafor"
              className="absolute bottom-0 left-1/2 z-10 h-[520px] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)] md:h-[620px] lg:h-[690px]"
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#about" title="Scroll to about section" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior:'smooth'}); }} className="cursor-pointer hover:text-purple-400 transition-colors block"><ChevronDown size={28} /></a>
          </motion.div>
        </section>

        
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative border-t border-white/10 mt-16 md:mt-24 pt-16 pb-16"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#080807] px-4 text-[10px] tracking-[0.2em] text-neutral-500 font-semibold uppercase">
              Scroll Down
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full text-center items-center">
              <div className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">3+</h3>
                <span className="text-neutral-500 text-sm">Years Experience</span>
              </div>
              <div className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">20+</h3>
                <span className="text-neutral-500 text-sm">Projects Delivered</span>
              </div>
              <div className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">15+</h3>
                <span className="text-neutral-500 text-sm">Happy Clients</span>
              </div>
              <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center text-neutral-400 transition-all hover:-translate-y-1 hover:bg-white/[0.06] md:items-start md:text-left">
                <span className="font-medium mb-1 whitespace-nowrap">Based in LAGOS</span>
                <span className="text-neutral-500 text-sm">Available Worldwide</span>
              </div>
            </div>
          </motion.div>

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
            <div className="relative group h-full">
              <motion.div animate={{ rotate: [2, -2, 2] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-orange-300 via-purple-500 to-teal-300 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></motion.div>
              <div className="relative bg-neutral-900 border border-white/10 rounded-[2rem] h-full flex items-center justify-center overflow-hidden shadow-2xl shadow-black/40">
                <img src={myPhoto} alt="Godswill Nwafor" className="w-full h-full object-cover" />
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
              <motion.div
                key={i}
                whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="group relative overflow-hidden bg-white/[0.035] border border-white/10 p-6 rounded-[1.5rem] hover:bg-white/[0.06] transition-colors"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-400/10 blur-2xl transition-opacity group-hover:opacity-100"></div>
                <div className="text-orange-300 mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2 text-neutral-400">
                  {category.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
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
          <div className="border-l border-white/10 ml-4 pl-8 relative">
            <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-[1.5px] top-2 transform -translate-x-1/2 border-4 border-[#080807]"></div>
            <h3 className="text-xl font-bold">IT Intern <span className="text-orange-300">@ Lagos State Internal Revenue Service (LIRS)</span></h3>
            <p className="text-sm text-neutral-500 mb-4 mt-1">IT Placement</p>
            <ul className="space-y-3 text-neutral-400 text-base">
              <li className="flex gap-2"><span className="text-orange-300">▹</span> Gained professional experience in networking, computer hardware, and hardware diagnostics.</li>
              <li className="flex gap-2"><span className="text-orange-300">▹</span> Developed skills in software documentation and enterprise IT operations.</li>
              <li className="flex gap-2"><span className="text-orange-300">▹</span> Utilized Artificial Intelligence practically to solve real-world problems and optimize IT workflows.</li>
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
          <div className="border-l border-white/10 ml-4 pl-8 relative">
            <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-[1.5px] top-2 transform -translate-x-1/2 border-4 border-[#080807]"></div>
            <h3 className="text-xl font-bold">B.Sc. Software Engineering <span className="text-orange-300">@ Mountain Top University</span></h3>
            <p className="text-sm text-neutral-500 mb-4 mt-1">First Class Honors</p>
            <ul className="space-y-3 text-neutral-400 text-base">
              <li className="flex gap-2"><span className="text-orange-300">▹</span> Comprehensive background in software development lifecycles, advanced algorithm design, and scalable architectures.</li>
              <li className="flex gap-2"><span className="text-orange-300">▹</span> Conducted AI and Full-Stack web application research projects focused on real-world problem-solving methods.</li>
              <li className="flex gap-2"><span className="text-orange-300">▹</span> Developed strong technical proficiency in UI/UX architecture, networking, and computing mathematics.</li>
              </ul>
            </div>
            <NextSectionArrow targetId="projects" />
        </AnimatedSection>
    <AnimatedSection id="projects">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
                <Layers3 className="mr-3 inline-block text-orange-300" size={34} /> Featured Projects
              </h2>
              <p className="text-neutral-400 max-w-xl">
                A selection of modern web applications showcasing complex interactive UIs, responsive digital storefronts, and API-driven data dashboards.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: Lens Photography */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.06] flex flex-col">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-300/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="h-48 bg-neutral-950/70 p-4 border-b border-white/10 flex flex-col">
                <div className="flex justify-between items-center mb-4 text-neutral-500 pb-2 border-b border-neutral-800/50">
                  <div className="flex gap-2 font-mono font-semibold"><span>Lens.</span></div>
                  <div className="flex gap-3"><Menu size={16}/></div>
                </div>
                <div className="flex-1 relative rounded-lg border border-neutral-800 overflow-hidden group-hover:border-purple-500/30 transition-colors">
                  <img src={lensImg} alt="Lens Photography" className="w-full h-full object-cover object-top cursor-pointer transition-transform duration-700 group-hover:scale-110" onClick={() => setSelectedImage(lensImg)} />
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
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.06] flex flex-col">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-300/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="h-48 bg-neutral-950/70 p-4 border-b border-white/10 flex flex-col">
                <div className="flex justify-between items-center mb-4 text-neutral-500 pb-2 border-b border-neutral-800/50">
                  <div className="flex items-center gap-2">
                    <Store size={16} className="text-purple-500"/>
                    <span className="text-xs font-bold uppercase tracking-wider">Vendex</span>
                  </div>
                  <div className="flex gap-2 bg-neutral-900 px-2 py-1 rounded w-24 border border-neutral-800">
                    <Search size={12}/>
                  </div>
                </div>
                <div className="flex-1 relative rounded-lg border border-neutral-800 overflow-hidden group-hover:border-purple-500/30 transition-colors">
                  <img src={vendexImg} alt="Vendex Platform" className="w-full h-full object-cover object-top cursor-pointer transition-transform duration-700 group-hover:scale-110" onClick={() => setSelectedImage(vendexImg)} />
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
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.06] flex flex-col">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-300/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="h-48 bg-neutral-950/70 p-4 border-b border-white/10 flex flex-col">
                <div className="flex justify-between items-center mb-4 text-neutral-500 pb-2 border-b border-neutral-800/50">
                  <div className="flex gap-2 uppercase text-xs tracking-widest font-mono font-bold">Apparel.</div>
                  <div className="flex gap-3">
                    <Search size={14}/>
                    <ShoppingCart size={14}/>
                  </div>
                </div>
                <div className="flex-1 relative rounded-lg border border-neutral-800 overflow-hidden group-hover:border-purple-500/30 transition-colors">
                  <img src={clothingImg} alt="Clothing Shop" className="w-full h-full object-cover object-top cursor-pointer transition-transform duration-700 group-hover:scale-110" onClick={() => setSelectedImage(clothingImg)} />
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
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.06] flex flex-col">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-300/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="h-48 bg-neutral-950/70 p-4 border-b border-white/10 flex flex-col">
                <div className="flex justify-center items-center mb-6 text-neutral-500 pt-2 pb-2 border-b border-neutral-800/50">
                  <Globe size={18} className="text-purple-500 mr-2" /> <span className="text-sm font-semibold tracking-wide">VoiceText</span>
                </div>
                <div className="flex-1 relative rounded-lg border border-neutral-800 overflow-hidden group-hover:border-purple-500/30 transition-colors">
                  <img src={voiceTextImg} alt="VoiceText Translator" className="w-full h-full object-cover object-top cursor-pointer transition-transform duration-700 group-hover:scale-110" onClick={() => setSelectedImage(voiceTextImg)} />
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
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
                  <h3 className="text-lg font-bold">CSRC Role <span className="text-orange-300">@ NACOS, Mountain Top University</span></h3>
                  <p className="text-neutral-400 text-sm mt-2">Served as the CSRC of the Nigerian Association of Computing Students, leading initiatives at Mountain Top University.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
                  <h3 className="text-lg font-bold">Member <span className="text-orange-300">@ ATC Africa</span></h3>
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
                  <a key={i} href={`/certifications/${cert.file}`} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-orange-300 shrink-0 group-hover:bg-orange-400 group-hover:text-neutral-950 transition-colors">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-200 group-hover:text-orange-300 transition-colors">{cert.title}</h4>
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
          <h2 className="font-cursive text-4xl text-orange-300 mb-4">What's Next?</h2>
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
            className="rounded-full border border-orange-300/70 bg-orange-300 px-8 py-4 font-bold text-neutral-950 transition-all hover:-translate-y-1 hover:bg-orange-200"
          >
            Say Hello
          </a>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-neutral-500 text-sm pb-10">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" aria-label="Github Profile" className="hover:text-orange-300 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/godswill-nwafor-10a863394/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:gnwafor580@gmail.com" aria-label="Email" className="hover:text-orange-300 transition-colors"><Mail size={20} /></a>
        </div>
        <p>Built with React, Tailwind & Framer Motion</p>
        <p className="mt-1">© 2026 Godswill Nwafor.</p>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              title="Close Image Modal"
              className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors z-50 bg-black/50 p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-full flex items-center justify-center cursor-default"
            >
              <img
                src={selectedImage}
                alt="Project Fullscreen"
                className="max-w-full max-h-[90vh] object-contain rounded-xl border border-neutral-800 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
