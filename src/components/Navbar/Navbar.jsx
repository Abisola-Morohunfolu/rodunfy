import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Logo from '../../assets/logo.svg';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<>
			<Banner />
			<nav className={classes.Nav}>
				<img src={Logo} alt="Rodufy" />
				<div className={classes.Links}>
					<Link to="/register" className={classes.RegisterLink}>
						Register
					</Link>
					<Link to="/login" className={classes.LoginLink}>
						Login
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
