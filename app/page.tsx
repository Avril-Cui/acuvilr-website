"use client";

import Image from "next/image";
import { useState, useEffect, type CSSProperties, type ReactNode } from "react";

const NAV = [
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Project", href: "#projects" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "repo", label: "Repo", href: "https://github.com/Avril-Cui", external: true },
];

// Positions are percent of the hero; sizes are in scene units (--u). Periods are deliberately
// unrelated per ship and negative delays start each one mid-motion, so they never move in sync.
const SHIPS = [
  { id: "about", href: "#about", src: "/home/about.png", w: 720, h: 429, alt: "About", x: "4%", y: "7%", size: 15.5, rot: 3, bob: 6.8, drift: 11.3, tilt: 8.9, delay: -2.3 },
  { id: "projects", href: "#projects", src: "/home/project.png", w: 720, h: 479, alt: "Projects", x: "60%", y: "6%", size: 12.5, rot: 12, bob: 7.9, drift: 9.7, tilt: 12.1, delay: -5.1 },
  { id: "blog", href: "#blog", src: "/home/blog.png", w: 720, h: 527, alt: "Blog", x: "79%", y: "20%", size: 14.5, rot: -3, bob: 7.2, drift: 13.4, tilt: 10.3, delay: -0.7 },
  { id: "repo", href: "https://github.com/Avril-Cui", src: "/home/repo.png", w: 720, h: 449, alt: "Repository", x: "57%", y: "29%", size: 14, rot: -6, bob: 8.6, drift: 10.6, tilt: 9.4, delay: -3.8, external: true },
];

type Project = {
  title: string;
  href?: string;
  image?: string;
  preview?: string;
  current?: boolean;
  description: string;
  tags: [string, string][];
};

const PROJECTS: Project[] = [
  {
    title: "Context Puck",
    href: "/projects/context-puck",
    preview: "/context-puck/animation.html?loop",
    current: true,
    description:
      "A tangible interface for steering ideas with your hands. Each idea lives on a puck ringed with knobs: pull a knob out to go deeper into a concept, push it in to leave it out, flip it to rule it out, and turn one puck toward another to blend two ideas.",
    tags: [["current work", "#3CBCC3"], ["tangible UI", "#D05A27"], ["HCI", "#A33C21"], ["AI", "#E6B479"]],
  },
  {
    title: "Aspect",
    href: "/projects/aspect",
    image: "/aspect.jpg",
    description:
      "A website that gamifies the learning of finance and trading by creating a market with diverse events. Targeting young users interested in trading and finance, Aspect provides exciting gaming mechanics and a cool user interface.",
    tags: [["personal project", "#3CBCC3"], ["full-stack", "#D05A27"], ["React", "#A33C21"], ["Python", "#E6B479"]],
  },
  {
    title: "Neo",
    href: "https://www.youtube.com/watch?v=9NCZIb1qXjs&t=2s",
    image: "/Neo.png",
    description:
      "Neo is a dynamic calendar app that adjusts your daily plans as your day unfolds. Unlike rigid planners, Neo is a flexible personal assistant that learns and adapts to help you actually boost productivity.",
    tags: [["personal project", "#3CBCC3"], ["AI", "#D05A27"], ["multi-agent", "#A33C21"], ["voice assistant", "#E6B479"]],
  },
  {
    title: "Lift",
    href: "/projects/lift",
    image: "/lift.png",
    description:
      "Lift is an application that provides gamification and community to users who workout alone during weightlifting sessions. It contains session analytical data, visualization, daily challenges, and leaderboards.",
    tags: [["personal project", "#3CBCC3"], ["full-stack", "#D05A27"], ["hardware", "#A33C21"]],
  },
  {
    title: "TripleTile",
    href: "https://tripletile.hackmit.org/",
    image: "/tripletile.png",
    description: "An algorithmic puzzle challenge I made for CoolHackGames, a series of games for HackMIT 2025 admission.",
    tags: [["Next.js", "#D05A27"], ["Puzzle", "#A33C21"], ["Algorithm", "#E6B479"]],
  },
  {
    title: "AppReader",
    image: "/appreader.png",
    description:
      "A website for the team to review and evaluate thousands of hackers' applications, and auto-generate admission decisions based on team opinions.",
    tags: [["full-stack", "#D05A27"], ["Python", "#E6B479"], ["SQL", "#5C5C68"], ["React", "#A33C21"], ["Docker", "#3CBCC3"], ["CI/CD", "#D05A27"]],
  },
  {
    title: "Plume",
    href: "https://plume.hackmit.org/",
    image: "/plume.png",
    description: "An all-in-one platform for managing HackMIT's hackathon events.",
    tags: [["full-stack", "#D05A27"], ["Python", "#E6B479"], ["SQL", "#5C5C68"], ["React", "#A33C21"]],
  },
];

