import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchProducts = () => {
	const [data, setData] = useState(null);
	const [status, setStatus] = useState('loading');
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get('/products')
			.then((res) => {
				setData({
					products: res.data.data,
					count: res.data.count,
				});
				setStatus('success');
			})
			.catch((error) => {
				setStatus('error');
				setError(error);
			});
	}, []);

	return { data, status, error };
};
