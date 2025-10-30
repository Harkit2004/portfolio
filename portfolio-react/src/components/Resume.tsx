import IonIcon from './IonIcon'

interface ResumeProps {
  isActive: boolean
}

const Resume = ({ isActive }: ResumeProps) => {
  const education = [
    {
      title: 'Seneca Polytechnic',
      period: 'May 2023 — Present',
      description: 'Currently pursuing a CPA(Computer Programming and Analysis) Advance Diploma.'
    }
  ]

  const experience = [
    {
      title: 'Full-Stack Developer, Meta Trading Club',
      period: 'Aug 2024 — Dec 2024',
      description: 'Led full-stack development of a Personality Quiz Website using React, Node.js, Express, and MySQL, completing backend and admin panel UI in 1 month. Built personality algorithms, designed the database ERD, and managed the team using Notion and Google Meet.'
    },
    {
      title: 'Software Developer, Ai Financial',
      period: 'May 2025 — Aug 2025',
      description: 'Built scalable web apps using Java, Spring Boot, React, and TypeScript, while streamlining QA with a Selenium-powered Streamlit tool. Collaborated with cross-functional teams to deliver accessible, high-performance solutions.'
    }
  ]

  const skills = [
    { name: 'Frontend Development', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Backend Development', level: 95 }
  ]

  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon name="book-outline" />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon name="book-outline" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Resume
