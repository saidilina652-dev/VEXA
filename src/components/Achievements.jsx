import React from "react";
import "./Achievements.css";

function Achievements() {
  const stats = [
    { img: "/haddana.png", title: "Haddana Pharmacy", location: "Biskra", desc: " Content Strategy / Content creation / Editing / Social media management from 700 followers to 20k" },
    { img: "/zouaoui.png", title: "Zouaoui Dental Clinic", location: "Batna" },
    { img: "/Aura.png", title: "Aura Clinic", location: "Batna" },
    { img: "/farmazone.png", title: "Farmazone", location: "Alger", desc: "UGC Content" },
    { img: "/master.png", title: "MasterQ Academy", location: "Batna", desc: "Design" },
    { title: "SkinCure", location: "Alger", desc: "Web / Design / Editing" },
    { title: "Prettypharmadvisor", location: "Oran", desc: "Editing" },
    { title: "Melich 05", location: "Batna", desc: "Social media management" },
    { title: "Dr Zelmit", location: "Batna", desc: "Social media management" },
  ];

  return (
    <div className="achievements-marquee">

      {/* TITLE */}
      <div className="services-container">
        <h1 className="title">Our Achievements</h1>
        <p className="subtitle">Celebrating progress and success</p>
      </div>

      {/* MARQUEE */}
      <div className="achievements-track">
        {[...stats, ...stats].map((item, index) => (
          <div className="stat" key={index}>
            {item.img && <img src={item.img} alt={item.title} />}
            <h3>{item.title}</h3>
            <p>📍 {item.location}</p>
            {item.desc && <p>{item.desc}</p>}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Achievements;