import {useState} from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactPage = () => {

  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const emailLink = `mailto:wengersc@gmail.com?subject=/${subject}&body='From ${name}, ${email}: ${message}'`

  const send = (event) => {
    event.preventDefault();
    (!emailRegex.test(email)) ? alert('Please enter a valid email address.') : (name === '' || subject === '' || message === '') ? alert('Please fill all form fields.') : window.location.href = emailLink
  }

  return (
    <section className="contact-page">
      <h2>Contact Me!</h2>
      <form>
        <label>
          Your Name: 
          <input type="text" placeholder='Logan Miller' value={name} onChange={event => setName(event.target.value)}/>
        </label>
        <label>
          Your Email: 
          <input type="email" placeholder='address@email.com' value={email} onChange={event => setEmail(event.target.value)}/>
        </label>
        <label>
          Subject: 
          <input type="text" placeholder='subject' value={subject} onChange={event => setSubject(event.target.value)}/>
        </label>
        <label>
          Message: 
          <textarea cols="30" rows="10" value={message} onChange={event => setMessage(event.target.value)}></textarea>
        </label>
        <button onClick={send}>Send Email</button>
      </form>
    </section>
  )
}

export default ContactPage