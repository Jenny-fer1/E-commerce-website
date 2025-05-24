
import styles from './BestServices.module.css';

function BestServices() {
  return (
    <section className={styles.bestServices}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Featured Products</h3>
        <h2 className={styles.title}>THE BEST SERVICES</h2>
        <p className={styles.description}>Problems trying to resolve the conflict between</p>
      </div>

      <div className={styles.servicesGrid}>
  
        <div className={styles.serviceCard}>
          <img 
            src="/public/icons/easy-wins.svg" 
            alt="Easy Wins icon" 
            className={styles.serviceIcon}
          />
          <h3 className={styles.serviceTitle}>Easy Wins</h3>
          <p className={styles.serviceDescription}>Get your best looking smile</p>
        </div>

     
        <div className={styles.serviceCard}>
          <img 
            src="/public/icons/concrete.svg" 
            alt="Concrete icon" 
            className={styles.serviceIcon}
          />
          <h3 className={styles.serviceTitle}>Concrete</h3>
          <p className={styles.serviceDescription}>Defalcate is most focused in</p>
        </div>

      
        <div className={styles.serviceCard}>
          <img 
            src="/public/icons/hack-growth.svg" 
            alt="Hurdle icon" 
            className={styles.serviceIcon}
          />
          <h3 className={styles.serviceTitle}>Hurdle</h3>
          <p className={styles.serviceDescription}>Overcome any hurdle or any</p>
        </div>
      </div>
    </section>
  );
}

export default BestServices;