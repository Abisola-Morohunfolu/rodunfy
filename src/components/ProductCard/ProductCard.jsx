import classes from './ProductCard.module.css';

const PostCard = ({ image, productName, productDescription }) => {
	return (
		<div className={classes.PostCard}>
			<img src={image} alt={productName} className={classes.ProductImage} />
			<div className={classes.PostCardTextBox}>
				<p>{productDescription}</p>
			</div>
		</div>
	);
};

export default PostCard;
