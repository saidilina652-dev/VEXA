import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./whatsapp.css";

export default function WhatsappButton() {

  const phone = "213782020157";
  const message = "Hello, I want to know more about your services.";

  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2000); // تظهر بعد ثانيتين

    return () => clearTimeout(timer);
  }, []);

  const openWhatsapp = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-container">

      {showBubble && (
        <div className="whatsapp-bubble">
          Do you need help?
        </div>
      )}

      <div className="whatsapp-button" onClick={openWhatsapp}>
        <FaWhatsapp />
      </div>

    </div>
  );
}