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
import Button from "@mui/material/Button";
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
  const contactRef = useRef<HTMLDivElement>(null);
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
    <main className="flex h-screen overflow-hidden px-8 md:px-16 lg:px-24">
      {/* Left Sidebar - Fixed */}
      <div
        className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-between py-8 pb-0"
        style={{ backgroundColor: "rgb(8, 8, 9)" }}
      >
        <div className="flex flex-col items-center space-y-6 flex-1 justify-center px-8">
          <div className="mb-4">
            <Image
              src="/suit1.png"
              alt={name || "Profile"}
              width={150}
              height={150}
              className="rounded-full object-cover"
              priority
            />
          </div>

          {name && (
            <h1 className="text-4xl font-display text-center">
              <span className="opacity-75">{name}</span>
            </h1>
          )}

          {location && (
            <p className="text-base opacity-60 text-center -mt-2">{location}</p>
          )}

          {/* Phone Number - Click to Copy */}
          {contact.phone && (
            <button
              onClick={copyPhoneToClipboard}
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer -mt-2"
              title="Click to copy"
            >
              <PhoneIcon fontSize="small" />
              <span>{copied ? "Copied!" : contact.phone}</span>
            </button>
          )}

          {/* Social Icons */}
          <div className="flex space-x-3 items-center justify-center">
            {social && (
              <>
                {social.github && (
                  <CustomLink
                    href={social.github}
                    aria-label="github"
                    variant="icon"
                    target="_blank"
                  >
                    <GitHubIcon fontSize="large" />
                  </CustomLink>
                )}

                {social.linkedin && (
                  <CustomLink
                    href={social.linkedin}
                    aria-label="linkedin"
                    variant="icon"
                    target="_blank"
                  >
                    <LinkedInIcon fontSize="large" />
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
                <EmailIcon fontSize="large" />
              </CustomLink>
            )}
          </div>

          {/* Tabs */}
          <nav className="flex flex-col space-y-2 w-full mt-8 px-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="pl-8 py-2 text-lg capitalize rounded text-left text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              about me
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="pl-8 py-2 text-lg capitalize rounded text-left text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              experience
            </button>
            <button
              onClick={() => scrollToSection(educationRef)}
              className="pl-8 py-2 text-lg capitalize rounded text-left text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              education
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="pl-8 py-2 text-lg capitalize rounded text-left text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              contact
            </button>
          </nav>
        </div>

        {/* Resume Button */}
        <div className="w-full">
          {resume && <ResumeButton resumeUrl={resume} />}
        </div>
      </div>

      {/* Right Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-8 md:px-16 py-12">
        {/* About Me Section */}
        <section ref={aboutRef} className="mb-20">
          <h2 className="text-4xl font-display mb-6 text-left">About me</h2>
          <p className="text-lg leading-relaxed opacity-75 mb-8 normal-case">
            {description}
          </p>

          {/* Skills */}
          <h3 className="text-3xl font-display mb-4 text-left">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={uniqid()}
                className="flex flex-col items-center justify-center p-4 rounded-lg transition-colors hover:opacity-80"
                style={{ backgroundColor: "rgb(8, 8, 9)" }}
                title={skill}
              >
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <img
                    src={
                      skillIconUrls[skill] ||
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
                    }
                    alt={skill}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs text-white text-center">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="mb-20">
          <h2 className="text-4xl font-display mb-6 text-left">Experience</h2>
          <Experience />
        </section>

        {/* Education Section */}
        <section ref={educationRef} className="mb-20">
          <h2 className="text-4xl font-display mb-6 text-left">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-baseline flex-wrap mb-2">
                <h3 className="text-2xl font-display">{edu.school}</h3>
                <span className="text-lg opacity-75">{edu.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-lg opacity-75 mb-2">
                <LocationOnIcon fontSize="small" />
                <span>{edu.location}</span>
              </div>
              <p className="text-lg mt-2">
                {edu.degree} - GPA: {edu.gpa}
              </p>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section ref={contactRef}>
          <h2 className="text-4xl font-display mb-6 text-left">Contact</h2>
          <div className="max-w-2xl">
            <p className="text-2xl mb-6 normal-case opacity-90">
              Let's work together and create something amazing!
            </p>
            <p className="text-lg mb-8 normal-case opacity-75">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <Button
                variant="contained"
                color="primary"
                size="large"
                href={`mailto:${contact.email}`}
                className="normal-case text-lg"
              >
                Email: {contact.email}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
