import { useState } from 'react'
import IonIcon from './IonIcon'

interface PortfolioProps {
  isActive: boolean
}

const CATEGORY_LABELS: Record<string, string> = {
  'web development': 'Web development',
  'ai and ml': 'AI and ML',
  'game development': 'Game Development'
}

const formatCategory = (category: string) =>
  CATEGORY_LABELS[category] ?? category

const Portfolio = ({ isActive }: PortfolioProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectActive, setSelectActive] = useState(false)

  const projects = [
    {
      title: 'Babble Bear',
      category: 'ai and ml',
      image: '/assets/images/babble-bear.png',
      link: 'https://github.com/Babelly-The-Bear'
    },
    {
      title: 'Zenvi',
      category: 'ai and ml',
      image: '/assets/images/zenvi.png',
      link: 'https://github.com/Zenvi-pro/zenvi-core'
    },
    {
      title: 'AstroAbode',
      category: 'web development',
      image: '/assets/images/astro-abode.png',
      link: 'https://github.com/Moustafa-FD/habitat-layout'
    },
    {
      title: 'RendorRealty',
      category: 'ai and ml',
      image: '/assets/images/rendor-realty.png',
      link: 'https://github.com/RendorRealty'
    },
    {
      title: 'getREALS',
      category: 'web development',
      image: '/assets/images/get-reals.png',
      link: 'https://github.com/getReals-club/GetRealApp'
    },
    {
      title: 'ASL(American Sign Language) To Speech',
      category: 'ai and ml',
      image: '/assets/images/asl-to-speech.png',
      link: 'https://github.com/Harkit2004/ASL-to-Speech'
    },
    {
      title: 'Avatar-X',
      category: 'ai and ml',
      image: '/assets/images/avatar-x.png',
      link: 'https://github.com/Harkit2004/AvatarX'
    },
    {
      title: 'Chatting App',
      category: 'web development',
      image: '/assets/images/chatapp.png',
      link: 'https://github.com/Harkit2004/chatapp-men-ejs'
    },
    {
      title: 'Software Developer Club Website',
      category: 'web development',
      image: '/assets/images/ssdc.png',
      link: 'https://github.com/Jashanpreet2/SSDC-Website'
    },
    {
      title: 'Game Recommendation System',
      category: 'ai and ml',
      image: '/assets/images/recc-sys.png',
      link: 'https://github.com/Harkit2004/recommendation-system'
    },
    {
      title: 'Snake Game',
      category: 'game development',
      image: '/assets/images/sanke-game.png',
      link: 'https://github.com/Harkit2004/snake-pygame'
    }
  ]

  const filterCategories = ['All', 'Web development', 'AI and ML', 'Game Development']

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category.toLowerCase())
  }

  const handleSelectClick = (category: string) => {
    setSelectedCategory(category.toLowerCase())
    setSelectActive(false)
  }

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="project">
      <header>
        <h2 className="h2 article-title">Project</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filterCategories.map((category, index) => (
            <li key={index} className="filter-item">
              <button
                className={selectedCategory === category.toLowerCase() ? 'active' : ''}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className={`filter-select ${selectActive ? 'active' : ''}`} onClick={() => setSelectActive(!selectActive)}>
            <div className="select-value">
              {filterCategories.find(cat => cat.toLowerCase() === selectedCategory) || 'Select category'}
            </div>
            <div className="select-icon">
              <IonIcon name="chevron-down" />
            </div>
          </button>

          <ul className="select-list">
            {filterCategories.map((category, index) => (
              <li key={index} className="select-item">
                <button onClick={() => handleSelectClick(category)}>{category}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="project-item active" data-filter-item data-category={project.category}>
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon name="eye-outline" />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{formatCategory(project.category)}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio
