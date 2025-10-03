import { motion } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Globe, Database, Users, BookOpen, Package, Truck, FileText, Network } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Addagram',
      category: 'Social Media App',
      description: 'A comprehensive social media platform built with Flutter and Firebase, featuring real-time messaging, photo sharing, and social interactions.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Python'],
      icon: Users,
      color: '#FF6B6B',
      features: ['Real-time messaging', 'Photo/Video sharing', 'User profiles', 'Social interactions'],
      status: 'Live'
    },
    {
      id: 2,
      title: 'Kodex E-Learning',
      category: 'Education Platform',
      description: 'An interactive e-learning platform with course management, video streaming, and progress tracking for students and educators.',
      technologies: ['Flutter', 'Firebase', 'Video Streaming', 'Analytics'],
      icon: BookOpen,
      color: '#4ECDC4',
      features: ['Course management', 'Video lectures', 'Progress tracking', 'Interactive quizzes'],
      status: 'Live'
    },
    {
      id: 3,
      title: 'Warehouse Management',
      category: 'Enterprise System',
      description: 'Complete warehouse management system with inventory tracking, order processing, and automated reporting.',
      technologies: ['React', 'Python', 'PostgreSQL', 'REST APIs'],
      icon: Package,
      color: '#45B7D1',
      features: ['Inventory tracking', 'Order management', 'Automated reports', 'Real-time analytics'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Poultry Management',
      category: 'Agriculture Tech',
      description: 'Digital solution for poultry farm management including livestock tracking, health monitoring, and production analytics.',
      technologies: ['Flutter', 'Firebase', 'IoT Integration', 'Analytics'],
      icon: Truck,
      color: '#96CEB4',
      features: ['Livestock tracking', 'Health monitoring', 'Production analytics', 'Feed management'],
      status: 'Completed'
    },
    {
      id: 5,
      title: 'PDF Tools Suite',
      category: 'Utility Application',
      description: 'Comprehensive PDF manipulation tools including merge, split, convert, and editing capabilities.',
      technologies: ['React', 'JavaScript', 'PDF.js', 'Web APIs'],
      icon: FileText,
      color: '#FECA57',
      features: ['PDF merge/split', 'Format conversion', 'Text extraction', 'Document editing'],
      status: 'Live'
    },
    {
      id: 6,
      title: 'Blue Dev Connect',
      category: 'Developer Network',
      description: 'Professional networking platform connecting developers, featuring project collaboration and skill sharing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      icon: Network,
      color: '#FF9FF3',
      features: ['Developer profiles', 'Project collaboration', 'Skill matching', 'Real-time chat'],
      status: 'In Development'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return '#4ECDC4'
      case 'Completed': return '#96CEB4'
      case 'In Development': return '#FECA57'
      default: return '#ffffff'
    }
  }

  return (
    <div className="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work spanning mobile apps, web applications, and enterprise solutions
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--project-color': project.color }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <IconComponent size={32} />
                  </div>
                  <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                    {project.status}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <button className="project-btn btn-primary">
                    <ExternalLink size={18} />
                    View Details
                  </button>
                  <button className="project-btn btn-secondary">
                    <Github size={18} />
                    Source Code
                  </button>
                </div>

                <div className="project-overlay" />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="cta-content">
            <h3>Have a Project in Mind?</h3>
            <p>Let's discuss how we can bring your ideas to life with modern technology solutions.</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </button>
              <a 
                href="https://github.com/KANAGARAJ-M" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                View All Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
