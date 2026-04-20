import React, { useRef, useState, useEffect } from "react";
import "./Hero.css";



function HeroSection() {
  const scrollToContact = () => {
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
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
        className={`hero-section ${isVisible ? "fade-in" : ""}`}
  
      >
      
      {/* المحتوى */}
      
      <div className="hero-content">
        
        <h1 className="hero-title">From concept to success, We make it happen </h1>
        <p className="pre-title">Where Strategy Meets Impact And Your Digital Presence Dominates</p>
  <button className="my-button" onClick={scrollToContact}>
  Let's Collaborate
</button>
      </div>
     
    </section>
    
  
    );
}
export default HeroSection;