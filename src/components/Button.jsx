
import styles from '../styles/global';

const Button = ({ imageAsset, link}) => (
  
  <div
    onClick={() => window.open(link, '_blank')}
    className={`${styles.blackBtn}`}
  >
    <img 
      src={imageAsset}
      alt='expo_icon'
      className={`${styles.iconImg}`}
    />
    <div className='ml-4'>
      <p className={`${styles.btnText} font-normal text-xs`}>
        View it on
      </p>
      <p className={`${styles.btnText} font-bold text-sm`}>
        Expo Store
      </p>
    </div>
  </div>
);

export default Button;