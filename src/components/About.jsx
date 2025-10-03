import { motion } from 'framer-motion'
import { Code, Smartphone, Globe, Database, Cloud, Award } from 'lucide-react'
import './About.css'

const About = () => {
  const highlights = [
    { icon: Code, value: '1+', label: 'Years Experience' },
    { icon: Smartphone, value: '5+', label: 'Mobile Apps' },
    { icon: Globe, value: '7+', label: 'Web Projects' },
    // { icon: Database, value: '10+', label: 'Databases' }
  ]

  const expertise = [
    { 
      icon: Smartphone, 
      title: 'Mobile Development',
      description: 'Expert in Flutter & Dart for cross-platform mobile applications. Published multiple apps with clean architecture and optimal performance.'
    },
    { 
      icon: Globe, 
      title: 'Web Development',
      description: 'Full-stack web development with React, JavaScript, and modern frameworks. Creating responsive and interactive user experiences.'
    },
    { 
      icon: Database, 
      title: 'Backend & Database',
      description: 'Proficient in Python, Firebase, PostgreSQL, and cloud technologies. Building scalable server architectures and APIs.'
    },
    { 
      icon: Cloud, 
      title: 'Cloud & DevOps',
      description: 'Experience with cloud platforms, deployment, SEO optimization, and development tools like VS Code and Android Studio.'
    }
  ]

  return (
    <div className="about">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">
            Passionate software developer with expertise in mobile and web development
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-description">
              <p>
                Hello! I'm <strong>Kanagaraj M</strong>, a passionate software developer specializing in 
                <span className="highlight"> mobile app development</span>, 
                <span className="highlight"> web applications</span>, and 
                <span className="highlight"> full-stack solutions</span>.
              </p>
              
              <p>
                With hands-on experience in modern technologies like Flutter, Dart, React, Python, PostgreSQL, 
                JavaScript, Firebase, Android Studio, VS Code, and cloud technologies, I've successfully delivered 
                projects ranging from social media applications to e-learning platforms and enterprise management systems.
              </p>
              
              <p>
                I believe in writing clean, maintainable code and creating user-centric applications that solve 
                real-world problems. My journey includes developing <strong>Addagram</strong> (a social app), 
                <strong>Kodex</strong> (an e-learning platform), warehouse management systems, poultry management solutions, 
                PDF tools, and <strong>Blue Dev Connect</strong> networking platform.
              </p>

              <div className="about-highlights">
                {highlights.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      className="highlight-item"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <IconComponent className="highlight-icon" />
                      <div className="highlight-number gradient-text">{item.value}</div>
                      <div className="highlight-label">{item.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="expertise-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {expertise.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="expertise-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="expertise-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="expertise-title">{item.title}</h3>
                  <p className="expertise-description">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="cta-content">
            <h3>Ready to collaborate?</h3>
            <p>Let's create something amazing together!</p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
