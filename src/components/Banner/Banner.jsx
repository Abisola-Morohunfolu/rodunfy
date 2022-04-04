import { useState } from 'react';
import { ReactComponent as CancelButton } from '../../assets/cancel.svg';
import Button from '../Button/Button';
import classes from './Banner.module.css';

const Banner = () => {
	const [displayBanner, setDisplayBanner] = useState(true);

	// remove banner when it set to false
	if (!displayBanner) return null;

	return (
		<div className={classes.Banner}>
			<div className={classes.BannerText}>
				<span>New</span>
				<h2>Announcing our $15 million series A funding!</h2>
			</div>
			<Button onClick={() => setDisplayBanner(false)}>
				<CancelButton />
			</Button>
		</div>
	);
};

export default Banner;
