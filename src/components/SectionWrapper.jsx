
import { Button } from './';
import  assets  from '../assets';
import styles from '../styles/global';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse}) => (
  <div
    className={`
      min-h-screen ${banner}
      ${styles.section}
      ${ reverse ? styles.bgWhite: styles.bgPrimary }
    `}
  >
    <div
      className={`
        flex items-center w-11/12 sm:w-full minmd:w-3/4
        ${reverse ? styles.reverseBox : styles.box}
      `}
    >
      <div
        className={`
          ${styles.descDiv}
          ${reverse ? styles.textRight : styles.textLeft }
          ${reverse ? 'fadeRightMini' : 'fadeLeftMini'}
        `}
      >
        <h1
          className={`
            ${styles.h1Text}
            ${reverse ? styles.blackText : styles.whiteText}
          `}
        >
          {title}
        </h1>
        <p 
          className={`
            ${styles.descriptionText}
            ${reverse ? styles.blackText : styles.whiteText}
          `}
        >
          {description}
        </p>
        {showBtn && (
          <Button 
            imageAsset={assets.expo}
            link='https://expo.dev'
          />
        )}
      </div>
      <div className={`flex-1 p-8 sm:px-0 ${styles.flexCenter}`}>
        <img 
          src={mockupImg}
          alt="hero_img"
          className={`${styles.sectionImg}
            ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}
          `}
        />
      </div>
    </div>
  </div>
)
export default SectionWrapper;