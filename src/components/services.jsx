import React from "react";
import { useEffect, useRef } from "react";
import "./services.css";

export default function Services() {
  const services = [
    "Content Strategy",
    "Video Editing",
    "Social Media Management",
    "Graphic Design",
    "Website Creation",
    "UGC Content",
  ];
  const cardsRef = useRef([]);

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cardsRef.current.forEach((card) => {
    if (card) observer.observe(card);
  });

  return () => observer.disconnect();
}, []);
  

  return (
    <section className="services-section">
      <div className="overlay"></div>
      
      <div className="services-container">
        <button className="about-badge">Get to know more about us</button>
        <h1 className="title">Our Services</h1>
        <p className="subtitle">Your Goals. Our Expertise</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)} className="service-card" style={{ transitionDelay: `${index * 0.15}s` }}>
              {service}
            </div>
          ))}
        </div>
      </div>
      <section id="services"></section>
    </section>
  );
}