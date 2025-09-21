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
      {/* Sticky Navigation */}
      {showStickyNav && (
        <div className="fixed top-4 left-0 right-0 z-50 transition-all duration-300">
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

        {/* Earth floating below Hi text - bigger */}
        <div className="absolute top-86 left-20 w-24 h-24 md:w-28 md:h-28">
          <Image
            src="/earth.png"
            alt="Earth"
            width={112}
            height={112}
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Spacecraft Menu Items floating in sky - Moved right to make space for Hi text */}
        {/* About Spacecraft - Moved to align with Project */}
        <div className="absolute top-16 left-1/2 transform rotate-3 float-slow">
          <a href="#about">
            <Image
              src="/about.png"
              alt="About"
              width={180}
              height={120}
              className="w-auto h-auto hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Project Spacecraft - Spaced out more */}
        <div className="absolute top-10 right-80 transform rotate-12 float-slow-delayed">
          <a href="#projects">
            <Image
              src="/project.png"
              alt="Projects"
              width={160}
              height={110}
              className="w-auto h-auto hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Blog Spacecraft - Spaced out more */}
        <div className="absolute top-12 right-16 transform -rotate-3 float-slow-delayed-2">
          <a href="#blog">
            <Image
              src="/blog.png"
              alt="Blog"
              width={170}
              height={115}
              className="w-auto h-auto hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Repo Spacecraft - Moved down below others */}
        <div className="absolute top-44 left-2/3 transform -rotate-6 float-slow-delayed-3">
          <a href="https://github.com/Avril-Cui" target="_blank" rel="noopener noreferrer">
            <Image
              src="/repo.png"
              alt="Repository"
              width={175}
              height={118}
              className="w-auto h-auto hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Hi, I'm Avril Text - positioned in top left */}
        <div className="absolute top-8 left-20">
          <img src="/hi.png" alt="Hi, I'm Avril" className="w-[700px] h-auto" />
        </div>

        {/* Character with Dog - bigger and moved slightly right */}
        <div className="absolute bottom-16 right-30">
          <img
            src="/me_friday1.png"
            alt="Avril with Friday the bulldog"
            className="w-96 h-auto"
          />
        </div>

        {/* Navigation Menu - bottom center */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
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
        <div className="relative z-10 px-8 pt-6 pb-20">

          <div className="max-w-6xl mx-auto mt-26">
            {/* <h2 className="text-4xl md:text-6xl text-white mb-4 mt-16 text-center">
              About Me
            </h2> */}
            <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl md:pl-32">
              {/* Profile Image */}
              <div className="flex-shrink-0 mt-10">
                <img
                  src="/avril.jpg"
                  alt="Avril Cui"
                  className="w-64 h-80 rounded-lg object-cover shadow-2xl"
                />
              </div>

              {/* Text Content */}
              <div className="text-base md:text-lg text-white leading-normal space-y-3 text-left flex-1 max-w-xl">
                <p>
                  Hi, I'm Fuqi (Avril) Cui, an MIT student studying 6-3 Computer
                  Science. Also a so-called full-stack developer: working with
                  Python, Next.js, Typescript, and SQL, etc. I'm interested in
                  software dev, agentic automation, and tech entrepreneurship.
                </p>
                <p>
                  At MIT, I'm part of <a href="https://hackmit.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">HackMIT</a> DevOps, <a href="https://mec.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">MEC</a>, and AI@MIT. I founded
                  <a href="https://www.aspect-game.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline"> Aspect</a>, a gamified stock market simulator that has reached
                  thousands of learners and collaborated with educational
                  institutions worldwide. I'm currently building & shipping Neo,
                  a multi-agent AI personal assistant that streamlines daily
                  productivity through <a href="https://drive.google.com/file/d/1ZWNOZaTCxiL1DWmf01JTrUpBUlMakscg/view" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-yellow-100 hover:underline">natural voice interaction</a>.
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
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-row h-80"
                style={{ backgroundColor: 'rgba(13, 27, 61, 0.4)', borderRadius: '15px' }}
                onClick={() => window.open('/projects/aspect', '_blank')}
              >
                <div className="w-1/2">
                  <img
                    src="/aspect.jpg"
                    alt="Aspect Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 p-6 flex flex-col justify-center">
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
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-row h-80"
                style={{ backgroundColor: 'rgba(13, 27, 61, 0.4)', borderRadius: '15px' }}
                onClick={() => window.open('/projects/lift', '_blank')}
              >
                <div className="w-1/2">
                  <img
                    src="/lift.png"
                    alt="Lift Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 p-6 flex flex-col justify-center">
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
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-row h-80"
                style={{ backgroundColor: 'rgba(13, 27, 61, 0.4)', borderRadius: '15px' }}
                onClick={() => window.open('https://tripletile.hackmit.org/', '_blank')}
              >
                <div className="w-1/2">
                  <img
                    src="/tripletile.png"
                    alt="TripleTile Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 p-6 flex flex-col justify-center">
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
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-row h-80"
                style={{ backgroundColor: 'rgba(13, 27, 61, 0.4)', borderRadius: '15px' }}
              >
                <div className="w-1/2">
                  <img
                    src="/appreader.png"
                    alt="AppReader Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">AppReader</h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    A website for the team to review and evaluate thousands of hackers' applications, and auto-generate admission decisions based on team opinions.
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
                className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer backdrop-blur-sm flex flex-row h-80"
                style={{ backgroundColor: 'rgba(13, 27, 61, 0.4)', borderRadius: '15px' }}
                onClick={() => window.open('https://plume.hackmit.org/', '_blank')}
              >
                <div className="w-1/2">
                  <img
                    src="/plume.png"
                    alt="Plume Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Plume</h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    An all-in-one platform for managing HackMIT's hackathon events.
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
    </>
  );
}
