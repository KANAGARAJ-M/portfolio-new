import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Mobile App Development Internship',
      company: 'Marcello Tech',
      type: 'Internship',
      location: 'Remote',
      duration: '2024 - Present',
      description: 'Specialized in Flutter and Android development, working on cross-platform mobile applications with modern UI/UX principles.',
      responsibilities: [
        'Developed cross-platform mobile applications using Flutter framework',
        'Implemented responsive UI components and smooth animations',
        'Collaborated with design teams to create intuitive user experiences',
        'Optimized app performance and ensured code quality standards'
      ],
      technologies: ['Flutter', 'Dart', 'Android Studio', 'Firebase', 'Git'],
      achievements: [
        'Successfully delivered 3+ mobile applications',
        'Improved app performance by 40% through optimization',
        'Received excellent feedback from clients and mentors'
      ]
    },
    {
      id: 2,
      title: 'Fullstack Developer - Personal Projects',
      company: 'HandsOn Experience',
      type: 'Personal Development',
      location: 'India',
      duration: '2021 - Present',
      description: 'Self-driven development of multiple applications including social media platforms, e-learning solutions, and enterprise systems.',
      responsibilities: [
        'Architected and developed Addagram social media platform with Flutter and Firebase',
        'Built Kodex e-learning platform with video streaming and course management',
        'Developed warehouse management system with inventory tracking',
        'Created poultry management solution for livestock monitoring',
        'Built PDF tools suite for document manipulation',
        'Developed Blue Dev Connect networking platform for developers'
      ],
      technologies: ['Flutter', 'Dart', 'React', 'Python', 'Firebase', 'PostgreSQL', 'JavaScript', 'Android Studio'],
      achievements: [
        'Successfully launched 6+ major applications across different domains',
        'Built comprehensive social media platform with real-time messaging',
        'Created scalable e-learning platform with video streaming capabilities',
        'Developed enterprise management solutions for warehouse and agriculture',
        'Implemented SEO optimization and cloud deployment strategies'
      ]
    }
  ]

  return (
    <div className="experience">
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title gradient-text">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and hands-on development experience
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-connector">
                <div className="timeline-dot">
                  <Briefcase size={20} />
                </div>
                {index < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              <motion.div
                className="experience-card card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="experience-header-card">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-details">
                  <div className="responsibilities-section">
                    <h4>Key Responsibilities:</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="achievements-section">
                    <h4>Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="technologies-used">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="summary-content">
            <h3>What I Bring</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">💡</div>
                <h4>Innovation</h4>
                <p>Creative problem-solving approach with modern technology solutions</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🚀</div>
                <h4>Performance</h4>
                <p>Focus on optimized, scalable applications with excellent user experience</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🤝</div>
                <h4>Collaboration</h4>
                <p>Strong teamwork and communication skills in diverse environments</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">📈</div>
                <h4>Growth</h4>
                <p>Continuous learning mindset with adaptability to new technologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
