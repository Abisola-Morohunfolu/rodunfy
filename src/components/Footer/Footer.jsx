import classes from './Footer.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<div>
				<Logo />
			</div>
			<ul className={classes.FooterLinks}>
				<li>Blog</li>
				<li>Privacy Policy</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<span>copyright Rodufy 2022</span>
		</footer>
	);
};

export default Footer;
