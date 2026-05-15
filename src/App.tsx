import { ReactNode, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Wrench,
  X,
} from 'lucide-react';
import myPhoto from './photo_2026-03-27_23-20-51.jpg';
import lensImg from './WEB 1/42f581180842195.6511cf030827b.png';
import vendexImg from './web 2/221375003-d96b0b79-f644-4349-8642-15f1bbd54b6e.png';
import clothingImg from './web 3/b2d270178866255.64ef6fea1d0fa.jpg';
import voiceTextImg from './voice text translator/mediaio-online-voice-to-text-converter.jpg';

const smoothEase = [0.22, 1, 0.36, 1] as const;

const navItems = [
  'About',
  'Skills',
  'Experience',
  'Education',
  'Projects',
  'Leadership',
  'Contact',
];

const stats = [
  ['3+', 'Years Experience'],
  ['20+', 'Projects Delivered'],
  ['15+', 'Happy Clients'],
  ['Lagos', 'Available worldwide'],
];

const skills = [
  {
    marker: '(a)',
    title: 'Frontend & Design',
    icon: <Code2 />,
    body: 'React, TypeScript, Tailwind CSS, HTML, CSS, JavaScript, UI/UX design, layout systems, and polished product interfaces.',
  },
  {
    marker: '(b)',
    title: 'Backend & Systems',
    icon: <Cpu />,
    body: 'Node.js, REST APIs, database management, Express, Python, architecture thinking, and software documentation.',
  },
  {
    marker: '(c)',
    title: 'AI, IT & Operations',
    icon: <BrainCircuit />,
    body: 'AI problem solving, Git/GitHub, Vite, networking, hardware diagnostics, IT service management, and IT operations.',
  },
  {
    marker: '(d)',
    title: 'Hardware Practice',
    icon: <Wrench />,
    body: 'Hands-on diagnostics, troubleshooting, maintenance workflows, and practical support for real enterprise environments.',
  },
];

const projects = [
  {
    title: 'Lens Photography',
    image: lensImg,
    tags: ['React', 'TypeScript', 'React Router'],
    summary:
      'A responsive photography portfolio with galleries, animated storytelling, services, and a visual-first presentation system.',
  },
  {
    title: 'Vendex Platform',
    image: vendexImg,
    tags: ['React', 'TypeScript', 'State Management'],
    summary:
      'A vendor management and product showcase frontend with refined navigation, product sections, and scalable UI patterns.',
  },
  {
    title: 'E-Commerce Boutique',
    image: clothingImg,
    tags: ['React', 'TypeScript', 'Responsive Design'],
    summary:
      'A fashion storefront with product grids, shopping interactions, sizing content, and a modern retail browsing experience.',
  },
  {
    title: 'VoiceText Translator',
    image: voiceTextImg,
    tags: ['HTML/CSS', 'JavaScript', 'Web Speech API'],
    summary:
      'An intelligent speech-to-text tool with real-time transcription, dashboard controls, and practical browser API usage.',
  },
];

const certifications = [
  { title: 'Udemy: Complete Python Bootcamp', file: 'UDEMY PYTHON.pdf' },
  { title: 'Udemy: UI/UX Design Specialized Course', file: 'UDEMY UI UX.pdf' },
  { title: 'Udemy: Web Development Mastery', file: 'GODSWILL UDEMY.pdf' },
  { title: 'Professional Certification 1', file: 'UC-6250b73c-a1cb-4bb9-9138-5e72fdcebc07.pdf' },
  { title: 'Professional Certification 2', file: 'UC-625b781d-9549-43ef-8c42-5727806e76e6.pdf' },
];

type EditorialSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Spark = ({ className = '' }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 64 64"
    aria-hidden="true"
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
  >
    <path d="M32 4L36 25L58 20L40 32L58 44L36 39L32 60L28 39L6 44L24 32L6 20L28 25L32 4Z" fill="currentColor" />
  </motion.svg>
);

