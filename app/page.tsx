"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { about, skills, contact, education } from "@/portfolio";
import Experience from "@/components/Experience";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomLink from "@/components/ui/CustomLink";
import ResumeButton from "@/components/ui/ResumeButton";
import uniqid from "uniqid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

// Skill icon mapping using devicon CDN
const skillIconUrls: { [key: string]: string } = {
  // Languages
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C/C++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  QT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg",
  Kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  Swift:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  // Framework
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  Django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  ".NET":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  FastAPI:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  // Database
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  NoSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  // Cloud & Tools
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Apache Tomcat":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg",
  "Apache Kafka":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  // Mobile Development
  Android:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "React Native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  iOS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  // AI
  LLM: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  GPT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Llama:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  TensorFlow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  PyTorch:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  // Other
  "Design Patterns":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Scripting:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
};

export default function Home() {
  const { name, location, description, resume, social } = about;
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyPhoneToClipboard = () => {
    if (contact.phone) {
      navigator.clipboard.writeText(contact.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="flex flex-col md:flex-row h-screen overflow-hidden px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Left Sidebar - Fixed */}
      <div
        className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-between py-4 md:py-8 pb-0 md:h-screen"
        style={{ backgroundColor: "rgb(8, 8, 9)" }}
      >
        <div className="flex flex-col items-center space-y-3 md:space-y-6 flex-1 justify-center px-4 md:px-8">
          <div className="mb-2 md:mb-4">
            <Image
              src="/suit1.png"
              alt={name || "Profile"}
              width={300}
              height={300}
              className="rounded-full object-cover w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
              priority
            />
          </div>

          {name && (
            <h1 className="text-2xl md:text-4xl font-display text-center">
              <span className="opacity-75">{name}</span>
            </h1>
          )}

          {location && (
            <p className="text-sm md:text-base opacity-60 text-center -mt-2">
              {location}
            </p>
          )}

          {/* Phone Number - Click to Copy */}
          {contact.phone && (
            <button
              onClick={copyPhoneToClipboard}
              className="flex items-center gap-2 text-xs md:text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer -mt-2"
              title="Click to copy"
            >
              <PhoneIcon fontSize="small" />
              <span className="text-xs md:text-sm">
                {copied ? "Copied!" : contact.phone}
              </span>
            </button>
          )}

          {/* Social Icons */}
          <div className="flex space-x-2 md:space-x-3 items-center justify-center">
            {social && (
              <>
                {social.github && (
                  <CustomLink
                    href={social.github}
                    aria-label="github"
                    variant="icon"
                    target="_blank"
                  >
                    <GitHubIcon className="text-2xl md:text-3xl" />
                  </CustomLink>
                )}

                {social.linkedin && (
                  <CustomLink
                    href={social.linkedin}
                    aria-label="linkedin"
                    variant="icon"
                    target="_blank"
                  >
                    <LinkedInIcon className="text-2xl md:text-3xl" />
                  </CustomLink>
                )}
              </>
            )}

            {contact.email && (
              <CustomLink
                href={`mailto:${contact.email}`}
                aria-label="email"
                variant="icon"
              >
                <EmailIcon className="text-2xl md:text-3xl" />
              </CustomLink>
            )}
          </div>

          {/* Tabs */}
          <nav className="flex flex-col space-y-1 md:space-y-2 w-full mt-4 md:mt-8 px-4 md:px-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="pl-4 md:pl-8 py-1.5 md:py-2 text-base md:text-lg capitalize rounded text-left text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              about me
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="pl-4 md:pl-8 py-1.5 md:py-2 text-base md:text-lg capitalize rounded text-left text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              experience
            </button>
            <button
              onClick={() => scrollToSection(educationRef)}
              className="pl-4 md:pl-8 py-1.5 md:py-2 text-base md:text-lg capitalize rounded text-left text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              education
            </button>
          </nav>
        </div>

        {/* Resume Button */}
        <div className="w-full">
          {resume && <ResumeButton resumeUrl={resume} />}
        </div>
      </div>

      {/* Right Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* About Me Section */}
        <section ref={aboutRef} className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-display mb-4 md:mb-6 text-left">
            About me
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-75 mb-6 md:mb-8 normal-case">
            {description}
          </p>

          {/* Skills */}
          <h3 className="text-2xl md:text-3xl font-display mb-3 md:mb-4 text-left">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {skills.map((skill) => (
              <div
                key={uniqid()}
                className="flex flex-col items-center justify-center p-2 md:p-4 rounded-lg transition-colors hover:opacity-80"
                style={{ backgroundColor: "rgb(8, 8, 9)" }}
                title={skill}
              >
                <div className="w-8 h-8 md:w-12 md:h-12 mb-1 md:mb-2 flex items-center justify-center">
                  <Image
                    src={
                      skillIconUrls[skill] ||
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
                    }
                    alt={skill}
                    width={32}
                    height={32}
                    className="object-contain md:w-12 md:h-12"
                  />
                </div>
                <span className="text-[10px] md:text-xs text-white text-center">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-display mb-4 md:mb-6 text-left">
            Experience
          </h2>
          <Experience />
        </section>

        {/* Education Section */}
        <section ref={educationRef} className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-display mb-4 md:mb-6 text-left">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 md:mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline flex-wrap mb-2">
                <h3 className="text-xl md:text-2xl font-display">
                  {edu.school}
                </h3>
                <span className="text-base md:text-lg opacity-75">
                  {edu.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-base md:text-lg opacity-75 mb-2">
                <LocationOnIcon fontSize="small" />
                <span>{edu.location}</span>
              </div>
              <p className="text-base md:text-lg mt-2">
                {edu.degree} - GPA: {edu.gpa}
              </p>
            </div>
          ))}
        </section>

        {/* Let's Work Together Section - Spectacular */}
        <section className="mb-12 md:mb-20">
          <div
            className="max-w-4xl mx-auto text-center py-12 md:py-20 px-6 md:px-12 rounded-xl md:rounded-2xl relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgb(8, 8, 9) 0%, rgb(30, 30, 35) 50%, rgb(8, 8, 9) 100%)",
              boxShadow:
                "0 20px 60px rgba(255, 222, 89, 0.15), 0 0 40px rgba(255, 222, 89, 0.1)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffde59] to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffde59] to-transparent opacity-60"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6 md:mb-8 bg-gradient-to-r from-white via-[#ffde59] to-white bg-clip-text text-transparent animate-pulse">
                Let&apos;s Work Together
              </h2>
              <div className="w-16 md:w-24 h-1 bg-[#ffde59] mx-auto mb-6 md:mb-8 rounded-full"></div>
              <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 opacity-90 font-light leading-relaxed max-w-3xl mx-auto text-justify">
                I am always open to engaging in discussions about new projects,
                innovative concepts, and creative collaborations. With a strong
                commitment to excellence and a results-driven mindset, I am
                fully prepared to transform your ideas and vision into
                practical, high-quality solutions. I value clear communication,
                strategic planning, and efficient execution, ensuring that every
                project is approached with professionalism, precision, and a
                focus on delivering measurable outcomes. Whether you are at the
                concept stage or ready to launch, I am ready to partner with you
                to bring your vision to life successfully.
              </p>

              {/* Contact buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-12">
                <a
                  href={`mailto:${contact.email}`}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#ffde59] text-black font-semibold rounded-lg hover:bg-[#ffd700] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <EmailIcon fontSize="small" />
                  <span>Email Me</span>
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-[#ffde59] text-[#ffde59] font-semibold rounded-lg hover:bg-[#ffde59] hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <PhoneIcon fontSize="small" />
                  <span>Call Me</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
