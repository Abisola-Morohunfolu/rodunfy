import PageWrapper from '../components/PageWrapper/PageWrapper';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [isFetching, setIsFetching] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.remove();

		if (!emailInput || !passwordInput) {
			return toast.error('Enter your email and password');
		}

		// email test here

		setIsFetching(true);
		toast.loading('Creating your account');

		axios
			.post('auth/register', {
				email: emailInput,
				password: passwordInput,
			})
			.then((res) => {
				toast.remove();
				toast.success(res.data.data.data);
				// naviagete to login after a second
				setTimeout(() => {
					navigate('/login');
				}, 1000);
			})
			.catch((err) => {
				toast.remove();
				toast.error('Oops! Something went wrong');
				setIsFetching(false);
			});
	};

	return (
		<PageWrapper submitHandler={handleSubmit}>
			<h3>Register</h3>
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
				onClick={handleSubmit}
				type="submit"
				disabled={isFetching}
			>
				{isFetching ? 'Registering...' : 'Register'}
			</Button>
		</PageWrapper>
	);
};

export default Register;