const EditorialSection = ({ id, eyebrow, title, children, dark = false, className = '' }: EditorialSectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 80, filter: 'blur(18px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, amount: 0.18, margin: '-120px' }}
    transition={{ duration: 0.9, ease: smoothEase }}
    className={`relative min-h-screen border-t ${
      dark ? 'border-white/10 bg-[#1c1c1a] text-[#f4f1ea]' : 'border-black/10 bg-[#f4f1ea] text-[#151515]'
    } px-5 py-20 md:px-10 ${className}`}
  >
    <div className="mx-auto grid max-w-[1520px] gap-10 lg:grid-cols-[0.8fr_2fr]">
      <div className="flex items-start justify-between gap-6 lg:block">
        <p className={`text-xs uppercase leading-tight ${dark ? 'text-white/50' : 'text-black/45'}`}>{eyebrow}</p>
        <h2 className="mt-4 max-w-sm text-5xl font-medium leading-[0.92] md:text-7xl lg:sticky lg:top-28">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </div>
  </motion.section>
);

const LineCoder = ({ dark = false }: { dark?: boolean }) => (
  <motion.svg
    viewBox="0 0 420 360"
    aria-hidden="true"
    className={`w-full max-w-[420px] ${dark ? 'text-[#f4f1ea]' : 'text-[#151515]'}`}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.35 }}
  >
    <motion.g
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } },
      }}
    >
      {[
        'M82 310H330',
        'M162 294L151 185L240 185L230 294',
        'M158 185C180 160 220 160 244 185',
        'M178 145C165 126 170 99 194 91C223 82 254 105 248 135C244 158 199 162 178 145Z',
        'M132 190C103 202 92 230 104 254C114 276 144 285 164 264',
        'M254 189C287 198 303 225 296 253C289 281 258 293 234 272',
        'M130 227L84 207',
        'M293 226L342 205',
        'M184 219H225',
        'M184 244H247',
        'M177 292L145 326',
        'M232 292L267 326',
        'M112 108L88 84M97 126H61M310 112L338 88M321 137H360',
      ].map((d) => (
        <motion.path
          key={d}
          d={d}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            show: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: smoothEase } },
          }}
        />
      ))}
    </motion.g>
    <motion.g
      fill="currentColor"
      animate={{ y: [0, -9, 0], opacity: [0.35, 1, 0.35] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <circle cx="66" cy="162" r="5" />
      <circle cx="353" cy="160" r="5" />
      <circle cx="326" cy="304" r="4" />
    </motion.g>
  </motion.svg>
);

const FloatingCode = () => {
  const signs = ['</>', '{ }', 'AI', '=>', '01', 'const'];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {signs.map((sign, index) => (
        <motion.span
          key={sign}
          className="absolute font-mono text-2xl font-black text-black md:text-4xl"
          style={{
            left: `${8 + ((index * 17) % 72)}%`,
            top: `${12 + ((index * 23) % 68)}%`,
          }}
          animate={{
            y: [0, index % 2 ? 24 : -24, 0],
            x: [0, index % 2 ? -16 : 16, 0],
            rotate: [index % 2 ? 8 : -8, index % 2 ? -6 : 6, index % 2 ? 8 : -8],
          }}
          transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {sign}
        </motion.span>
      ))}
    </div>
  );
};

