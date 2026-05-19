interface AboutProps {
  isActive: boolean
}

const About = ({ isActive }: AboutProps) => {
  const services = [
    {
      icon: '/assets/images/web-design.svg',
      title: 'UI/UX Design',
      description:
        'I design clear, consistent interfaces that feel intuitive on first use and hold up as products grow in scope and complexity.'
    },
    {
      icon: '/assets/images/web-dev.svg',
      title: 'Web Development',
      description:
        'I build full-stack applications that are fast, reliable, and ready for real users—from early prototypes through production releases.'
    },
    {
      icon: '/assets/images/game-dev.svg',
      title: 'Game Development',
      description:
        'I craft engaging mechanics and feedback loops that keep players curious, challenged, and coming back for another round.'
    },
    {
      icon: '/assets/images/ml.svg',
      title: 'AI and ML',
      description:
        'I turn data into useful intelligence—training models, building pipelines, and shipping features that solve problems people actually have.'
    },
    {
      icon: '/assets/images/app-dev.svg',
      title: 'App Development',
      description:
        'I deliver mobile experiences that feel native, responsive, and dependable whether the product is consumer-facing or internal.'
    },
    {
      icon: '/assets/images/cloud-computing.svg',
      title: 'Cloud Computing',
      description:
        'I run software at scale with deployments that are secure, observable, and built to recover gracefully when things go wrong.'
    }
  ]

  const technologies = [
    { logo: '/assets/images/reactjs.svg', alt: 'React.js' },
    { logo: '/assets/images/nextjs.svg', alt: 'Next.js' },
    { logo: '/assets/images/spring-boot.svg', alt: 'Spring Boot' },
    { logo: '/assets/images/express-js.svg', alt: 'Express', wide: true },
    { logo: '/assets/images/tensorflow.svg', alt: 'TensorFlow' },
    { logo: '/assets/images/pytorch.svg', alt: 'PyTorch' },
    { logo: '/assets/images/tailwindcss.svg', alt: 'Tailwind CSS' },
    { logo: '/assets/images/mongo.svg', alt: 'MongoDB' },
    { logo: '/assets/images/postgresql.svg', alt: 'PostgreSQL' },
    { logo: '/assets/images/socket.svg', alt: 'Socket.io' }
  ]

  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a software engineer based in Toronto, ON, with an Advanced Diploma in Computer
          Programming and Analysis from Seneca Polytechnic, where I earned a 4.0 GPA. I enjoy
          building products end to end—from the experience people interact with to the systems
          that keep everything running reliably behind the scenes.
        </p>

        <p>
          As a founding engineer, I have helped build 5+ products across 3 startups, shipping
          production software across web, mobile, intelligent systems, and cloud infrastructure. I
          also stay sharp through hackathons and side projects, and I am most engaged when a
          problem is open-ended and the solution takes both careful thinking and steady iteration.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I am Passionate About</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Technologies</h3>

        <ul className="clients-list has-scrollbar">
          {technologies.map((tech, index) => (
            <li key={index} className={`clients-item${tech.wide ? ' clients-item--wide' : ''}`}>
              <img src={tech.logo} alt={tech.alt} />
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default About
