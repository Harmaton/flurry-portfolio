import { useEffect, useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_d071apc', 'template_9tnnt1k', form.current, 'hwoO9S5htCw_ajoyv')
      .then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities and/or full-time roles - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
              
          </p>
         <h5> <b>Phone - +254 748667466</b></h5>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
       
      </div>
      <div className="info-map">
          Harmaton Njagi,
          <br />
          Nairobi ,
          <br />
          <br />
          <hr />
          0748667466
          <br />
          <hr />
          <br />
          Kenya. <br />
          Kajiado, Rongai <br />
          <br />
          <span>njagiiharmaton@gmail.com</span>
        </div>
    </>
  )
}

export default Contact