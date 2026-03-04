/**
 * Education section with institution cards and coursework tags.
 */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import "./Education.css";

const Education = ({ education, certifications }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="education" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">// Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Strong theoretical foundation paired with practical expertise
          </p>
        </div>

        <div className="edu__grid">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="edu__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="edu__card-icon">
                <FaGraduationCap />
              </div>

              <h3 className="edu__degree">{edu.degree}</h3>
              <p className="edu__institution">{edu.institution}</p>

              <div className="edu__meta">
                <span className="edu__period">{edu.period}</span>
                <span className="edu__location">{edu.location}</span>
              </div>

              <div className="edu__gpa">
                <span className="edu__gpa-label">GPA</span>
                <span className="edu__gpa-value">{edu.gpa}</span>
              </div>

              <div className="edu__coursework">
                <span className="edu__coursework-label">Key Coursework</span>
                <div className="edu__coursework-tags">
                  {edu.coursework.map((course) => (
                    <span key={course} className="edu__course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {certifications && certifications.length > 0 && (
          <motion.div
            className="edu__certifications"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="edu__cert-title">
              <FaAward className="edu__cert-icon" />
              Certifications
            </h3>
            <div className="edu__cert-grid">
              {certifications.map((cert) => (
                <div key={cert.name} className="edu__cert-card glass-card">
                  <span className="edu__cert-name">{cert.name}</span>
                  <span className="edu__cert-issuer">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;
