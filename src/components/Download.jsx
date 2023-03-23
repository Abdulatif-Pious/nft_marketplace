
import styles from '../styles/global';
import assets from '../assets';

const Download = () => (
  <div className={`${styles.section} ${styles.bgWhite} ${styles.blackText}`}>
    <div className={`${styles.subSection} flex-col text-center`}>
      <h1 className={`${styles.h1Text}`}>
        Download the Source Code
      </h1>
      <p className={`${styles.pText}`}>
        Get the full source code on GitHub
      </p>
      <button type='button' className={styles.primaryBtn}>
        Source Code
      </button>
      <img 
        src={assets.scene}
        alt='scene_img'
        className={styles.fullImg}
      />
    </div>
  </div>
);

export default Download;

