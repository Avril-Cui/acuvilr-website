import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background.jpg)'
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
        <a href="#repo">
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
        <img
          src="/hi.png"
          alt="Hi, I'm Avril"
          className="w-[700px] h-auto"
        />
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
            href="#repo"
            className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
          >
            Repo
          </a>
          <span className="text-yellow-200">•</span>
          <a
            href="#blog"
            className="text-yellow-200 hover:text-yellow-100 transition-colors duration-300 font-medium tracking-wide"
          >
            Blog
          </a>
        </nav>
      </div>
    </div>
  );
}