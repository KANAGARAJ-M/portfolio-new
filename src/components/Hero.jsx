import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/KANAGARAJ-M', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/kanagaraj-m-b86439227/', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/mr_kanagaraj_m', label: 'Twitter' },
    { icon: Instagram, url: 'https://www.instagram.com/kanagaraj.m_mkr/', label: 'Instagram' },
    { icon: Mail, url: 'mailto:kanagarajm638@gmail.com', label: 'Email' }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="location-icon" />
              Hello from India 🇮🇳
            </motion.p>
            
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I'm <span className="gradient-text">KANAGARAJ M</span>
            </motion.h1>
            
            <motion.div
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="typing-animation">
                <span className="typing-text">Fullstack Developer</span>
                <span className="typing-text">Mobile App Developer</span>
                <span className="typing-text">React Developer</span>
                <span className="typing-text">Flutter Developer</span>
              </div>
            </motion.div>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Passionate about creating innovative mobile and web applications using cutting-edge technologies. 
              Specializing in Flutter, React, and Full-stack development with expertise in Firebase, Python, and cloud technologies.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <button className="btn btn-primary" onClick={scrollToContact}>
                <Mail size={18} />
                Let's Connect
              </button>
              <a href="/resume.pdf" className="btn btn-secondary" download>
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
            
            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    <IconComponent size={20} />
                    <span className="tooltip">{social.label}</span>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <motion.div
                className="profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/src/assets/profile.png" alt="Kanagaraj M" />
              </motion.div>
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-arrow"></div>
        </motion.div>
      </div>
      
      <div className="hero-background">
        <div className="background-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="shape shape-2"
            animate={{
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="shape shape-3"
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
