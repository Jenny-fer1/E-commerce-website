import FeaturedPostCard from './FeaturedPostCard';
import styles from './FeaturedPostsSection.module.css'



function FeaturedPostCardSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Practice Advice</h2>
        <h3 className={styles.subtitle}>Featured Posts</h3>
      </div>

      <div className={styles.container}>
        <FeaturedPostCard
          isNew={true}
          category={['Google', 'Trending', 'New']}
          title="Loudest à la Madison #1 (L'intégral)"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          date="22 April 2021"
          commentCount={10}
          image="/images/post-1.svg"
        />

        <FeaturedPostCard
          isNew={true}
          category={['Design', 'Popular']}
          title="Best practices for minimalist design"
          description="Tips and tricks for clean UI and better user experience in modern web applications."
          date="10 May 2021"
          commentCount={10}
          image="/images/post-2.svg"
        />

        <FeaturedPostCard
          isNew={true}
          category={['AI', 'Top Rated']}
          title="The future of AI in healthcare"
          description="Exploring how artificial intelligence is transforming patient care and diagnosis."
          date="5 March 2021"
          commentCount={10}
          image="/images/post-3.svg"
        />
      </div>
    </section>
  );
}

export default FeaturedPostCardSection;
