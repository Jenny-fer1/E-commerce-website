// ProductGrid.tsx - Mobile-aware version
import { useState, useEffect } from 'react';
import styles from './ProductGrid.module.css';
import { useGetProductsQuery } from '../../Features/productApi';
import type { Product } from '../../Features/Product';

function ProductGrid() {
  const [displayCount, setDisplayCount] = useState(8);
  const [isMobile, setIsMobile] = useState(false);
  const { data, error, isLoading } = useGetProductsQuery();

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set initial display count based on screen size
  useEffect(() => {
    setDisplayCount(isMobile ? 5 : 8);
  }, [isMobile]);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.error('API Error:', error);
    return <p>Something went wrong. Check console for details.</p>;
  }

  if (!data || !data.products) {
    return <p>No products found.</p>;
  }

  const productsToShow = data.products.slice(0, displayCount);
  const hasMoreProducts = displayCount < data.products.length;

  const handleLoadMore = () => {
    // Load more products based on screen size
    const loadMoreCount = isMobile ? 5 : 8;
    setDisplayCount(prev => prev + loadMoreCount);
  };

  return (
    <section className={styles.section}>
      <p className={styles.subheading}>Featured Products</p>
      <h2 className={styles.heading}>BESTSELLER PRODUCTS</h2>
      <p className={styles.description}>
        Problems trying to resolve the conflict between
      </p>

      <div className={styles.grid}>
        {productsToShow.map((product: Product) => (
          <div className={styles.card} key={product.id}>
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className={styles.image}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/200x200?text=No+Image';
              }}
            />
            <h4>{product.title}</h4>
            <p className={styles.category}>English Department</p>
            <p className={styles.price}>
              <span className={styles.old}>${product.price.toFixed(2)}</span>{' '}
              <span className={styles.new}>${Math.max(0, product.price - 10).toFixed(2)}</span>
            </p>
          </div>
        ))}
      </div>

      {hasMoreProducts && (
        <button className={styles.loadBtn} onClick={handleLoadMore}>
          LOAD MORE PRODUCTS
        </button>
      )}
    </section>
  );
}

export default ProductGrid;