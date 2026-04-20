import React, { useRef, useState, useEffect } from "react";
import "./aboutsection.css";
function AboutSection() {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    
    <section
    
      ref={sectionRef}
      className={`about-section ${isVisible ? "fade-in" : ""}`}

    >
    <section id="about"></section>
      

    <button className="about-badge">Get to know Vexa</button>

    <h2 className="about-title">About Vexa</h2>

    <p className="about-subtitle">
      We Strategize. We Create. We Dominate.
    </p>


    <p className="about-text">
      Vexa is a forward-thinking creative agency built to transform brands into digital leaders.
      Combining medical expertise with smart strategy, we approach every project with clarity,
      precision, and purpose. From content creation to full-scale digital growth, we craft impactful
      experiences that build trust, strengthen authority, and drive measurable success.
    </p>

    <button className="about-btn">Explore Our Services</button>
    
    

  
</section>
    );
}
export default AboutSection;