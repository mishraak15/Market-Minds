import "./CrousalCard.css";
import codeIcon from "../../assets/CodeIcon.svg";
import arrow from "../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

export default function CrousalCard({ img }) {
  return (
    <div className="CrousalCard">
      <img src={img} alt="Slide 3" />
      <div className="hovered-item">
        <img src={codeIcon} alt="code..." />
        <span>WEB DEVELOPMENT</span>
        <p>
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque
        </p>
        <NavLink to="https://www.fylehq.com/" target="_blank">
          <button>
            READ MORE <img src={arrow} alt="arrow" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}
