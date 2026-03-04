/**
 * Projects section with interactive hover cards and tech tags.
 */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

const PROJECT_ICONS = ["01", "02", "03", "04"];

const Projects = ({ projects }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">// Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            Showcasing my passion for engineering through personal and professional projects
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="projects__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="projects__card-top">
                <span className="projects__number">{PROJECT_ICONS[i]}</span>
                <div className="projects__card-links">
                  <a href="#" className="projects__icon-link" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="#" className="projects__icon-link" aria-label="External">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__desc">{project.description}</p>

              <ul className="projects__highlights">
                {project.highlights.map((h, j) => (
                  <li key={j} className="projects__highlight-item">{h}</li>
                ))}
              </ul>

              <div className="projects__tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="projects__tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
