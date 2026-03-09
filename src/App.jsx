import { useEffect, useState } from "react";
import { FaFontAwesome } from "react-icons/fa6";
import { FcBusinessman, FcCalendar, FcGlobe, FcGraduationCap } from "react-icons/fc";
import MobileNav from "./components/MobileNav";
import Sidebar from "./components/Sidebar";
import { personalInfo, socialLinks } from "./data";
import graduationCapIcon from "./assets/images/graduation-cap.png";
import profileImage from "./assets/images/sanawar-profile.jpg";

const typingText = "Consistency Makes a Man Perfect in Their Skill Set. - Mr. Sanawar Ali";
const PHONE_ICON_URL = "https://seekicon.com/free-icon-download/phone_3.svg";
const EMAIL_ICON_URL = "https://images.vexels.com/media/users/3/140928/isolated/preview/8d338f5acd60bfbc9b5fb1b208c8814f-outlined-email-round-icon.png?width=800";
const ADDRESS_ICON_URL = "https://img.icons8.com/?size=100&id=13800&format=png&color=FFFFFF";
const PAGE_LOADER_MS = 700;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SKILLS = [
  { label: "Ai Based Ui Designing for Web & APP", value: 58 },
  { label: "Ai Web Development", value: 63 },
  { label: "Ai Mobile App Development", value: 68 },
  { label: "Branding", value: 73 },
];
const SERVICES = [
  {
    title: "AI UI/UX Design & Prototyping",
    description: "User-centered interfaces with wireframes and polished prototypes focused on clarity and conversion.",
    icon: "palette",
  },
  {
    title: "AI-Powered Web Development",
    description: "Fast, scalable web apps with modern frontend architecture and practical AI-powered workflows.",
    icon: "code",
  },
  {
    title: "AI Mobile App Development",
    description: "Cross-platform mobile products with clean UX, secure integrations, and reliable performance.",
    icon: "smartphone",
  },
  {
    title: "Python Desktop Applications",
    description: "Custom business desktop solutions for automation, operations, and productivity workflows.",
    icon: "terminal",
  },
  {
    title: "Digital Marketing",
    description: "Targeted growth through campaign planning, performance tracking, and practical channel strategy.",
    icon: "rocket_launch",
  },
  {
    title: "WordPress Customization",
    description: "Clean, responsive WordPress sites with focused customization, speed improvements, and upkeep.",
    icon: "dashboard_customize",
  },
];

function PersonalInfoIcon({ icon }) {
  if (icon === "full-name") return <FcBusinessman className="h-7 w-7" aria-hidden="true" />;
  if (icon === "date-of-birth") return <FcCalendar className="h-7 w-7" aria-hidden="true" />;
  if (icon === "phone") return <img src={PHONE_ICON_URL} alt="Phone icon" className="h-7 w-7 object-contain" loading="lazy" />;
  if (icon === "email") return <img src={EMAIL_ICON_URL} alt="Email icon" className="h-7 w-7 rounded-sm object-contain" loading="lazy" />;
  if (icon === "address") return <img src={ADDRESS_ICON_URL} alt="Address icon" className="h-7 w-7 object-contain" loading="lazy" />;
  if (icon === "professional-title") return <img src={graduationCapIcon} alt="Professional title icon" className="h-7 w-7 object-contain" loading="lazy" />;
  if (icon === "languages") return <FcGlobe className="h-7 w-7" aria-hidden="true" />;
  if (icon === "nationality") return <FaFontAwesome className="h-6 w-6 text-amber-300" aria-hidden="true" />;
  return <FcGraduationCap className="h-7 w-7" aria-hidden="true" />;
}

