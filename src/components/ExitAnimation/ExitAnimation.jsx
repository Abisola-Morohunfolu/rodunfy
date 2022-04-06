import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExitAnimation.css';

const ExitAnimation = (route) => {
	const navigate = useNavigate();

	useLayoutEffect(() => {
		const tl = gsap.timeline().to(['.first', '.second', '.third'], {
			y: 0,
			duration: 0.8,
			ease: 'Power1.easeOut',
			stagger: 0.15,
		});

		const duration = tl.duration() * 1000;

		setTimeout(() => {
			navigate('/home');
		}, duration);

		tl.play();

		return () => tl.kill();
	}, []);

	return (
		<>
			<div className="first"></div>
			<div className="second"></div>
			<div className="third"></div>
		</>
	);
};

export default ExitAnimation;
