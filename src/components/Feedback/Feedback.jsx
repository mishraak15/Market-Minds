import "./Feedback.css";
import QuoteMark from "../../assets/Quotemarks-left.svg";

export default function Feedback() {
  return (
    <div className="Feedback">
      <span className="subtitle">CLIENT&apos;S FEEDBACK</span>
      <span className="title">PEOPLE SAY&apos;S ABOUT US!</span>
      <img src={QuoteMark} alt="quotemark" />
      <p>
        Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections Bonorum et Malorum
        original.
      </p>
      <div>
        <span className="Feedback-writer">JANNAT TUMPA</span>
        <span className="Feedback-designation">
          - COO, AMERIMAR ENTERPRISES, INC.
        </span>
      </div>
    </div>
  );
}
