/**
 * Footer with social links and copyright.
 */

import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ profile }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <a
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="footer__social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="footer__text">
          Designed & Built with <FaHeart className="footer__heart" /> by{" "}
          <span className="gradient-text">{profile.name}</span>
        </p>

        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
