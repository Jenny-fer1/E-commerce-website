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
          <h5>Company Info</h5>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className={styles.column}>
          <h5>Legal</h5>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className={styles.column}>
          <h5>Features</h5>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className={styles.column}>
          <h5>Resources</h5>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div className={styles.column}>
          <h5>Get In Touch</h5>
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