function SocialBrandIcon({ icon }) {
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0A66C2]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5V19h-3.5V8.5h3.5Zm.23-3.24a2.02 2.02 0 1 1-4.03 0 2.02 2.02 0 0 1 4.03 0ZM20.57 12.96V19h-3.49v-5.61c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.47-2.17 2.97V19H9.55V8.5h3.35v1.43h.05c.47-.88 1.61-1.8 3.31-1.8 3.53 0 4.18 2.32 4.18 5.33Z"
        />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#F5F7FA]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .1-.77.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.23-3.24-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.24a11.43 11.43 0 0 1 6.01 0c2.29-1.56 3.29-1.24 3.29-1.24.65 1.66.24 2.88.12 3.18.77.85 1.23 1.93 1.23 3.24 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z"
        />
      </svg>
    );
  }

  if (icon === "twitter") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1DA1F2]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-6.93L5.97 22H2.86l7.24-8.28L.8 2h6.42l4.43 6.27L18.9 2Zm-1.1 18.12h1.73L6.3 3.79H4.45L17.8 20.12Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FF0000]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 7.2a3.1 3.1 0 0 0-2.18-2.2C19.4 4.5 12 4.5 12 4.5s-7.4 0-9.32.5A3.1 3.1 0 0 0 .5 7.2 32.4 32.4 0 0 0 0 12a32.4 32.4 0 0 0 .5 4.8 3.1 3.1 0 0 0 2.18 2.2c1.92.5 9.32.5 9.32.5s7.4 0 9.32-.5a3.1 3.1 0 0 0 2.18-2.2A32.4 32.4 0 0 0 24 12a32.4 32.4 0 0 0-.5-4.8ZM9.6 15.5v-7L15.8 12l-6.2 3.5Z"
      />
    </svg>
  );
}

