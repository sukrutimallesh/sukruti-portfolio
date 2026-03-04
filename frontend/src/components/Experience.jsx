/**
 * Experience section with an interactive vertical timeline.
 */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

const Experience = ({ experiences }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">// Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">
            My professional journey building impactful software
          </p>
        </div>

        <div className="exp__timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              className="exp__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="exp__timeline-dot">
                <FaBriefcase />
              </div>

              <div className="exp__card glass-card">
                <div className="exp__card-header">
                  <div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <span className="exp__company">{exp.company}</span>
                  </div>
                  <div className="exp__meta">
                    <span className="exp__period">{exp.period}</span>
                    <span className="exp__location">{exp.location}</span>
                  </div>
                </div>

                <ul className="exp__highlights">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="exp__highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="exp__tech-stack">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="exp__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
