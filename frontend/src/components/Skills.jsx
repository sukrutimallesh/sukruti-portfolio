/**
 * Skills section with animated category cards and hover effects.
 */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaCubes,
  FaCloud,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import "./Skills.css";

const CATEGORY_ICONS = {
  Languages: <FaCode />,
  "Frameworks & Libraries": <FaCubes />,
  "Cloud & DevOps": <FaCloud />,
  "Data & Messaging": <FaDatabase />,
  "Practices & Tools": <FaTools />,
};

const Skills = ({ skills }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = Object.entries(skills);

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">// Skills</span>
          <h2 className="section-title">My Tech Arsenal</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills__grid">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              className="skills__category glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="skills__category-header">
                <div className="skills__category-icon">
                  {CATEGORY_ICONS[category] || <FaCode />}
                </div>
                <h3 className="skills__category-title">{category}</h3>
              </div>

              <div className="skills__items">
                {items.map((skill) => (
                  <span key={skill} className="skills__item">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
