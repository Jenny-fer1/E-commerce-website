
import './Header.css'
import styles from './HeaderIcons.module.css'

function Header () {
    return (
        <div>
            <header className="header">

                <div className="top-bar">
                    <div className="container">
                        <div className="contact-info">
                            <div className="contact-item">
                                <img src="/icons/phone.svg" alt="" className={styles.icon}/>
                                <span>(225) 555-0118</span>
                            </div>

                            <div className="contact item">
                                <img src="/icons/email.svg" alt="" className={styles.icon}/>
                                <span>michelle.rivera@example.com</span>
                            </div>
                        </div>

                        <div className="promo-text">
                            Follow Us  and get a chance to win 80% off
                        </div>

                        <div className="social-icons">
                            <span>Follow Us:</span>
                            <img src="/icons/insta.svg" alt="Instagram" className={styles.socialIcon} />
                            <img src="/icons/youtube.svg" alt="Youtube" className={styles.socialIcon} />
                            <img src="/icons/facebook.svg" alt="Facebook" className={styles.socialIcon} />
                            <img src="/icons/twitter.svg" alt="Twitter" className={styles.socialIcon}/>
                        </div>
                    </div>
                </div>

                <div className="main-header">
                    <div className="container">

                        <h1 className="logo">Bandage</h1>

                        <nav className="nav">
                            <a href="">Home</a>
                            <a href="">Shop</a> <img src="/icons/dropdown.svg" alt="" />
                            <a href="">Blog</a>
                            <a href="">About</a>
                            <a href="">Contact</a>
                            <a href="">Pages</a>
                        </nav>

                        <div className="mobile-icons">
                            <img src="/icons/b-search.svg" alt="" />
                            <img src="/icons/b-cart.svg" alt="" />
                            <button className="hamburger">
                                <img src="/icons/menu.svg" alt="" />
                            </button>
                        </div>

                        <div className="user-actions">
                            <div className="login">
                                <img src="/icons/user.svg" alt="" className={styles.actionIcon}/>
                                <span>Login / Register</span>
                            </div>
                            <img src="/icons/search.svg" alt="Search" className={styles.actionIcon}  />
                            <img src="/icons/cart.svg" alt="" className={styles.actionIcon} />
                            <img src="/icons/heart.svg" alt="" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        <a href="#">Home</a>
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;