const TopChrome = () => (
  <nav className="fixed left-0 right-0 top-0 z-50 px-5 py-4 text-[#151515] mix-blend-difference md:px-8">
    <div className="mx-auto grid max-w-[1520px] grid-cols-[1fr_auto_1fr] items-start text-white">
      <button
        onClick={() => scrollTo('contact')}
        className="flex max-w-[170px] items-start gap-3 text-left text-[11px] font-semibold leading-tight"
      >
        <Spark className="mt-0.5 h-5 w-5 shrink-0" />
        Open for collaborations and offers
      </button>
      <button onClick={() => scrollTo('home')} className="text-xl font-black tracking-tight">
        GDNWFR
      </button>
      <div className="hidden justify-end gap-4 text-[11px] font-semibold md:flex">
        {navItems.slice(0, 5).map((item) => (
          <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:underline">
            {item}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: projectScroll } = useScroll({
    target: projectsRef,
    offset: ['start start', 'end end'],
  });

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heroNameY = useTransform(scrollYProgress, [0, 0.18], [0, -120]);
  const heroBandX = useTransform(scrollYProgress, [0, 0.22], ['0%', '-18%']);
  const projectX = useTransform(projectScroll, [0, 1], ['0%', '-48%']);

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#151515] selection:bg-black selection:text-white">
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-[#151515]"
      />

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
        className="fixed inset-0 z-[90] grid place-items-center bg-[#151515] text-[#f4f1ea]"
      >
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, ease: smoothEase }}
          className="text-center"
        >
          <p className="editorial-serif text-6xl italic md:text-8xl">Godswill</p>
          <p className="mt-3 text-xs font-black uppercase tracking-[0.5em]">Portfolio Vol. 1</p>
        </motion.div>
      </motion.div>

      <TopChrome />

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden bg-[#f4f1ea] px-5 pt-24 md:px-10">
          <FloatingCode />

          <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1520px] flex-col">
            <div className="grid grid-cols-2 text-[11px] font-semibold uppercase leading-tight text-black/55 md:grid-cols-4">
              <p>Software Engineer<br />UI/UX Designer</p>
              <p className="hidden md:block">First Class Graduate<br />Mountain Top University</p>
              <p className="text-right md:text-left">AI Specialist<br />Full-stack Systems</p>
              <p className="hidden text-right md:block">Folio<br />2026</p>
            </div>

            <motion.div style={{ y: heroNameY }} className="relative z-10 mt-14 md:mt-20">
              <h1 className="max-w-[1400px] text-[17vw] font-medium leading-[0.82] tracking-[-0.06em] md:text-[13.2vw]">
                <span className="editorial-serif italic tracking-[-0.08em]">Godswill</span>
                <br />
                Nwafor
              </h1>
            </motion.div>

            <motion.div
              style={{ x: heroBandX }}
              initial={{ clipPath: 'inset(0 100% 0 0)', y: 34 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', y: 0 }}
              transition={{ duration: 1.05, ease: smoothEase, delay: 1.05 }}
              className="relative z-20 -mx-5 mt-20 flex w-[130vw] items-center bg-[#151515] py-7 text-[#f4f1ea] md:-mx-10 md:mt-16"
            >
              {navItems.concat(navItems).map((item, index) => (
                <motion.button
                  key={`${item}-${index}`}
                  onClick={() => scrollTo(item.toLowerCase())}
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.65,
                    ease: smoothEase,
                    delay: 1.28 + index * 0.055,
                    staggerChildren: 0.025,
                  }}
                  className="mx-8 flex min-w-fit items-center gap-3 text-left text-xs font-semibold uppercase tracking-normal md:mx-12"
                >
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
                      show: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    className="text-white/45"
                  >
                    {String((index % navItems.length) + 1).padStart(2, '0')}
                  </motion.span>
                  <span aria-label={item} className="flex overflow-hidden">
                    {item.split('').map((letter, letterIndex) => (
                      <motion.span
                        key={`${item}-${index}-${letter}-${letterIndex}`}
                        aria-hidden="true"
                        variants={{
                          hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
                          show: { opacity: 1, y: 0, filter: 'blur(0px)' },
                        }}
                        transition={{ duration: 0.5, ease: smoothEase }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            <div className="relative z-10 grid flex-1 items-end gap-8 py-6 md:grid-cols-[1fr_1.2fr_1fr]">
              <p className="max-w-xs text-sm font-semibold leading-tight">
                I design clean interfaces and build intelligent software systems for real users, real workflows, and real outcomes.
              </p>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="mx-auto w-full max-w-[360px]"
              >
                <LineCoder />
              </motion.div>
              <p className="max-w-xs justify-self-end text-sm font-semibold leading-tight md:text-right">
                Based in Lagos. Available for frontend, AI product, UI/UX, and full-stack collaborations worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#f4f1ea] px-5 py-10 md:px-10">
          <div className="mx-auto grid max-w-[1520px] grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <motion.div
                key={label}
                whileHover={{ y: -8 }}
                className="border-l border-black/15 py-6 pl-5"
              >
                <p className="text-5xl font-medium leading-none md:text-7xl">{value}</p>
                <p className="mt-3 text-xs font-semibold uppercase text-black/45">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <EditorialSection id="about" eyebrow="01-06 / About" title="About Me">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
                Hello, I am Godswill, a software engineer who builds clean interfaces, useful AI workflows,
                and complete digital systems.
              </p>
              <div className="mt-10 grid gap-6 text-base leading-relaxed text-black/65 md:grid-cols-2">
                <p>
                  From polished frontend interfaces to backend architecture, I enjoy building things that live on the
                  internet and feel easy to use.
                </p>
                <p>
                  My background also covers IT service management, networking, hardware diagnostics, and enterprise IT
                  operations, so I approach software with a practical systems mindset.
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ rotate: -1.5, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative min-h-[520px] overflow-hidden border border-black/20 bg-white"
            >
              <img src={myPhoto} alt="Godswill Nwafor" className="h-full w-full object-cover grayscale" />
              <div className="absolute inset-x-0 bottom-0 bg-[#151515] px-5 py-4 text-xs font-semibold uppercase text-[#f4f1ea]">
                Software Engineer / UI Designer / AI Specialist
              </div>
            </motion.div>
          </div>
        </EditorialSection>

        <EditorialSection id="skills" eyebrow="02-06 / Capabilities" title="Technical Arsenal">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex min-h-[520px] items-end">
              <LineCoder />
            </div>
            <div className="space-y-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: 70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: smoothEase }}
                  className="grid gap-5 border-t border-black/15 pt-7 md:grid-cols-[120px_1fr]"
                >
                  <div className="flex items-center gap-3 text-black/45">
                    <span>{skill.marker}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-black/15">
                      {skill.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">{skill.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-black/60">{skill.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </EditorialSection>

        <EditorialSection id="experience" eyebrow="03-06 / Work" title="Where I Have Worked" dark>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <motion.div
              whileInView={{ x: [80, 0], opacity: [0, 1] }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, ease: smoothEase }}
              className="border-t border-white/20 pt-8"
            >
              <p className="mb-8 flex items-center gap-3 text-white/45">
                <Briefcase size={18} />
                IT Placement
              </p>
              <h3 className="text-5xl font-medium leading-none tracking-[-0.05em] md:text-7xl">IT Intern</h3>
              <p className="mt-4 text-xl text-white/70">Lagos State Internal Revenue Service (LIRS)</p>
              <ul className="mt-10 space-y-5 text-base leading-relaxed text-white/65">
                <li>Gained professional experience in networking, computer hardware, and hardware diagnostics.</li>
                <li>Developed skills in software documentation and enterprise IT operations.</li>
                <li>Used AI practically to solve real problems and optimize IT workflows.</li>
              </ul>
            </motion.div>
            <div className="relative flex min-h-[520px] items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 1.8, 0], y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full max-w-[520px] border border-white/15 bg-[#f4f1ea] p-8 text-[#151515]"
              >
                <p className="text-xs font-semibold uppercase text-black/45">Enterprise workflow</p>
                <div className="mt-16 space-y-3 font-mono text-2xl font-black md:text-4xl">
                  <p>network.check()</p>
                  <p>docs.update()</p>
                  <p>ai.optimize()</p>
                </div>
              </motion.div>
            </div>
          </div>
        </EditorialSection>

        <EditorialSection id="education" eyebrow="04-06 / Education" title="Academic Ground">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="flex items-center gap-3 text-black/45">
                <GraduationCap size={20} />
                First Class Honors
              </p>
              <h3 className="mt-8 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
                B.Sc. Software Engineering at Mountain Top University.
              </h3>
              <div className="mt-12 grid gap-6 text-base leading-relaxed text-black/65 md:grid-cols-3">
                <p>Comprehensive background in software lifecycles, algorithm design, and scalable architectures.</p>
                <p>AI and full-stack research projects focused on real-world problem-solving methods.</p>
                <p>Strong technical foundation in UI/UX architecture, networking, and computing mathematics.</p>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex min-h-[420px] items-center justify-center bg-[#151515] p-8"
            >
              <LineCoder dark />
            </motion.div>
          </div>
        </EditorialSection>

        <section
          id="projects"
          ref={projectsRef}
          className="relative h-[280vh] overflow-clip border-t border-black/10 bg-[#f4f1ea] text-[#151515]"
        >
          <div className="sticky top-0 flex h-screen flex-col overflow-hidden px-5 py-20 md:px-10">
            <div className="mx-auto flex w-full max-w-[1520px] items-start justify-between gap-8">
              <div>
                <p className="text-xs uppercase text-black/45">05-06 / Selected work</p>
                <h2 className="mt-4 text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
                  Featured<br />Projects
                </h2>
              </div>
              <p className="hidden max-w-xs text-sm font-semibold leading-tight text-black/55 md:block">
                Scroll to move through the project reel. Click any image to inspect it fullscreen.
              </p>
            </div>

            <motion.div style={{ x: projectX }} className="mt-12 flex w-max gap-6 md:mt-16">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -12 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group grid h-[58vh] w-[82vw] max-w-[820px] grid-rows-[1fr_auto] overflow-hidden border border-black/15 bg-white md:w-[52vw]"
                >
                  <button
                    onClick={() => setSelectedImage(project.image)}
                    className="relative overflow-hidden bg-black text-left"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <span className="absolute left-5 top-5 bg-[#f4f1ea] px-3 py-2 text-xs font-semibold text-[#151515]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </button>
                  <div className="grid gap-5 p-5 md:grid-cols-[1fr_1.2fr] md:p-7">
                    <div>
                      <h3 className="text-3xl font-medium leading-none tracking-[-0.04em]">{project.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="border border-black/15 px-2 py-1 text-[11px] font-semibold uppercase text-black/55">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-black/60">{project.summary}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <EditorialSection id="leadership" eyebrow="06-06 / Community" title="Leadership & Proof">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="border-t border-black/15 pt-7">
                <h3 className="text-4xl font-medium tracking-[-0.04em]">CSRC Role</h3>
                <p className="mt-3 text-black/55">@ NACOS, Mountain Top University</p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-black/65">
                  Served as CSRC of the Nigerian Association of Computing Students, leading initiatives at Mountain Top
                  University.
                </p>
              </div>
              <div className="border-t border-black/15 pt-7">
                <h3 className="text-4xl font-medium tracking-[-0.04em]">Member</h3>
                <p className="mt-3 text-black/55">@ ATC Africa</p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-black/65">
                  Participated in meaningful projects that contribute academically and provide real-world solutions.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <motion.a
                  key={cert.file}
                  href={`/certifications/${cert.file}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between border-t border-black/15 py-5 text-[#151515]"
                >
                  <span className="flex items-center gap-4">
                    <FileText size={20} />
                    <span className="font-medium">{cert.title}</span>
                  </span>
                  <ExternalLink size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </EditorialSection>

        <section id="contact" className="relative min-h-screen overflow-hidden bg-[#1c1c1a] px-5 py-20 text-[#f4f1ea] md:px-10">
          <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1520px] content-between">
            <div className="grid grid-cols-2 text-[11px] font-semibold uppercase leading-tight text-white/45 md:grid-cols-4">
              <p>Do not be shy.</p>
              <p className="hidden md:block">Email<br />gnwafor580@gmail.com</p>
              <p>Phone<br />09064071165</p>
              <p className="hidden text-right md:block">06-06<br />Get in touch</p>
            </div>

            <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-12 w-full max-w-[300px]"
              >
                <LineCoder dark />
              </motion.div>
              <p className="text-sm text-white/45">What is next?</p>
              <h2 className="mt-4 text-7xl font-medium leading-[0.82] tracking-[-0.06em] md:text-9xl">
                <span className="editorial-serif italic">Say</span> Hello
              </h2>
              <p className="mt-10 max-w-xl text-base leading-relaxed text-white/65">
                I am currently looking for new opportunities. Whether you have a project, question, or idea, my inbox is
                open.
              </p>
              <a
                href="mailto:gnwafor580@gmail.com"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#f4f1ea] px-7 py-4 font-semibold text-[#151515] transition hover:scale-105"
              >
                Send an email
                <ArrowUpRight size={18} />
              </a>
            </div>

            <footer className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row">
              <div className="flex gap-5">
                <a href="#" aria-label="Github Profile" className="hover:text-white"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/godswill-nwafor-10a863394/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Linkedin size={20} /></a>
                <a href="mailto:gnwafor580@gmail.com" aria-label="Email" className="hover:text-white"><Mail size={20} /></a>
                <a href="tel:09064071165" aria-label="Phone" className="hover:text-white"><Phone size={20} /></a>
              </div>
              <p>Built with React, Tailwind & Framer Motion. Copyright 2026 Godswill Nwafor.</p>
            </footer>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/92 p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              title="Close image modal"
              className="absolute right-6 top-6 z-50 rounded-full bg-white p-2 text-black transition hover:scale-105"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-full max-w-7xl cursor-default items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Project fullscreen"
                className="max-h-[90vh] max-w-full border border-white/15 object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
