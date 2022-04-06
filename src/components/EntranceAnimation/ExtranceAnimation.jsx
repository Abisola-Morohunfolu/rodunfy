import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import './EntranceAnimation.css';

const ExtranceAnimation = () => {
	useLayoutEffect(() => {
		gsap.timeline().to('.entrance', {
			y: '-100%',
			duration: 0.8,
			ease: 'Power1.easeOut',
		});
	}, []);
	return <div className="entrance"></div>;
};

export default ExtranceAnimation;
