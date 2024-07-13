import "./FeatureItem.css"

export default function FeatureItem({ title, desc, img }) {
  return (
    <div className="FeatureItem">
      <img src={img} alt="feature" />
      <span>{title}</span>
      <p>{desc}</p>
    </div>
  );
}
