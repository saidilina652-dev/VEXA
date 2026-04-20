import { useEffect, useRef, useState,} from "react";
import "./team.css";

const data = [
  {
    name: "Ramy Zoubiri",
    age : "23 ans",
    achivement: "Founder of Vexa agence and content creator",
    image: "/ramyy.jpg" 
  },
  {
    name: "Lina Saidi",
    age : "21 ans",
    achivement: "websites creator and content creator",
   image: "/linaa.jpg" 
  },
  {
    name: "Malak Ben Machiche",
    age: "24 ans",
    achivement: "Manager and UGC content creator",
    image: "/malaak.jpg"
  }
  ,{
    name: "Yassine Tifratene",
    age: "22 ans",
    achivement: "UGC content creator",
    image: "/yasmine.jpg"
  }
  ,{
    name: "Embouazza chaimae ",
    age: "21 ans",
    achivement: "designer and content creator",
    image: "/chaima.jpg"
  },
  {
    name: "Meliza Bouhidel",
    age : "20 ans",
    achivement: "Content creator - Community Manager",
    image: "/melizaa.PNG" 
  },
  {
    name: "Oussama Hamdaoui",
    age : "24 ans",
    achivement: "Co-fondateur - Éditeur",
   image: "/oussama.JPG" 
  },
  {
    name: "Maria Boukhalfa",
    age: "20 ans",
    achivement: "Media face",
    image: "/maria.jpg"
  }
  ,{
    name: "Amel Allaoua",
    age: "23 ans",
    achivement: " content creator",
    image: "/amel.PNG"
  }
  ,{
    name: "Dhikra Farhtia ",
    age: "20 ans",
    achivement: "UGC content creator",
    image: "/dhikra.PNG"
  }
   ,{
    name: "Meriem Abdallah ",
    age: "20 ans",
    achivement: "Editor",
    image: "/meriem.png"
  }

];

export default function Services() {
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

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));

  const previousIndex = (index - 1 + data.length) % data.length;
  const nextIndex = (index + 1) % data.length;

  return (
     <section
      ref={sectionRef}
      className={`service-section ${isVisible ? "fade-in" : ""}`} 
      > 
        <button className="about">we present to you</button>
      <h2 className="service-title">Our Team</h2>

      <div className="slider">

        <button className="nav left" onClick={prev}>‹</button>
       
<div className="cards">

  <div className="card previous">
    <img src={data[previousIndex].image} alt="" />
  </div>

  <div className="card current">
    <img
      key={data[index].image}
      src={data[index].image}
      alt=""
      className="slide-image"
    />
  </div>

  <div className="card next">
    <img src={data[nextIndex].image} alt="" />
  </div>

</div>

        <button className="nav right" onClick={next}>›</button>

        <div className="info">
          <h3>{data[index].name}</h3>
          <h4>{data[index].age}</h4>
          <p>{data[index].achivement}</p>
        </div>

      </div>
    <section id="team"></section>
        </section>
  );
}