"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const frontPageHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > frontPageHeight - 100) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
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
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
            >
              About
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#projects"
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
            >
              Project
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#blog"
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
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
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
            >
              About
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#projects"
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
            >
              Project
            </a>
            <span className="text-yellow-200">•</span>
            <a
              href="#blog"
              className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
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

          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 mt-16 text-center">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl md:pl-32">
              {/* Profile Image */}
              <div className="flex-shrink-0">
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
    </>
  );
}
