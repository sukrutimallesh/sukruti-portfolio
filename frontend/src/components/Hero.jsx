/**
 * Hero section with animated typewriter effect, floating particles,
 * and a gradient mesh background.
 */

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import "./Hero.css";

const TYPING_SEQUENCE = [
  "Software Engineer",
  2000,
  "Full-Stack Developer",
  2000,
  "AI & Agentic Commerce Builder",
  2000,
  "ML Researcher",
  2000,
];

const Hero = ({ profile }) => {
  return (
    <section className="hero" id="hero">
      {/* Animated gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid pattern overlay */}
      <div className="hero__grid-pattern" />

      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero__greeting">Hello, I'm</span>

          <h1 className="hero__name">
            {profile.name}
          </h1>

          <div className="hero__role-wrapper">
            <TypeAnimation
              sequence={TYPING_SEQUENCE}
              wrapper="h2"
              className="hero__role"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__location">
            <FaMapMarkerAlt />
            <span>{profile.location}</span>
          </div>

          <div className="hero__cta-group">
            <a href="#contact" className="hero__cta hero__cta--primary">
              Get in Touch
            </a>
            <a href="#experience" className="hero__cta hero__cta--secondary">
              View My Work
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hero__social-link"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar-inner">
              <span className="hero__avatar-initials">SM</span>
            </div>
          </div>

          {/* Floating tech badges */}
          <div className="hero__floating-badge hero__floating-badge--1">Java</div>
          <div className="hero__floating-badge hero__floating-badge--2">React</div>
          <div className="hero__floating-badge hero__floating-badge--3">LangChain</div>
          <div className="hero__floating-badge hero__floating-badge--4">Python</div>
          <div className="hero__floating-badge hero__floating-badge--5">Spring Boot</div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll Down</span>
        <HiArrowDown className="hero__scroll-arrow" />
      </motion.a>
    </section>
  );
};

export default Hero;
