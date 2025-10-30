interface AboutProps {
  isActive: boolean
}

const About = ({ isActive }: AboutProps) => {
  const services = [
    {
      icon: '/assets/images/web-design.svg',
      title: 'UI/UX Design',
      description: 'Want to provide great user experience and interfaces.'
    },
    {
      icon: '/assets/images/web-dev.svg',
      title: 'Web Development',
      description: 'Want to develop high-quality sites at the professional level.'
    },
    {
      icon: '/assets/images/game-dev.svg',
      title: 'Game Development',
      description: 'Want to come up with innovative and never-seen before game loops.'
    },
    {
      icon: '/assets/images/ml.svg',
      title: 'Machine Learning',
      description: 'Want to get more in Machine Learning and maybe one day get own LLM.'
    },
    {
      icon: '/assets/images/app-dev.svg',
      title: 'App Development',
      description: 'Want to develop apps but never tried this before at a level that acceptable(other than "Hello World" toast).'
    },
    {
      icon: '/assets/images/cloud-computing.svg',
      title: 'Cloud Computing',
      description: 'Want to get into to learn about to get high-level understanding of Cloud and Networking in-general.'
    }
  ]

  const technologies = [
    { logo: '/assets/images/reactjs.svg', alt: 'React.js' },
    { logo: '/assets/images/nextjs.svg', alt: 'Next.js' },
    { logo: '/assets/images/tesnorflow.svg', alt: 'TensorFlow' },
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
          I am an international student originally from Madhya Pradesh, 
          India currently pursuing an Advance Diploma in Canada. I love problem-solving and have a knack for challenging myself.
        </p>

        <p>
          I enjoy building new things and always want to collaborate and network with witty individuals to develop innovative solutions. 
          But, I also struggle with a disease of introvertism that prevents me from approaching people. 
          I hope that I can overcome this hurdle and make amends to my approach.
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
            <li key={index} className="clients-item">
              <img src={tech.logo} alt={tech.alt} />
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default About
