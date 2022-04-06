import Button from '../Button/Button';
import classes from './UserHeader.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { onUserLogOut } from '../../DataFetcing/onLogUserOut';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const UserHeader = ({ name }) => {
	const navigate = useNavigate();
	const headerRef = useRef();

	const handleUserLogOut = async () => {
		toast.loading('Logging you out');
		const logOutStatus = await onUserLogOut();

		if (!logOutStatus) {
			toast.remove();
			// return toast.error('Failed to logout!');
		}

		// toast.remove();
		toast.success('Logged Out Successfully');
		localStorage.removeItem('uA');
		// navigate to login
		return setTimeout(() => {
			navigate('/login', { replace: true });
		}, 700);
	};

	useLayoutEffect(() => {
		gsap.to(headerRef.current, {
			opacity: 1,
			duration: 0.4,
			delay: 0.3,
			ease: 'Power1.easeIn',
		});
	}, []);

	return (
		<header className={classes.UserHeader} ref={headerRef}>
			<Logo />
			<div className={classes.UserHeaderTextBox}>
				<h5 className={classes.Heading}>Hi {name}</h5>
				<Button styleClass={classes.LogOutBtn} onClick={handleUserLogOut}>
					logout
				</Button>
			</div>
		</header>
	);
};

export default UserHeader;
