import PageWrapper from '../components/PageWrapper/PageWrapper';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import { useLayoutEffect, useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [isFetching, setIsFetching] = useState(false);
	const [unMounting, setUnMouting] = useState(false);

	const navigate = useNavigate();

	useLayoutEffect(() => {
		return () => {
			if (unMounting) {
				console.log('Unmounting');
			}
		};
	}, [unMounting]);

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.remove();

		// if user tries to submit empty string
		if (!emailInput || !passwordInput) {
			return toast.error('Enter your email and password');
		}

		// change value of ref to disable button
		setIsFetching(true);
		toast.loading('Signing you in!');

		axios
			.post('auth/login', {
				email: emailInput,
				password: passwordInput,
			})
			.then((res) => {
				toast.remove();
				toast.success('Login Successful');

				// TODO: maybe store in context
				const userData = JSON.stringify({
					name: emailInput.split('@')[0],
					tk: res.data.token,
				});
				sessionStorage.setItem('uA', userData);
				setUnMouting(true);

				// naviagate to home after a second
				setTimeout(() => {
					navigate('/home', {
						replace: true,
					});
				}, 1000);
			})
			.catch((err) => {
				const errorMessage = err?.response?.data?.Error
					? err?.response?.data?.Error
					: 'Oops! Something went wrong';
				toast.remove();
				toast.error(errorMessage);
				setIsFetching(false);
			});
	};

	return (
		<PageWrapper submitHandler={handleSubmit}>
			<h3>Login</h3>
			<TextInput
				placeholder="Email"
				type="email"
				required
				value={emailInput}
				onChange={(e) => setEmailInput(e.target.value)}
				autoComplete="off"
			/>
			<TextInput
				placeholder="Password"
				type="password"
				value={passwordInput}
				onChange={(e) => setPasswordInput(e.target.value)}
				required
				autoComplete="off"
			/>
			<Button
				style={{ width: '100%', backgroundColor: 'var(--color-red)', fontSize: '2.4rem' }}
				disabled={isFetching}
				type="submit"
			>
				Login
			</Button>
		</PageWrapper>
	);
};

export default Login;
