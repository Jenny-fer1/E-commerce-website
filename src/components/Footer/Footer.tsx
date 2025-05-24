import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <h2 className={styles.brand}>Bandage</h2>
        <div className={styles.socials}>
          <img src="/icons/b-facebook.svg" alt="Facebook" />
          <img src="/icons/b-insta.svg" alt="Instagram" />
          <img src="/icons/b-twitter.svg" alt="Twitter" />
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>Company Info</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className={styles.column}>
          <h4>Legal</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className={styles.column}>
          <h4>Features</h4>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className={styles.column}>
          <h4>Resources</h4>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div className={styles.column}>
          <h4>Get In Touch</h4>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          <p className={styles.smallText}>Lorem imp sum dolor Amit</p>
        </div>
      </div>

      <div className={styles.bottomText}>
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
