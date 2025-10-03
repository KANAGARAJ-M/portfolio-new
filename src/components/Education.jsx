import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, Book } from 'lucide-react'
import './Education.css'

const Education = () => {
  const education = {
    degree: 'Bachelor of Engineering',
    major: 'Computer Science and Engineering',
    institution: 'V.S.B College of Engineering Technical Campus',
    location: 'Coimbatore, Tamil Nadu, India',
    duration: '2021 - 2025',
    cgpa: '7.9/10',
    status: 'Completed',
    description: 'Comprehensive study in computer science fundamentals, software engineering, and modern development practices with focus on mobile and web technologies.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Software Engineering',
      'Web Development',
      'Mobile Application Development',
      'Computer Networks',
      'Operating Systems',
      'Machine Learning Basics',
      'System Design'
    ],
    achievements: [
      'Graduated with First Class honors (7.9/10 CGPA)',
      'Completed multiple technical projects during coursework',
      'Participated in coding competitions and hackathons',
      'Active member of technical societies and coding clubs'
    ]
  }

  const additionalLearning = [
    {
      title: 'Self-Directed Learning',
      description: 'Continuous learning through online platforms and practical projects',
      skills: ['Flutter Development', 'React.js', 'Firebase', 'Cloud Technologies', 'Advanced Mobile Development']
    },
    {
      title: 'Project-Based Learning',
      description: 'Hands-on experience through building real-world applications',
      skills: ['Full-Stack Development', 'System Architecture', 'API Design', 'Database Design', 'User Experience']
    },
    {
      title: 'Industry Best Practices',
      description: 'Learning modern development practices and methodologies',
      skills: ['Clean Code', 'Agile Development', 'Version Control', 'Testing', 'Deployment']
    }
  ]

  return (
    <div className="education">
      <div className="container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title gradient-text">Education</h2>
          <p className="section-subtitle">
            Academic foundation and continuous learning journey in computer science and technology
          </p>
        </motion.div>

        <motion.div
          className="education-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="education-card card">
            <div className="education-header-section">
              <div className="education-icon">
                <GraduationCap size={40} />
              </div>
              <div className="education-info">
                <h3 className="degree-title">{education.degree}</h3>
                <p className="major">{education.major}</p>
                <h4 className="institution">{education.institution}</h4>
                <div className="education-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{education.duration}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                  <div className="meta-item">
                    <Award size={16} />
                    <span>CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </div>
              <div className="status-badge">
                {education.status}
              </div>
            </div>

            <p className="education-description">{education.description}</p>

            <div className="education-details">
              <div className="coursework-section">
                <h4><Book size={18} /> Key Coursework</h4>
                <div className="coursework-grid">
                  {education.coursework.map((course, index) => (
                    <motion.div
                      key={index}
                      className="course-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="achievements-section">
                <h4><Award size={18} /> Academic Achievements</h4>
                <ul className="achievements-list">
                  {education.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="additional-learning"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="additional-title">Continuous Learning & Development</h3>
          <div className="learning-grid">
            {additionalLearning.map((item, index) => (
              <motion.div
                key={index}
                className="learning-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h4 className="learning-title">{item.title}</h4>
                <p className="learning-description">{item.description}</p>
                <div className="learning-skills">
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="education-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="summary-content">
            <h3>Educational Philosophy</h3>
            <p>
              My educational journey combines strong academic foundations with practical, hands-on learning. 
              I believe in continuous growth, staying updated with industry trends, and applying theoretical 
              knowledge to real-world problems. This approach has enabled me to bridge the gap between 
              academic learning and professional development effectively.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education
