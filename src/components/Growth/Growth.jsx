import GrowthCard from "../GrowthCard/GrowthCard";
import "./Growth.css";
import Heart from '../../assets/heart.svg';
import Clock from '../../assets/clock.svg';
import Award from '../../assets/Award.svg';
import Tick from '../../assets/Tick.svg';

export default function Growth() {
  return (
    <div className="Growth">
      <div className="Growth-container">
        <span className="subtitle">EXPERT GROWTHS</span>
        <span className="title">OUR COMPANY GROWTH</span>
        <div className="Growth-details">
            <GrowthCard icon={Heart} value={199} title="Staticfied Customers"/>
            <GrowthCard icon={Clock} value={1591} title="Days Of Operation"/>
            <GrowthCard icon={Tick} value={283} title="Complete Projects"/>
            <GrowthCard icon={Award} value={75} title="Win Awards"/>
        </div>
      </div>
    </div>
  );
}
