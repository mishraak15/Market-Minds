import "./GrowthCard.css";

export default function GrowthCard({ icon, value, title }) {
  return (
    <div className="GrowthCard">
      <img src={icon} alt="growth-icon" />
      <span className="title">{value}+</span>
      <p>{title}</p>
    </div>
  );
}
