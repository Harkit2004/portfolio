import IonIcon from './IonIcon'

interface ResumeProps {
  isActive: boolean
}

const Resume = ({ isActive }: ResumeProps) => {
  const education = [
    {
      title: 'Seneca Polytechnic — Computer Programming and Analysis',
      period: 'May 2023 — Dec 2025',
      description: 'Advanced Diploma, Toronto, ON. GPA: 4.0/4.0.'
    }
  ]

  const experience = [
    {
      title: 'Software Engineer, Pragra.io',
      period: 'Jan 2026 — Present',
      description: 'Built a multi-tenant SaaS LMS with static-site deployment, finance handling, AI-generated courses, and staff management. Developed the customer-facing website and a self-hosted CMS with 3 locales. Deployed 8 containerized services on Kubernetes with autoscaling, ingress, and TLS, and shipped a white-label mobile app. Designed and built a CRM for 10 agents managing 6,000+ contacts with mailing, calling, SMS, pipelines, and automated campaigns.'
    },
    {
      title: 'Full Stack Developer, Ai Financial',
      period: 'May 2025 — Aug 2025',
      description: 'Delivered backend endpoints and database entities across 3 core application flows within 1-week sprints. Built a Streamlit automation app that cut QA cycle time by 50% for a 6-developer team. Created end-to-end testing documentation for 6+ workflows and resolved critical UI bugs while implementing Storybook throughout development.'
    },
    {
      title: 'Full Stack Developer, Meta Trading Club Inc.',
      period: 'Aug 2024 — Dec 2024',
      description: 'Co-developed 10+ database entities with 5-6 backend endpoints each and contributed to ERD design. Led a 3-developer integration team for 3 months and implemented Oracle Cloud deployment. Solo-built an admin dashboard for 21+ entities and developed a URL-embedded quiz result algorithm for seamless sharing and dynamic loading.'
    }
  ]

  const hackathons = [
    {
      title: 'Microsoft X Seneca X Amity Design Jam',
      period: 'March2025',
      description: 'Winner'
    },
    {
      title: 'TerraHacks',
      period: 'August 2025',
      description: 'Winner'
    },
    {
      title: 'NASA Space App Challenge (Toronto)',
      period: 'October 2025',
      description: 'Winner'
    },
    {
      title: "GDG TMU SolutionHacks",
      period: 'July 2025',
      description: 'Runner-Up'
    },
    {
      title: 'HackThe6ix',
      period: 'July 2025',
      description: 'Finalist'
    },
    {
      title: 'PIM International Hackathon',
      period: 'November 2024',
      description: 'Semi-Finalist'
    }
  ]

  const achievements = [
    {
      title: "President's Honour List",
      period: 'Multiple-time',
      description: 'Multiple-time recipient for academic excellence at Seneca Polytechnic.'
    }
  ]

  const skills = [
    { name: 'Frontend Development', level: 85 },
    { name: 'AI and ML', level: 80 },
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

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon name="trophy-outline" />
          </div>
          <h3 className="h3">Hackathons & Competitions</h3>
        </div>

        <ol className="timeline-list">
          {hackathons.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              {item.period && <span>{item.period}</span>}
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon name="ribbon-outline" />
          </div>
          <h3 className="h3">Academic Achievements</h3>
        </div>

        <ol className="timeline-list">
          {achievements.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              {item.period && <span>{item.period}</span>}
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
