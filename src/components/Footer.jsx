import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/KANAGARAJ-M', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/kanagaraj-m-b86439227/', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/mr_kanagaraj_m', label: 'Twitter' },
    { icon: Instagram, url: 'https://www.instagram.com/kanagaraj.m_mkr/', label: 'Instagram' },
    { icon: Mail, url: 'mailto:mkrcreations.dev@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-section footer-about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-title gradient-text">KANAGARAJ M</h3>
            <p className="footer-description">
              Passionate Fullstack Developer specializing in mobile and web applications. 
              Creating innovative solutions with modern technologies.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="footer-section footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="section-title">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="section-title">Get In Touch</h4>
            <div className="contact-info">
              <p><Mail size={16} /> mkrcreations.dev@gmail.com</p>
              <p>📍 Coimbatore, Tamil Nadu, India</p>
              <p>🚀 Available for freelance work</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Kanagaraj M. All rights reserved.
            </p>
            <p className="made-with-love">
              Made with <Heart size={16} className="heart-icon" /> using React & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
