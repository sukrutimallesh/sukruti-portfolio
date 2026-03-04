/**
 * About section with animated stats counters and highlight cards.
 */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaServer, FaBrain, FaRocket } from "react-icons/fa";
import "./About.css";

const HIGHLIGHTS = [
  {
    icon: <FaServer />,
    title: "Full-Stack Engineering",
    description: "Building end-to-end web applications with React, Spring Boot, .NET, and Node.js across fintech and real estate",
  },
  {
    icon: <FaCode />,
    title: "Agentic Commerce",
    description: "Shipping AI-powered integrations with Microsoft Copilot, Perplexity, and Meta AI at PayPal",
  },
  {
    icon: <FaBrain />,
    title: "AI & ML Research",
    description: "Building RAG pipelines, NLP sentiment analysis, computer vision classifiers, and large vision model applications",
  },
  {
    icon: <FaRocket />,
    title: "High-Impact Delivery",
    description: "Processing $1B+ TPV/quarter with 99.99% availability, graduated Summa Cum Laude with a 4.0 GPA in 2.5 years",
  },
];

const STATS = [
  { value: "$1B+", label: "TPV per Quarter" },
  { value: "99.99%", label: "System Availability" },
  { value: "4.0", label: "GPA — Summa Cum Laude" },
  { value: "2.5yr", label: "Degree Completion" },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">Passionate About Building at Scale</h2>
          <p className="section-subtitle">
            I turn complex engineering challenges into elegant, scalable solutions
          </p>
        </div>

        <div className="about__stats">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about__stat"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="about__highlights">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              className="about__highlight glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="about__highlight-icon">{item.icon}</div>
              <h3 className="about__highlight-title">{item.title}</h3>
              <p className="about__highlight-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
