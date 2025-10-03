import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Building, CheckCircle } from 'lucide-react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Android Development Essential Training',
      provider: 'LinkedIn Learning',
      issueDate: '2024',
      credentialId: 'LL-ADT-2024',
      description: 'Comprehensive training covering Android app development fundamentals, UI/UX design, and modern Android development practices.',
      skills: ['Android Studio', 'Kotlin', 'Java', 'UI/UX Design', 'Mobile Development'],
      type: 'Professional',
      status: 'Verified'
    },
    {
      id: 2,
      title: 'Full Stack Android Development and Mobile App Marketing',
      provider: 'Udemy',
      issueDate: '2024',
      credentialId: 'UC-FSAD-2024',
      description: 'End-to-end Android development course covering full-stack development, app deployment, and marketing strategies.',
      skills: ['Android Development', 'Backend Integration', 'App Store Optimization', 'Marketing', 'Full Stack'],
      type: 'Professional',
      status: 'Verified'
    },
    {
      id: 3,
      title: 'NM - TNCPL Certificate',
      provider: 'Guvi',
      issueDate: '2024',
      credentialId: 'GUVI-TNCPL-2024',
      description: 'Tamil Nadu Chief Ministers Programming Language certification demonstrating proficiency in programming fundamentals and problem-solving.',
      skills: ['Programming Fundamentals', 'Problem Solving', 'Algorithms', 'Data Structures'],
      type: 'Government',
      status: 'Verified'
    },
    {
      id: 4,
      title: 'Angular',
      provider: 'Infosys Springboard',
      issueDate: '2024',
      credentialId: 'ISB-ANG-2024',
      description: 'Angular framework certification covering component-based architecture, TypeScript, and modern web development practices.',
      skills: ['Angular', 'TypeScript', 'Web Development', 'Component Architecture', 'SPA'],
      type: 'Corporate',
      status: 'Verified'
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Professional': return '#4ECDC4'
      case 'Government': return '#FF6B6B'
      case 'Corporate': return '#45B7D1'
      default: return '#96CEB4'
    }
  }

  const stats = [
    { label: 'Total Certifications', value: '4+', icon: Award },
    { label: 'Professional Skills', value: '15+', icon: CheckCircle },
    { label: 'Verified Credentials', value: '100%', icon: CheckCircle },
    { label: 'Learning Hours', value: '200+', icon: Award }
  ]

  return (
    <div className="certifications">
      <div className="container">
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title gradient-text">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications and continuous learning achievements in technology and development
          </p>
        </motion.div>

        <motion.div
          className="certifications-stats"
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
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className="stat-icon" size={24} />
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ '--cert-color': getTypeColor(cert.type) }}
            >
              <div className="certification-header">
                <div className="cert-icon">
                  <Award size={32} />
                </div>
                <div className="cert-meta">
                  <div className="cert-type" style={{ backgroundColor: getTypeColor(cert.type) }}>
                    {cert.type}
                  </div>
                  <div className="cert-status">
                    <CheckCircle size={16} />
                    {cert.status}
                  </div>
                </div>
              </div>

              <div className="certification-content">
                <h3 className="cert-title">{cert.title}</h3>
                
                <div className="cert-provider">
                  <Building size={16} />
                  <span>{cert.provider}</span>
                </div>

                <div className="cert-date">
                  <Calendar size={16} />
                  <span>Issued: {cert.issueDate}</span>
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  <h4>Skills Covered:</h4>
                  <div className="skills-tags">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

               
              </div>

              
             

              <div className="cert-border" style={{ backgroundColor: getTypeColor(cert.type) }} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications-commitment"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="commitment-content">
            <h3>Commitment to Continuous Learning</h3>
            <p>
              I believe in staying current with rapidly evolving technology trends. These certifications 
              represent my dedication to professional growth and mastering new skills that contribute to 
              delivering high-quality solutions. I continuously seek new learning opportunities to enhance 
              my expertise and stay ahead in the competitive tech landscape.
            </p>
            
            <div className="learning-areas">
              <div className="learning-area">
                <h4>🎯 Current Focus</h4>
                <p>Advanced Flutter development, React ecosystem, and cloud architecture</p>
              </div>
              <div className="learning-area">
                <h4>📚 Next Goals</h4>
                <p>AWS certifications, Advanced React patterns, and Machine Learning fundamentals</p>
              </div>
              <div className="learning-area">
                <h4>💡 Learning Approach</h4>
                <p>Hands-on projects, industry certifications, and real-world problem solving</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications
