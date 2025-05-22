import styles from './CategoryGrid.module.css'

const categories = [
    {name: 'FURNITURE', count: 5, image: '/images/furniture-1.svg'},
    {name: 'FURNITURE', count: 5, image: '/images/furniture-2.svg'},
    {name: 'FURNITURE', count: 5, image: '/images/furniture-3.svg'},
    {name: 'FURNITURE', count: 5, image: '/images/furniture-4.svg'},
];

function CategoryGrid () {
    return (
        <section className={styles.CategoryGrid}>
            {categories.map((category, index) => (
                <article key={index} className={styles.categoryCard}>
                    <div className={styles.imageContainer}>
                    <img src={category.image} 
                    alt=""
                    className={styles.categoryImage} 
                    />

                    <div className={styles.textOverlay}>
                        <p className={styles.itemCount}>{category.count} items</p>
                        <p className={styles.categoryName}>{category.name}</p>
                        <a href="#" className={styles.readMoreLink}>Read More</a>
                    </div>
                </div>
                </article>
            ))}
        </section>
    )
};

export default CategoryGrid;