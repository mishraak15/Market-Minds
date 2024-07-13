import Crousel from "../Crousel/Crousel";
import "./ServicesSection.css";
export default function ServicesSection() {
  return (
    <div className="ServiceSection">
      <div className="ServiceSection-container">
        <div className="ServiceSection-top">
          <span className="subtitle">WHAT WE DO</span>
        </div>
        <div className="ServiceSection-mid">
          <span className="title">SERVICES PROVIDE FOR YOU</span>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
        </div>
        <div className="ServiceSection-bottom">
          <Crousel />
        </div>
      </div>
    </div>
  );
}