function useTypingEffect(text, typingSpeed = 52, deletingSpeed = 26, holdMs = 1350) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timer;

    const loop = () => {
      if (!isDeleting) {
        index += 1;
        setValue(text.slice(0, index));

        if (index === text.length) {
          timer = setTimeout(() => {
            isDeleting = true;
            loop();
          }, holdMs);
          return;
        }

        timer = setTimeout(loop, typingSpeed);
        return;
      }

      index -= 1;
      setValue(text.slice(0, Math.max(index, 0)));

      if (index <= 0) {
        isDeleting = false;
        timer = setTimeout(loop, typingSpeed);
        return;
      }

      timer = setTimeout(loop, deletingSpeed);
    };

    timer = setTimeout(loop, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, typingSpeed, deletingSpeed, holdMs]);

  return value;
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitMessage, setContactSubmitMessage] = useState("");
  const [animatedSkillValues, setAnimatedSkillValues] = useState(SKILLS.map(() => 0));
  const typedTagline = useTypingEffect(typingText);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), PAGE_LOADER_MS + 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeSection !== "about") return;

    const durationMs = 1400;
    const start = performance.now();
    let frameId;

    setAnimatedSkillValues(SKILLS.map(() => 0));

    const animate = (now) => {
      const elapsed = now - start;
      const linearProgress = Math.min(elapsed / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);

      setAnimatedSkillValues(SKILLS.map((skill) => skill.value * easedProgress));

      if (linearProgress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [activeSection]);

  const scrollToSection = (id) => {
    if (id === activeSection) return;

    setIsPageLoading(true);
    setTimeout(() => {
      setActiveSection(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsPageLoading(false);
    }, PAGE_LOADER_MS);
  };

  const handleContactClick = () => {
    if (activeSection !== "home") {
      setIsPageLoading(true);
      setTimeout(() => {
        setActiveSection("home");
        setTimeout(() => {
          const followSection = document.getElementById("follow-me");
          if (followSection) {
            followSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 80);
        setIsPageLoading(false);
      }, PAGE_LOADER_MS);
      return;
    }

    const followSection = document.getElementById("follow-me");
    if (followSection) {
      followSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "#";
    link.download = "Mr-Sanawar-Ali-Resume.pdf";
    link.click();
  };

  const handleContactInputChange = (event) => {
    const { name, value } = event.target;

    setContactForm((prev) => ({ ...prev, [name]: value }));
    setContactErrors((prev) => ({ ...prev, [name]: "" }));
    setContactSubmitMessage("");
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    const trimmedName = contactForm.name.trim();
    const trimmedEmail = contactForm.email.trim();
    const trimmedMessage = contactForm.message.trim();

    if (!trimmedName) nextErrors.name = "Please fill in all required fields.";
    if (!trimmedEmail) {
      nextErrors.email = "Please fill in all required fields.";
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!trimmedMessage) nextErrors.message = "Please fill in all required fields.";

    setContactErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setContactSubmitMessage("");
      return;
    }

    setContactSubmitMessage("Your message is ready to send.");
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background-dark font-display text-slate-100 selection:bg-primary/30">
      <div
        className={`fixed inset-0 z-[70] flex items-center justify-center bg-background-dark/95 transition-opacity duration-500 ${
          isPageLoading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isPageLoading}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="loader-ring" />
          <p className="text-sm font-medium tracking-wide text-primary">Loading...</p>
        </div>
      </div>

      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        collapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />
      <MobileNav activeSection={activeSection} onNavigate={scrollToSection} />

      <main className={`min-w-0 transition-[margin] duration-300 ${isSidebarCollapsed ? "lg:ml-20" : "lg:ml-72"}`}>
        {activeSection === "home" ? (
          <>
            <section id="home" className="relative overflow-hidden px-6 pb-8 pt-24 sm:px-8 lg:min-h-[54vh] lg:px-14 lg:pt-16">
              <div className="pointer-events-none absolute right-[-180px] top-[-220px] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[130px]" />

              <div className="relative z-10 grid items-center gap-8 xl:grid-cols-[260px_1fr]">
                <div className="flex justify-center xl:justify-start">
                  <div className="profile-glow">
                    <img
                      src={profileImage}
                      alt="Mr. Sanawar Ali profile"
                      className="h-56 w-56 rounded-full border-[3px] border-primary object-cover object-[center_22%] sm:h-64 sm:w-64"
                    />
                  </div>
                </div>

                <div>
                  <span className="mb-5 inline-flex rounded-lg bg-primary px-5 py-2 text-sm font-black text-background-dark sm:text-base">
                    Assalamu Alaikum
                  </span>
                  <h1 className="mb-5 whitespace-nowrap text-3xl font-black leading-tight sm:text-4xl xl:text-5xl">Mr. Sanawar Ali</h1>
                  <p className="tagline-text mb-8 min-h-16 text-base sm:text-xl">
                    {typedTagline}
                    <span className="typing-cursor" aria-hidden="true">|</span>
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleResumeDownload}
                      className="accent-btn inline-flex items-center gap-2 rounded-xl px-7 py-3 font-bold text-background-dark"
                    >
                      <span className="material-symbols-outlined">download</span>
                      Download Resume
                    </button>
                    <button
                      onClick={handleContactClick}
                      className="accent-btn inline-flex items-center gap-2 rounded-xl px-7 py-3 font-bold text-background-dark"
                    >
                      <span className="material-symbols-outlined">mail</span>
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section id="services" className="px-6 py-4 sm:px-8 lg:px-14 lg:py-6">
              <div className="section-enter rounded-2xl border border-primary/20 bg-surface-dark/75 p-4 backdrop-blur sm:p-6">
                <h2 className="mb-5 text-2xl font-bold">Personal Information</h2>
                <div className="grid gap-4 lg:grid-cols-2">
                  {personalInfo.map((item, index) => (
                    <article
                      key={item.label}
                      className="info-row stagger-enter rounded-xl border border-primary/20 bg-[#21363a]/80 p-4 sm:p-5"
                      style={{ animationDelay: `${0.22 + index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="icon-pop info-icon-wrap flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00b0b2] shadow-lg shadow-primary/20">
                          <PersonalInfoIcon icon={item.icon} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-200">{item.label}</p>
                          <p className="mt-1 break-words text-sm text-slate-300 sm:text-base">{item.value}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="follow-me" className="px-6 pb-12 pt-6 sm:px-8 lg:px-14 lg:pb-16">
              <div className="section-enter section-enter-delay rounded-2xl border border-primary/20 bg-surface-dark/75 p-6 backdrop-blur sm:p-8">
                <h2 className="mb-6 text-center text-4xl font-extrabold">Follow Me</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="social-card stagger-enter flex items-center justify-center gap-3 rounded-xl border border-primary/20 bg-[#183136] px-5 py-4 text-lg font-semibold text-slate-200"
                      style={{ animationDelay: `${0.34 + index * 0.08}s` }}
                    >
                      <SocialBrandIcon icon={social.icon} />
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null}

        {activeSection === "about" ? (
          <section id="about" className="px-6 py-6 sm:px-8 lg:px-12 lg:py-8">
            <div className="section-enter px-1 sm:px-2">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-100 sm:text-4xl">About Me</h2>
                <p className="mt-2 text-lg text-slate-400 sm:text-xl">Get to know me better</p>
              </div>

              <div className="mt-7 grid items-center gap-7 xl:grid-cols-[1.4fr_0.8fr]">
                <div>
                  <h3 className="text-2xl font-bold text-primary sm:text-3xl">Hello, I'm Mr. Sanawar Ali</h3>
                  <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">Consistency Makes a Man Perfect in Their Skill Set. - Mr. Sanawar Ali</p>
                  <p className="mt-6 text-[1.03rem] leading-9 text-slate-400 sm:text-lg">
                    I'm a passionate and results driven professional who believes in delivering quality work that truly
                    makes an impact. With a strong background in technology, design, and digital innovation, I
                    specialize in creating practical, high performing solutions tailored to each client's unique goals.
                    I take pride in clear communication, creative problem solving, and a commitment to exceeding
                    expectations on every project.
                  </p>
                </div>

                <div className="flex justify-center xl:justify-end">
                  <div className="profile-glow">
                    <img
                      src={profileImage}
                      alt="Mr. Sanawar Ali profile"
                      className="h-64 w-64 rounded-full border-[3px] border-primary object-cover object-[center_22%] sm:h-[300px] sm:w-[300px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <h4 className="text-xl font-bold text-slate-100 sm:text-2xl">Statistics</h4>
                <p className="mt-1.5 text-base text-slate-300 sm:text-lg">1 Year Experience</p>
                <p className="text-base text-slate-300 sm:text-lg">7 Completed Projects</p>
              </div>

              <div className="mt-7">
                <h4 className="text-center text-xl font-bold text-slate-100 sm:text-2xl">Skills & Expertise</h4>

                <div className="mx-auto mt-5 w-full space-y-4 lg:w-1/2">
                  {SKILLS.map((skill, index) => {
                    const animatedValue = Math.min(animatedSkillValues[index] ?? 0, skill.value);
                    const percentageLabel = `${Math.round(animatedValue)}%`;

                    return (
                    <div key={skill.label}>
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <p className="text-base font-semibold text-slate-100 sm:text-lg">{skill.label}</p>
                        <p className="text-sm font-bold text-[#009FA0] sm:text-base">{percentageLabel}</p>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-[#2a4043]">
                        <div
                          className="h-1.5 rounded-full bg-[#009FA0] transition-[width] duration-100"
                          style={{ width: `${animatedValue}%` }}
                        />
                      </div>
                    </div>
                  )})}
                </div>
              </div>

              <div className="mt-7">
                <h4 className="text-xl font-bold text-slate-100 sm:text-2xl">Personal Interests</h4>
                <p className="mt-2.5 text-base leading-8 text-slate-400 sm:text-lg">
                  When I'm not designing, I enjoy exploring new technologies, reading about design trends, and
                  spending time with my family. I believe in maintaining a healthy work-life balance and continuously
                  improving my skills.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {activeSection === "services" ? (
          <section className="px-6 py-8 sm:px-8 lg:px-14 lg:py-10">
            <div className="section-enter rounded-2xl border border-primary/20 bg-surface-dark/75 p-6 backdrop-blur sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <h2 className="text-3xl font-extrabold sm:text-4xl">My Services</h2>
                <p className="text-sm text-slate-300 sm:text-base">What I can do for you</p>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {SERVICES.map((service) => (
                  <article
                    key={service.title}
                    className="group rounded-2xl border border-primary/20 bg-[#2a4043]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00b8bb] hover:shadow-[0_16px_30px_-22px_rgba(0,159,160,0.65)]"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00aeb1] text-background-dark shadow-[0_8px_22px_-14px_rgba(0,159,160,0.95)] transition-transform duration-300 group-hover:scale-105">
                      <span className="material-symbols-outlined text-[2rem]">{service.icon}</span>
                    </div>
                    <h3 className="mt-4 text-center text-lg font-bold leading-7 text-slate-100">{service.title}</h3>
                    <p className="mt-3 text-center text-sm leading-6 text-slate-300">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="section-enter section-enter-delay mx-auto mt-6 max-w-5xl rounded-2xl border border-primary/20 bg-[#2a4043]/80 px-5 py-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00b8bb] hover:shadow-[0_16px_28px_-22px_rgba(0,159,160,0.8)] sm:px-8 sm:py-10">
              <h3 className="text-center text-2xl font-extrabold sm:text-3xl">Ready to work together?</h3>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-300 sm:text-base sm:leading-7">
                Let's discuss your project and create something amazing together.
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center justify-center rounded-xl bg-[#009FA0] px-7 py-2.5 text-base font-bold text-background-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#11b5b6]"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {activeSection === "portfolio" ? (
          <section className="px-6 py-8 sm:px-8 lg:px-14 lg:py-10">
            <div className="section-enter rounded-2xl border border-primary/20 bg-surface-dark/75 p-6 backdrop-blur sm:p-8">
              <h2 className="mb-6 text-4xl font-extrabold">Portfolio</h2>
              <p className="text-lg leading-8 text-slate-300 sm:text-xl">
                Featured projects and client work are showcased here, highlighting practical product design and robust
                development outcomes.
              </p>
            </div>
          </section>
        ) : null}

        {activeSection === "contact" ? (
          <section className="px-6 py-8 sm:px-8 lg:px-14 lg:py-10">
            <div className="section-enter rounded-2xl border border-primary/20 bg-surface-dark/75 p-6 backdrop-blur sm:p-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">Get In Touch</h2>
                <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </p>
              </div>

              <div className="mx-auto mt-8 grid max-w-6xl items-start gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="rounded-2xl border border-primary/20 bg-[#2a4043]/80 p-5 sm:p-6">
                    <h3 className="mb-4 text-center text-3xl font-bold sm:text-[2rem]">Follow Me</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {socialLinks.slice(0, 4).map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          className="flex items-center justify-center gap-3 rounded-xl border border-primary/20 bg-[#112a2f] px-4 py-3 text-base font-semibold text-slate-200 transition-colors hover:bg-[#17353a]"
                        >
                          <SocialBrandIcon icon={social.icon} />
                          {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-5 text-center text-3xl font-extrabold text-[#009FA0] sm:text-4xl xl:text-left">Send a Message</h3>
                  <form onSubmit={handleContactSubmit} noValidate className="rounded-2xl border border-primary/20 bg-[#2a4043]/80 p-6 sm:p-8">
                    <label className="text-base font-bold text-slate-100" htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={contactForm.name}
                      onChange={handleContactInputChange}
                      className="mt-2 h-11 w-full rounded-xl border border-primary/20 bg-[#112a2f] px-4 text-sm text-slate-100 outline-none transition-colors focus:border-[#009FA0]"
                    />
                    {contactErrors.name ? <p className="mt-1.5 text-sm font-medium text-rose-300">{contactErrors.name}</p> : null}

                    <label className="mt-5 block text-base font-bold text-slate-100" htmlFor="contact-email">Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleContactInputChange}
                      className="mt-2 h-11 w-full rounded-xl border border-primary/20 bg-[#112a2f] px-4 text-sm text-slate-100 outline-none transition-colors focus:border-[#009FA0]"
                    />
                    {contactErrors.email ? <p className="mt-1.5 text-sm font-medium text-rose-300">{contactErrors.email}</p> : null}

                    <label className="mt-5 block text-base font-bold text-slate-100" htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={contactForm.message}
                      onChange={handleContactInputChange}
                      className="mt-2 w-full rounded-xl border border-primary/20 bg-[#112a2f] px-4 py-3 text-sm text-slate-100 outline-none transition-colors focus:border-[#009FA0]"
                    />
                    {contactErrors.message ? <p className="mt-1.5 text-sm font-medium text-rose-300">{contactErrors.message}</p> : null}

                    <button
                      type="submit"
                      className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#17bfc5] px-7 py-2.5 text-lg font-bold text-background-dark transition-colors hover:bg-[#13a8ad]"
                    >
                      Send Message
                    </button>

                    {contactSubmitMessage ? <p className="mt-3 text-sm font-medium text-[#7af0f1]">{contactSubmitMessage}</p> : null}
                  </form>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <footer className="border-t border-primary/20 px-6 py-8 text-sm text-slate-400 sm:px-8 lg:px-14">
          Copyright 2026 Mr. SANAWAR ALI. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
