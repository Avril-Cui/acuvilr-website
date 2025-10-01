"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const frontPageHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > frontPageHeight - 100) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }

      // Determine active section
      const sections = ['about', 'projects', 'blog'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {/* Sticky Navigation - hidden on mobile */}
      {showStickyNav && (
        <div className="hidden lg:block fixed top-4 left-0 right-0 z-50 transition-all duration-300">
          <nav className="flex justify-center space-x-8 text-lg py-4">
            <a
              href="#about"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'about' ? 'underline' : ''}`}
            >
              About
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#projects"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'projects' ? 'underline' : ''}`}
            >
              Project
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#blog"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'blog' ? 'underline' : ''}`}
            >
              Blog
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="https://github.com/Avril-Cui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
            >
              Repo
            </a>
          </nav>
        </div>
      )}

      {/* Front Page */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/background.jpg)",
          }}
        />

        {/* Earth floating below Hi text - responsive */}
        <div className="absolute top-80 lg:top-86 left-6 lg:left-20 w-16 h-16 lg:w-28 lg:h-28">
          <Image
            src="/earth.png"
            alt="Earth"
            width={112}
            height={112}
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Spacecraft Menu Items floating in sky - Hidden on mobile */}
        {/* About Spacecraft - Moved to align with Project */}
        <div className="hidden lg:block absolute left-10 transform rotate-3 float-slow">
          <a href="#about">
            <Image
              src="/about.png"
              alt="About"
              width={180}
              height={120}
              className="w-auto h-auto hover:scale-110 transition-transform duration-300 scale-75 lg:scale-75 xl:scale-90 2xl:scale-100"
            />
          </a>
        </div>

        {/* Project Spacecraft - Spaced out more */}
        <div className="hidden lg:block absolute top-4 right-90 transform rotate-12 float-slow-delayed">
          <a href="#projects">
            <Image
              src="/project.png"
              alt="Projects"
              width={160}
              height={110}
              className="w-auto h-auto hover:scale-110 transition-transform duration-300 scale-75 lg:scale-75 xl:scale-90 2xl:scale-100"
            />
          </a>
        </div>

        {/* Blog Spacecraft - Spaced out more */}
        <div className="hidden lg:block absolute top-35 left-280 transform -rotate-3 float-slow-delayed-2">
          <a href="#blog">
            <Image
              src="/blog.png"
              alt="Blog"
              width={170}
              height={115}
              className="w-auto h-auto hover:scale-110 transition-transform duration-300 scale-75 lg:scale-75 xl:scale-90 2xl:scale-100"
            />
          </a>
        </div>

        {/* Repo Spacecraft - Moved down below others */}
        <div className="hidden lg:block absolute top-64 left-200 transform -rotate-6 float-slow-delayed-3">
          <a href="https://github.com/Avril-Cui" target="_blank" rel="noopener noreferrer">
            <Image
              src="/repo.png"
              alt="Repository"
              width={175}
              height={118}
              className="w-auto h-auto hover:scale-110 transition-transform duration-300 scale-75 lg:scale-75 xl:scale-90 2xl:scale-100"
            />
          </a>
        </div>

        {/* Hi, I'm Avril Text - responsive positioning */}
        <div className="absolute top-20 lg:top-8 left-1/2 transform -translate-x-1/2 lg:transform-none lg:left-128 w-[480px] lg:w-[700px]">
          <img src="/hi.png" alt="Hi, I'm Avril" className="w-full h-auto" />
        </div>

        {/* Character with Dog - responsive positioning */}
        <div className="absolute bottom-20 lg:bottom-16 left-1/2 transform -translate-x-1/2 lg:transform-none lg:left-auto lg:right-30 w-[350px] lg:w-96">
          <img
            src="/me_friday1.png"
            alt="Avril with Friday the bulldog"
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Navigation - fixed at top (only on mobile) */}
        <div className="lg:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <nav className="flex space-x-4 text-sm px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(156, 163, 175, 0.3)', backdropFilter: 'blur(4px)' }}>
            <a
              href="#about"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'about' ? 'underline' : ''}`}
            >
              About
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#projects"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'projects' ? 'underline' : ''}`}
            >
              Project
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#blog"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'blog' ? 'underline' : ''}`}
            >
              Blog
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="https://github.com/Avril-Cui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
            >
              Repo
            </a>
          </nav>
        </div>

        {/* Navigation Menu - bottom center (hidden on mobile) */}
        <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <nav className="flex space-x-8 text-lg">
            <a
              href="#about"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'about' ? 'underline' : ''}`}
            >
              About
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#projects"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'projects' ? 'underline' : ''}`}
            >
              Project
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#blog"
              className={`text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide ${activeSection === 'blog' ? 'underline' : ''}`}
            >
              Blog
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="https://github.com/Avril-Cui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
            >
              Repo
            </a>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative min-h-screen">
        {/* About Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/about2.png)",
          }}
        />

        {/* About Content */}
        <div className="relative z-10 px-4 md:px-8 pt-6 pb-20">

          <div className="mt-48 md:mt-44 lg:mt-40 xl:[margin-top:clamp(5rem,20rem-12vw,7.5rem)] 2xl:mt-20">
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 lg:justify-center lg:max-w-6xl lg:mx-auto">
              {/* Profile Image - hidden on mobile */}
              <div className="hidden lg:block flex-shrink-0">
                <img
                  src="/avril.jpg"
                  alt="Avril Cui"
                  className="w-64 h-80 rounded-lg object-cover shadow-2xl"
                />
              </div>

              {/* Text Content */}
              <div className="text-sm md:text-base lg:text-lg text-white leading-tight lg:leading-normal space-y-2 lg:space-y-3 text-left flex-1 max-w-full lg:max-w-xl px-2 lg:px-0">
                {/* Desktop text */}
                <div className="hidden lg:block">
                  <p>
                    Hi, I&apos;m Fuqi (Avril) Cui, an MIT student studying 6-3 Computer
                    Science. Also a so-called full-stack developer: working with
                    Python, Next.js, Typescript, and SQL, etc. I&apos;m interested in
                    software dev, agentic automation, and tech entrepreneurship.
                  </p>
                  <p>
                    At MIT, I&apos;m part of <a href="https://hackmit.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">HackMIT</a> DevOps, <a href="https://mec.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">MEC</a>, and AI@MIT. I founded
                    <a href="https://www.aspect-game.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline"> Aspect</a>, a gamified <a href="https://drive.google.com/file/d/1ZWNOZaTCxiL1DWmf01JTrUpBUlMakscg/view" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">stock market simulator</a> that has reached
                    thousands of learners and collaborated with educational
                    institutions worldwide. I&apos;m currently building & shipping Neo,
                    a multi-agent AI personal assistant that streamlines daily
                    productivity through natural voice interaction.
                  </p>
                  <p>
                    I have full-stack experience in the industry, including
                    interning at the frontend team at Tencent for Business Pay
                    products, and building computer vision algos for color quality
                    assessment of encoder and decoder algorithms at Bilibili.
                  </p>
                  <p className="text-yellow-200 font-medium">
                    Feel free to reach out to me via email: avrilcui at mit dot
                    edu
                  </p>
                </div>

                {/* Mobile text */}
                <div className="lg:hidden">
                  <p>
                    Hi, I&apos;m Fuqi (Avril) Cui, an MIT student studying 6-3 Computer Science.  I&apos;m interested in software dev, agentic automation, and tech entrepreneurship. At MIT, I&apos;m part of <a href="https://hackmit.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">HackMIT</a> DevOps, <a href="https://mec.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">MEC</a>, and AI@MIT. I founded <a href="https://www.aspect-game.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline"> Aspect</a>, a gamified <a href="https://drive.google.com/file/d/1ZWNOZaTCxiL1DWmf01JTrUpBUlMakscg/view" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">stock market simulator</a> that has reached thousands of learners and collaborated with educational institutions worldwide. I&apos;m currently building & shipping Neo, a multi-agent AI personal assistant that streamlines daily productivity through natural voice interaction. I have full-stack experience in the industry, including interning at the frontend team at Tencent for Business Pay products, and building computer vision algos for color quality assessment of encoder and decoder algorithms at Bilibili.
                  </p>
                  <p className="text-yellow-200 font-medium">
                    Feel free to reach out to me via email: avrilcui at mit dot edu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="relative min-h-screen">
        {/* Projects Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/project_page.png)",
          }}
        />
        {/* Projects Content */}
        <div className="relative z-10 px-8 pt-6 pb-20">
          <div className="max-w-6xl mx-auto">

            {/* Project Grid */}
            <div className="flex flex-col gap-8 max-w-5xl mx-auto mt-24">
              {/* Aspect Project */}
              <div
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-col lg:flex-row h-auto lg:h-80"
                style={{ backgroundColor: 'rgba(200, 200, 200, 0.3)', borderRadius: '15px' }}
                onClick={() => window.open('/projects/aspect', '_blank')}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src="/aspect.jpg"
                    alt="Aspect Project"
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Aspect</h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    A website that gamifies the learning of finance and trading by creating a market with diverse events. Targeting young users interested in trading and finance, Aspect provides exciting gaming mechanics and a cool user interface.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#3CBCC3' }}>personal project</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#D05A27' }}>full-stack</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#A33C21' }}>React</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#E6B479' }}>Python</span>
                  </div>
                </div>
              </div>

              {/* Lift Project */}
              <div
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-col lg:flex-row h-auto lg:h-80"
                style={{ backgroundColor: 'rgba(200, 200, 200, 0.3)', borderRadius: '15px' }}
                onClick={() => window.open('/projects/lift', '_blank')}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src="/lift.png"
                    alt="Lift Project"
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Lift</h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    Lift is an application that provides gamification and community to users who workout alone during weightlifting sessions. It contains session analytical data, visualization, daily challenges, and leaderboards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#3CBCC3' }}>personal project</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#D05A27' }}>full-stack</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#A33C21' }}>hardware</span>
                  </div>
                </div>
              </div>

              {/* TripleTile Project */}
              <div
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-col lg:flex-row h-auto lg:h-80"
                style={{ backgroundColor: 'rgba(200, 200, 200, 0.3)', borderRadius: '15px' }}
                onClick={() => window.open('https://tripletile.hackmit.org/', '_blank')}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src="/tripletile.png"
                    alt="TripleTile Project"
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">TripleTile</h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    An algorithmic puzzle challenge I made for CoolHackGames, a series of games for HackMIT 2025 admission.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#D05A27' }}>Next.js</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#A33C21' }}>Puzzle</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#E6B479' }}>Algorithm</span>
                  </div>
                </div>
              </div>

              {/* AppReader Project */}
              <div
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-col lg:flex-row h-auto lg:h-80"
                style={{ backgroundColor: 'rgba(200, 200, 200, 0.3)', borderRadius: '15px' }}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src="/appreader.png"
                    alt="AppReader Project"
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">AppReader</h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    A website for the team to review and evaluate thousands of hackers&apos; applications, and auto-generate admission decisions based on team opinions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#D05A27' }}>full-stack</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#E6B479' }}>Python</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#5C5C68' }}>SQL</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#A33C21' }}>React</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#3CBCC3' }}>Docker</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#D05A27' }}>CI/CD</span>
                  </div>
                </div>
              </div>

              {/* Plume Project */}
              <div
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-col lg:flex-row h-auto lg:h-80"
                style={{ backgroundColor: 'rgba(200, 200, 200, 0.3)', borderRadius: '15px' }}
                onClick={() => window.open('https://plume.hackmit.org/', '_blank')}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src="/plume.png"
                    alt="Plume Project"
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Plume</h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    An all-in-one platform for managing HackMIT&apos;s hackathon events.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#D05A27' }}>full-stack</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#E6B479' }}>Python</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#5C5C68' }}>SQL</span>
                    <span className="px-3 py-1 text-white text-xs rounded-full" style={{ backgroundColor: '#A33C21' }}>React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="relative min-h-screen">
        {/* Blog Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/blog_background.png)",
          }}
        />

        {/* Blog Content */}
        <div className="relative z-10 px-8 pt-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 mt-16 text-center">
              Blog
            </h2>

            {/* Blog Grid */}
            <div className="flex flex-col gap-8 max-w-5xl mx-auto mt-24">
              {/* Hello Visitor Blog Post */}
              <div
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-col lg:flex-row h-auto lg:h-80"
                style={{ backgroundColor: 'rgba(200, 200, 200, 0.3)', borderRadius: '15px' }}
                onClick={() => window.open('/blog/hello-visitor', '_blank')}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src="/friday.jpg"
                    alt="Hello Visitor Blog Post"
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Hello visitor! Welcome to my personal website!</h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    Hope you enjoy my website. Here is a picture of my bulldog Friday.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
