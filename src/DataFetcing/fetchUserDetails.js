import axios from 'axios';

// fetch user details
export const FetchUserDetails = () => {
	// let data;
	// let error;
	// let isLoading;

	const userInfo = JSON.parse(sessionStorage.getItem('uA'));
	axios
		.get('auth/me', {
			token: userInfo.tk,
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};
