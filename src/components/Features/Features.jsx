import FeatureItem from '../FeatureItem/FeatureItem';
import './Features.css';
import Feature1 from '../../assets/Features1.svg';
import Feature2 from '../../assets/Features2.svg';
import Feature3 from '../../assets/Features3.svg';
import Feature4 from '../../assets/Features4.svg';

export default function Features() {
  return (
    <div className='Features'>
      <span className="subtitle">WHY CHOOSE US</span>
      <span className="title">WHY WE ARE BEST</span>
      <div className='features-container'>
        <FeatureItem title="Clarified Vision & Target" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." img={Feature1} />
        
        <FeatureItem title="High Performance" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." img={Feature2} />
        
        <FeatureItem title="Maintain Security" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." img={Feature3} />
        
        <FeatureItem title="Better Strategy & Quality" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." img={Feature4} />
        
      </div>
    </div>
  )
}