const cardStyle: CSSProperties = { backgroundColor: "rgba(200, 200, 200, 0.3)", borderRadius: "15px" };
const linkClass = "text-yellow-200 hover:text-yellow-100 hover:underline";

function NavLinks({ active, className = "" }: { active: string; className?: string }) {
  return (
    <nav className={`flex items-center ${className}`}>
      {NAV.map((item, i) => (
        <span key={item.id} className="contents">
          {i > 0 && <span className="text-yellow-200" aria-hidden>•</span>}
          <a
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${active === item.id ? "underline" : ""}`}
          >
            {item.label}
          </a>
        </span>
      ))}
    </nav>
  );
}

function AboutText() {
  return (
    <>
      <p>
        Hi, I&apos;m Fuqi (Avril) Cui, an MIT student studying 6-3 Computer Science. Also a so-called full-stack
        developer: working with Python, Next.js, Typescript, and SQL, etc. I&apos;m interested in software dev, agentic
        automation, and tech entrepreneurship.
      </p>
      <p>
        At MIT, I&apos;m part of{" "}
        <a href="https://hackmit.org/" target="_blank" rel="noopener noreferrer" className={linkClass}>HackMIT</a>{" "}
        DevOps,{" "}
        <a href="https://mec.mit.edu/" target="_blank" rel="noopener noreferrer" className={linkClass}>MEC</a>, and
        AI@MIT. I founded{" "}
        <a href="https://www.aspect-game.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>Aspect</a>,
        a gamified{" "}
        <a href="https://drive.google.com/file/d/1ZWNOZaTCxiL1DWmf01JTrUpBUlMakscg/view" target="_blank" rel="noopener noreferrer" className={linkClass}>
          stock market simulator
        </a>{" "}
        that has reached thousands of learners and collaborated with educational institutions worldwide. I&apos;m
        currently building &amp; shipping Neo, a multi-agent AI personal assistant that streamlines daily productivity
        through natural voice interaction.
      </p>
      <p>
        I have full-stack experience in the industry, including interning at the frontend team at Tencent for Business
        Pay products, and building computer vision algos for color quality assessment of encoder and decoder algorithms
        at Bilibili.
      </p>
      <p className="text-yellow-200 font-medium">Feel free to reach out to me via email: avrilcui at mit dot edu</p>
    </>
  );
}

function Card({ onClick, media, children }: { onClick?: () => void; media: ReactNode; children: ReactNode }) {
  return (
    <div
      className={`overflow-hidden hover:scale-105 transition-transform duration-300 backdrop-blur-sm flex flex-col lg:flex-row h-auto lg:h-80 ${onClick ? "cursor-pointer" : ""}`}
      style={cardStyle}
      onClick={onClick}
    >
      <div className="relative w-full lg:w-1/2 h-48 sm:h-64 lg:h-full shrink-0">{media}</div>
      <div className="w-full lg:w-1/2 p-5 sm:p-6 flex flex-col justify-center">{children}</div>
    </div>
  );
}

export default function Home() {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > window.innerHeight - 100);

      const current = ["about", "projects", "blog"].find((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect ? rect.top <= 100 && rect.bottom > 100 : false;
      });
      setActiveSection(current || "");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky navigation once past the front page (landscape screens) */}
      {showStickyNav && (
        <div className="hidden wide:block fixed top-4 left-0 right-0 z-50">
          <NavLinks active={activeSection} className="justify-center gap-8 text-lg py-4" />
        </div>
      )}

      {/* Compact navigation pinned to the top on phones / portrait screens */}
      <div className="wide:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <NavLinks
          active={activeSection}
          className="gap-3 sm:gap-4 text-sm px-4 py-2 rounded-lg bg-gray-400/30 backdrop-blur-sm"
        />
      </div>

      {/* Front Page */}
      <section className="hero relative h-svh min-h-[540px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/background.jpg)" }} />

        {/* Decorative art never captures clicks, so it can't cover the ships */}
        <Image
          src="/home/hi.png"
          alt="Hi, I'm Avril"
          width={720}
          height={357}
          priority
          sizes="(min-width: 768px) 40vw, 90vw"
          className="pointer-events-none absolute z-10 h-auto left-1/2 -translate-x-1/2 top-[12%] w-[min(86vw,60svh)] wide:translate-x-0 wide:left-[18.5%] wide:top-[16%] wide:w-[calc(var(--u)*33)]"
        />
        <Image
          src="/home/earth.png"
          alt=""
          width={421}
          height={412}
          sizes="120px"
          className="pointer-events-none absolute z-10 h-auto left-[7%] top-[42%] w-[min(14vw,80px)] wide:left-[6.6%] wide:top-[40%] wide:w-[calc(var(--u)*5.8)]"
        />
        <Image
          src="/home/me_friday1.png"
          alt="Avril with Friday the bulldog"
          width={452}
          height={501}
          priority
          sizes="(min-width: 768px) 30vw, 80vw"
          className="pointer-events-none absolute z-10 h-auto left-1/2 -translate-x-1/2 bottom-[7%] w-[min(78vw,40svh)] wide:translate-x-0 wide:left-[53.5%] wide:bottom-[9.5%] wide:w-[calc(var(--u)*22)]"
        />

        {/* Spaceship menu (landscape screens) */}
        {SHIPS.map((s) => (
          <div
            key={s.id}
            data-ship={s.id}
            className="ship hidden wide:block"
            style={{ "--x": s.x, "--y": s.y, "--size": s.size, "--rot": `${s.rot}deg`, "--bob": `${s.bob}s`, "--drift": `${s.drift}s`, "--tilt": `${s.tilt}s`, "--delay": `${s.delay}s` } as CSSProperties}
          >
            <div className="ship-bob">
              <div className="ship-drift">
                <div className="ship-tilt">
                  <a href={s.href} aria-label={s.alt} {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="20vw" className="w-full h-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom navigation (landscape screens) */}
        <div className="hidden wide:block absolute z-30 bottom-[3.5%] left-1/2 -translate-x-1/2">
          <NavLinks active={activeSection} className="gap-8 text-lg" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden bg-[#121a2a] min-h-svh wide:h-svh wide:min-h-0">
        {/* Landscape: the text sits on the cockpit monitor and scales with the artwork */}
        <div className="about-stage hidden wide:block">
          <Image src="/about2.png" alt="" fill sizes="150vw" className="object-cover" />
          <div className="about-screen text-white">
            <img src="/avril.jpg" alt="Avril Cui" className="w-[15cqw] aspect-[4/5] shrink-0 rounded-[0.8cqw] object-cover shadow-2xl" />
            <div className="space-y-[0.6em]">
              <AboutText />
            </div>
          </div>
        </div>

        {/* Portrait / phones: a monitor-styled card that grows with its content */}
        <div className="wide:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/about2.png)" }} />
        <div className="wide:hidden relative z-10 px-4 pt-20 pb-16 sm:pt-28">
          <div className="mx-auto max-w-2xl rounded-[28px] border-[10px] border-[#3b4648] bg-[#5b7a7c]/95 p-5 sm:p-7 shadow-2xl ring-2 ring-black/60">
            <img
              src="/avril.jpg"
              alt="Avril Cui"
              className="float-left mr-4 mb-2 w-28 sm:w-40 aspect-[4/5] rounded-lg object-cover shadow-xl"
            />
            <div className="text-white text-[15px] sm:text-base leading-relaxed space-y-3">
              <AboutText />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/project_page.png)" }} />
        <div className="relative z-10 px-4 sm:px-8 pt-6 pb-20">
          <div className="flex flex-col gap-8 max-w-5xl mx-auto mt-24">
            {PROJECTS.map((p) => (
              <Card
                key={p.title}
                onClick={p.href ? () => window.open(p.href, "_blank") : undefined}
                media={
                  p.preview ? (
                    <div className="absolute inset-0 bg-black">
                      <iframe
                        src={p.preview}
                        title={`${p.title} preview`}
                        loading="lazy"
                        tabIndex={-1}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                      />
                    </div>
                  ) : (
                    <img src={p.image} alt={`${p.title} Project`} className="absolute inset-0 w-full h-full object-cover" />
                  )
                }
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex flex-wrap items-center gap-3">
                  {p.title}
                  {p.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-yellow-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-200 animate-pulse" />
                      now building
                    </span>
                  )}
                </h3>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(([tag, color]) => (
                    <span key={tag} className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/blog_background.png)" }} />
        <div className="relative z-10 px-4 sm:px-8 pt-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 mt-16 text-center">Blog</h2>
            <div className="flex flex-col gap-8 max-w-5xl mx-auto mt-24">
              <Card
                onClick={() => window.open("/blog/hello-visitor", "_blank")}
                media={<img src="/friday.jpg" alt="Hello Visitor Blog Post" className="absolute inset-0 w-full h-full object-cover" />}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Hello visitor! Welcome to my personal website!</h3>
                <p className="text-white text-base leading-relaxed mb-6">
                  Hope you enjoy my website. Here is a picture of my bulldog Friday.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
