import { motion } from 'framer-motion'
import { Quote, Star, User, Building2, CheckCircle } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 5,
      content: 'Kanagaraj created an amazing web application for my business. His coding skills and dedication to quality work impressed me a lot. The website works perfectly and my customers love it!',
      project: 'Business Website Development',
      category: 'Web Development'
    },
    {
      id: 2,
      name: 'Priya Devi',
      rating: 5,
      content: 'Working with Kanagaraj was a great experience. He developed a mobile app that exactly matched what I wanted. Professional approach and timely delivery. Highly recommended!',
      project: 'Mobile Application',
      category: 'Mobile Development'
    },
    {
      id: 3,
      name: 'Suresh Babu',
      rating: 4,
      content: 'Excellent developer! Kanagaraj helped me build a complete e-commerce solution. The admin panel and user interface are both fantastic. Great communication throughout the project.',
      project: 'E-commerce Platform',
      category: 'Full Stack Development'
    },
    {
      id: 4,
      name: 'Kavitha Raman',
      rating: 3,
      content: 'I needed a custom software solution for my clinic management. Kanagaraj delivered beyond expectations with clean code and user-friendly interface. Very satisfied with the work!',
      project: 'Clinic Management System',
      category: 'Custom Software'
    },
    {
      id: 5,
      name: 'Arun Vijay',
      rating: 5,
      content: 'Outstanding work on our restaurant management app! Kanagaraj understood our requirements perfectly and created a solution that made our operations much smoother. Thank you!',
      project: 'Restaurant Management App',
      category: 'Business Solutions'
    },
    {
      id: 6,
      name: 'Meera Krishnan',
      rating: 4,
      content: 'Kanagaraj developed a beautiful portfolio website for me. The design is modern and responsive. He was patient with all my requests and delivered quality work on time.',
      project: 'Portfolio Website',
      category: 'Web Design & Development'
    },
    {
      id: 7,
      name: 'David Johnson',
      rating: 5,
      content: 'Incredible talent! Kanagaraj built a complex inventory management system that transformed our business operations. His technical expertise and problem-solving skills are top-notch.',
      project: 'Inventory Management System',
      category: 'Enterprise Software'
    },
    {
      id: 8,
      name: 'Sarah Mitchell',
      rating: 4,
      content: 'Working with Kanagaraj was fantastic! He created a learning management platform that our students absolutely love. Professional, skilled, and delivers exactly what you need.',
      project: 'Learning Platform',
      category: 'Educational Technology'
    }
  ]

  const stats = [
    { label: 'Happy Clients', value: '30+', icon: User },
    { label: 'Projects Completed', value: '25+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '100%', icon: Star },
    { label: 'Positive Reviews', value: '95%', icon: Building2 }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ))
  }

  return (
    <div className="testimonials">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title gradient-text">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real feedback from satisfied clients who have trusted us with their projects
          </p>
        </motion.div>

        <motion.div
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="stat-icon">
                  <IconComponent size={24} />
                </div>
                <div className="stat-number gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="testimonial-header">
                <Quote className="quote-icon" size={24} />
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>

              <div className="testimonial-project">
                <div className="project-info">
                  <span className="project-name">{testimonial.project}</span>
                  <span className="project-category">{testimonial.category}</span>
                </div>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  <User size={20} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-label">Satisfied Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="testimonials-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="cta-content">
            <h3>Ready to Join Our Happy Clients?</h3>
            <p>
              Let's discuss your project and create something amazing together. 
              Your success story could be the next testimonial here!
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials
