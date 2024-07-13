import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Crousel.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import CrousalCard from "../CrousalCard/CrousalCard";

export default function Crousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="Crousel">
      <Slider {...settings}>
        <div className="Crousel-img-container">
          <CrousalCard img={img1} />
        </div>

        <div className="Crousel-img-container">
          <CrousalCard img={img2} />
        </div>

        <div className="Crousel-img-container">
          <CrousalCard img={img3} />
        </div>
      </Slider>
    </div>
  );
}
