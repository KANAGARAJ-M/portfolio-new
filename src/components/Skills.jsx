import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 95, icon: '📱' },
        { name: 'Dart', level: 93, icon: '🎯' },
        { name: 'Android Studio', level: 90, icon: '🤖' },
        { name: 'Mobile UI/UX', level: 87, icon: '✨' }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 88, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '�' },
        { name: 'HTML/CSS', level: 92, icon: '🎨' },
        { name: 'Web UI/UX', level: 85, icon: '🎨' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Python', level: 87, icon: '�' },
        { name: 'Firebase', level: 92, icon: '🔥' },
        { name: 'PostgreSQL', level: 83, icon: '🐘' },
        { name: 'REST APIs', level: 88, icon: '🔌' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Git', level: 88, icon: '📋' },
        { name: 'SEO', level: 85, icon: '🔍' },
        { name: 'Cloud Services', level: 82, icon: '☁️' }
      ]
    }
  ]

  const technologies = [
    { name: 'Flutter', color: '#02569B' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Python', color: '#3776AB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Dart', color: '#0175C2' },
    { name: 'HTML', color: '#E34F26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'Android', color: '#3DDC84' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Git', color: '#F05032' }
  ]

  return (
    <div className="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title gradient-text">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                    >
                      <div className="skill-header">
                        {/* <span className="skill-icon">{skill.icon}</span> */}
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="technologies-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="technologies-title">Technologies I Work With</h3>
            <div className="technologies-grid">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="tech-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{ '--tech-color': tech.color }}
                >
                  <span className="tech-name">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-summary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="summary-content">
              <h3>What I Bring to the Table</h3>
              <div className="summary-points">
                <div className="summary-point">
                  <div className="point-icon">🚀</div>
                  <div>
                    <h4>Performance Focused</h4>
                    <p>Optimized applications with clean architecture and best practices</p>
                  </div>
                </div>
                <div className="summary-point">
                  <div className="point-icon">🎯</div>
                  <div>
                    <h4>User-Centric Design</h4>
                    <p>Creating intuitive interfaces that enhance user experience</p>
                  </div>
                </div>
                <div className="summary-point">
                  <div className="point-icon">🔧</div>
                  <div>
                    <h4>Problem Solver</h4>
                    <p>Analytical approach to complex challenges with innovative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
