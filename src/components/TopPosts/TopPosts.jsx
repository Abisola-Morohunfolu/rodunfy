import classes from './TopPosts.module.css';
import ProductCard from '../ProductCard/ProductCard';

const TopPosts = ({ products }) => {
	return (
		<section className={classes.TopPosts}>
			{products.map((product) => (
				<ProductCard
					key={`Top-${product.id}`}
					image={product.metaImageUrl}
					productName={product.product_name}
					productDescription={product.description}
				/>
			))}
		</section>
	);
};

export default TopPosts;
