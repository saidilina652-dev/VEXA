import Aurora from "./components/Aurora";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutSection from "./components/aboutsection";
import Services from "./components/services";  
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";
import WhatsappButton from "./components/WhatsappButton";
import "./index.css";
import Achievements from "./components/Achievements";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  
  return (
    <Router>
      <div style={{ position: "relative", height: "100vh" }}>
        
        {/* Aurora كخلفية */}
        <Aurora
          colorStops={["#8254bb", "#B19EEF", "#3611ee"]}
          blend={0.36}
          amplitude={1.0}
          speed={0.8}
        />

       <Navbar />
       <Hero />
       <AboutSection />
       <Services />
        <Achievements />
       <Team />
      
      <Contact />
      <section id="contact"></section>
      
       
        <Footer />
        <WhatsappButton />

      </div>
       
    </Router>
    
  );
}
export default App;