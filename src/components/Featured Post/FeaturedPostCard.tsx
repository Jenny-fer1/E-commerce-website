import styles from './FeaturedPostCard.module.css'

type FeaturedPostCardProps = {
    isNew?: boolean;
    category: string[];
    title: string;
    description: string;
    date: string;
    commentCount: number;
    image: string;
};

function FeaturedPostCard(props: FeaturedPostCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img 
                    src={props.image} 
                    alt={props.title} 
                    className={styles.image}
                />
                {props.isNew && <span className={styles.newBadge}>NEW</span>}
            </div>
            <div className={styles.cardContent}>
                <div className={styles.categoryContainer}>
                    {props.category.map((cat, index) => (
                        <span key={index} className={styles.category}>{cat}</span>
                    ))}
                </div>
                
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>{props.description}</p>
                
                <div className={styles.footer}>
                    <div className={styles.dateSection}>
                        <img src="/icons/date.svg" alt="Date" className={styles.icon} />
                        <span>{props.date}</span>
                    </div>
                    <div className={styles.commentSection}>
                        <img src="/icons/comment.svg" alt="Comments" className={styles.icon} />
                        <span>{props.commentCount} comments</span>
                    </div>
                </div>
                
                <a href="#" className={styles.learnMore}>
                    Learn More
                    <span>
                        <img src="/icons/next.svg" alt="" />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default FeaturedPostCard;