import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import classes from './ProductCard.module.css';

const PostCard = ({ image, productName, productDescription }) => {
	const cardRef = useRef();
	useEffect(() => {
		gsap.to(cardRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.5,
		});
	}, []);
	return (
		<div className={classes.PostCard} ref={cardRef}>
			<img src={image} alt={productName} className={classes.ProductImage} />
			<div className={classes.PostCardTextBox}>
				<p>
					{productDescription.substring(0, 60)}
					{productDescription.length > 60 && '...'}
				</p>
			</div>
		</div>
	);
};

export default PostCard;
