
import styles from './Testimonial.module.css';

function Testimonial() {
  return (
    <div className={styles.container}>
      <div className={styles.testimonialSection}>
        <h2 className={styles.title}>What they say about us</h2>
        
        
        <div className={styles.profileImageContainer}>
          <img 
            src="/images/user.svg"  
            alt="Customer profile" 
            className={styles.profileImage}
          />
        </div>
        
        
        <div className={styles.rating}>
          <img src="/icons/filled star.svg" alt="Filled star" className={styles.star} />
          <img src="/icons/filled star.svg" alt="Filled star" className={styles.star} />
          <img src="/icons/filled star.svg" alt="Filled star" className={styles.star} />
          <img src="/icons/filled star.svg" alt="Filled star" className={styles.star} />
          <img src="/icons/empty star.svg" alt="Empty star" className={styles.star} />
        </div>
        
        <p className={styles.text}>
          late helps you see how many more days you need to work to
          <br />
          reach your financial goal.
        </p>
        
        <div className={styles.author}>
          <p className={styles.authorName}>Regina Miles</p>
          <p className={styles.authorTitle}>Designer</p>
        </div>
      </div>

      
      <div className={styles.gallery}>
        <img src="/images/image-1.svg" alt="Gallery item 1" className={styles.galleryImage} />
        <img src="/images/image-2.svg" alt="Gallery item 2" className={styles.galleryImage} />
        <img src="/images/image-3.svg" alt="Gallery item 3" className={styles.galleryImage} />
        <img src="/images/image-4.svg" alt="Gallery item 4" className={styles.galleryImage} />
        <img src="/images/image-5.svg" alt="Gallery item 5" className={styles.galleryImage} />
        <img src="/images/image-6.svg" alt="Gallery item 6" className={styles.galleryImage} />
        <img src="/images/image-7.svg" alt="Gallery item 7" className={styles.galleryImage} />
        <img src="/images/image-8.svg" alt="Gallery item 8" className={styles.galleryImage} />
        <img src="/images/image-9.svg" alt="Gallery item 9" className={styles.galleryImage} />
      </div>
    </div>
  );
}

export default Testimonial;