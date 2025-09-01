import React from 'react'
import "./style.css"

export default function ContactMap() {
  return (
    <div className='contact-map-container flex-grow-1'>
        
      <iframe
        width="100%"
        height="100%"
        style={{borderRadius:"10px"}}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7495190458714!2d51.38897391526046!3d35.68919728019359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0174ed7fcf5f%3A0x4b13f47397d5fdf0!2z2KfYs9iq2KfYsdin2Kog2KfZhNiq2YXZhCDZhdin2K_ZhNmK2YQgLSBUZWhyYW4!5e0!3m2!1sen!2s!4v1684074205889!5m2!1sen!2s"
      ></iframe>
    
    </div>
  )
}
