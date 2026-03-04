/**
 * Contact section with form and direct contact information.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { submitContact } from "../services/api";
import "./Contact.css";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const Contact = ({ profile }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitContact(form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">// Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="contact__wrapper">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Get in Touch</h3>
            <p className="contact__info-text">
              I'm always open to discussing new opportunities, interesting
              projects, or potential collaborations.
            </p>

            <div className="contact__info-items">
              <a
                href={`mailto:${profile.email}`}
                className="contact__info-item"
              >
                <FaEnvelope className="contact__info-icon" />
                <span>{profile.email}</span>
              </a>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-item"
              >
                <FaLinkedin className="contact__info-icon" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-item"
              >
                <FaGithub className="contact__info-icon" />
                <span>GitHub Profile</span>
              </a>
              <div className="contact__info-item">
                <FaMapMarkerAlt className="contact__info-icon" />
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="Your name"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder="What's this about?"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="contact__input contact__textarea"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="contact__status contact__status--success">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact__status contact__status--error">
                Something went wrong. Please try emailing me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
