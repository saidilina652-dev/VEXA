import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import "./contact.css";

export default function Contact() {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const sendToWhatsapp = (e) => {
    e.preventDefault();

    const phone = "213782020157";

    const text = encodeURIComponent(
`Hello, my name is ${name}
Email: ${email}
Message: ${message}`
    );

    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${isVisible ? "fade-in" : ""}`}
    >
      <section id="contact"></section>
    
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-grid">

        <div className="contact-info">
          <h3>Let's Work Together</h3>
          <p>
            Have a project in mind? Send us a message and we will respond
            as soon as possible.
          </p>
          <button className="about-badge"> what are you waiting for?! </button>
        </div>

       <form className="contact-form" onSubmit={sendToWhatsapp}>

  <input
    type="text"
    id="name"
    name="name"
      minLength="4"
  maxLength="20"
  size="10" 
    placeholder="Your Name"
    required
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    type="email"
    id="email"
    name="email"
    placeholder="Your Email"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <textarea
    id="message"
    name="message"
    placeholder="Your Message"
    rows="5"
    required
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />

  <button className="sendd" type="submit">
    Send Message
  </button>

</form>

      </div>

    </section>
  );
}