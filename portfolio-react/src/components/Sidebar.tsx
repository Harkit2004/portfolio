import { useState } from 'react'
import IonIcon from './IonIcon'

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/new-my-avatar.jpg" alt="Harkit Singh Chhabra" style={{borderRadius: '20px'}} />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Harkit Singh Chhabra">Harkit Singh Chhabra</h1>
          <p className="title">Software Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={() => setIsActive(!isActive)}>
          <span>Show Contacts</span>
          <IonIcon name="chevron-down" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="mail-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:harkitsinghchhabra@gmail.com" className="contact-link">
                harkitsinghchhabra@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="phone-portrait-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+14377999104" className="contact-link">+1 (437) 799-9104</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="calendar-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">October 4, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="location-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Toronto, ON Canada</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/Harkit2004" className="social-link">
              <IonIcon name="logo-github" />
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.linkedin.com/in/harkit-singh-chhabra/" className="social-link">
              <IonIcon name="logo-linkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
