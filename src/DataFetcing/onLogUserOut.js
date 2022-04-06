import axios from 'axios';

// log user out
export const onUserLogOut = async () => {
	const userInfo = JSON.parse(sessionStorage.getItem('uA'));

	let isLogOutSuccessful = false;

	axios
		.post('auth/logout', { token: userInfo.tk })
		.then((res) => {
			isLogOutSuccessful = true;
		})
		.catch((err) => {
			isLogOutSuccessful = false;
		});

	return isLogOutSuccessful;
};
