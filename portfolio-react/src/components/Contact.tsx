import { useState, useEffect, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import IonIcon from './IonIcon'

interface ContactProps {
  isActive: boolean
}

const Contact = ({ isActive }: ContactProps) => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })
  }, [])

  useEffect(() => {
    // Check form validity
    const valid = formData.from_name.trim() !== '' && 
                  formData.from_email.trim() !== '' && 
                  formData.message.trim() !== '' &&
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)
    setIsValid(valid)
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.currentTarget
    )
      .then(() => {
        console.log('SUCCESS!')
        alert('Message sent successfully!')
        setFormData({
          from_name: '',
          from_email: '',
          message: ''
        })
      }, (error: unknown) => {
        console.log('FAILED...', error)
        alert('Failed to send message. Please try again.')
      })
  }

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbRVxdB0qK4gRosLkcuLYyk4&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form id="contact-form" className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="from_name"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.from_name}
              onChange={handleInputChange}
              data-form-input
            />

            <input
              type="email"
              name="from_email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.from_email}
              onChange={handleInputChange}
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" disabled={!isValid} data-form-btn>
            <IonIcon name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact
