import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageSquare } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kanagarajm638@gmail.com',
      link: 'mailto:kanagarajm638@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6383588281',
      link: 'tel:+916383588281'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tiruppur, Tamil Nadu, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/KANAGARAJ-M',
      username: '@KANAGARAJ-M'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kanagaraj-m-b86439227/',
      username: 'kanagaraj-m'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com/mr_kanagaraj_m',
      username: '@mr_kanagaraj_m'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/kanagaraj.m_mkr/',
      username: '@kanagaraj.m_mkr'
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const quickActions = [
    {
      title: 'Project Collaboration',
      description: 'Let\'s work together on your next project',
      action: 'Discuss Project',
      color: '#FF6B6B'
    },
    {
      title: 'Freelance Work',
      description: 'Available for freelance opportunities',
      action: 'Hire Me',
      color: '#4ECDC4'
    },
    {
      title: 'Mentorship',
      description: 'Happy to help fellow developers',
      action: 'Get Guidance',
      color: '#45B7D1'
    }
  ]

  return (
    <div className="contact">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title gradient-text">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          className="quick-actions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              className="quick-action-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{ '--action-color': action.color }}
            >
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              <button className="action-btn">{action.action}</button>
            </motion.div>
          ))}
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-details">
              <h3>Get in Touch</h3>
              <p>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>

              <div className="contact-methods">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.link}
                      className="contact-method"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                    >
                      <div className="method-icon">
                        <IconComponent size={20} />
                      </div>
                      <div className="method-info">
                        <span className="method-label">{contact.label}</span>
                        <span className="method-value">{contact.value}</span>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="social-section">
              <h3>Follow Me</h3>
              <p>Stay connected and follow my journey</p>
              
              <div className="social-grid">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <IconComponent size={24} />
                      <div className="social-info">
                        <span className="social-label">{social.label}</span>
                        <span className="social-username">{social.username}</span>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-container card">
              <div className="form-header">
                <MessageSquare size={32} className="form-icon" />
                <h3>Send a Message</h3>
                <p>Let's discuss your project or just say hello!</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project, ideas, or just say hi..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="cta-content">
            <h3>Ready to Start Something Amazing?</h3>
            <p>
              Whether you have a project in mind, need technical consultation, or just want to connect, 
              I'm here to help. Let's build something great together!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
