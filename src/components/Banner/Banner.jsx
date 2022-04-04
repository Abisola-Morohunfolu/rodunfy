import { useState } from 'react';
import { ReactComponent as CancelButton } from '../../assets/cancel.svg';

const Banner = () => {
	const [displayBanner, setDisplayBanner] = useState(true);

	// remove banner when it set to false
	if (!displayBanner) return null;

	return (
		<div>
			<div>
				<span>New</span>
				<h2>Announcing our $15 million series A funding!</h2>
			</div>
			<button onClick={() => setDisplayBanner(false)}>
				<CancelButton />
			</button>
		</div>
	);
};

export default Banner;
