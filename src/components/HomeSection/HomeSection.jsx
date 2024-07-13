import "./HomeSection.css";
import homeImg from "../../assets/hero.png";
import { useState } from "react";
import TalkUs from "../TalkUs/TalkUs";

export default function HomeSection() {
  const [showContact, setShowContact] = useState(false);
  if (!showContact) {
    return (
      <div className="HomeSection">
        <div className="Home-left">
          <span className="Home-subtitle">AWARD WINNING</span>
          <span className="Home-title">DIGITAL MARKETING AGENCY</span>
          <p className="Home-desc">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
          <button className="contact-btn" onClick={() => setShowContact(true)}>
            Contact Us
          </button>
        </div>
        <div className="Home-right">
          <img src={homeImg} alt="women" />
        </div>
      </div>
    );
  } else {
    return <TalkUs setShowContact={setShowContact} />;
  }
}
