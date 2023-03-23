
import  styles  from '../styles/global';
import  assets  from '../assets';

const FeatureCard = ({ iconUrl, iconName }) => (
  <div className={`${styles.featureCard}`}>
    <img 
      src={iconUrl}
      alt={iconName}
      className={styles}
    />
    <p className={styles.featureText}>
      {iconName}
    </p>
  </div>
);

const Features = () => (
  <div className={`${styles.section} ${styles.bgPrimary} ${styles.whiteText} banner03`}>
    <div className={`${styles.subSection} flex-col text-center`}>
      <div>
        <h1 className={`${styles.h1Text}`}>
          Technologies
        </h1>
        <p className={styles.pText}>
          ProNef has been developed using a cross-platform technology, React Native.
        </p>
      </div>
      <div className={styles.flexWrap}>
        <FeatureCard iconUrl={assets.react} iconName="React Native" />
        <FeatureCard iconUrl={assets.javascript} iconName="JavaScript" />
      </div>
    </div>    
  </div>
);

export default Features;