import { useState } from 'react';
import Button from '../Button/Button';
import ProductCard from '../ProductCard/ProductCard';
import classes from './TrendingPosts.module.css';

const TrendingPosts = ({ products, count }) => {
	const [limit, setLimit] = useState(8);

	const onLoadMorePosts = () => {
		const newLimit = limit + 8;

		if (newLimit > count) {
			return setLimit(count);
		}

		setLimit(newLimit);
	};
	return (
		<>
			<section className={classes.TrendingPosts}>
				{products.slice(0, limit).map((product) => (
					<ProductCard
						key={`Trending-${product.id}`}
						image={product.metaImageUrl}
						productName={product.product_name}
						productDescription={product.description}
					/>
				))}
			</section>
			{limit < count && (
				<div className={classes.LoadMoreButtonDiv}>
					<Button onClick={onLoadMorePosts} styleClass={classes.LoadMoreButton}>
						Load More
					</Button>
				</div>
			)}
		</>
	);
};

export default TrendingPosts;
