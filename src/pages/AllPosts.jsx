import MainPageWrapper from '../components/MainPageWrapper/MainPageWrapper';
import UserHeader from '../components/UserHeader/UserHeader';
import { useFetchProducts } from '../DataFetcing/fetchProducts';
import { ReactComponent as ArrowIcon } from '../assets/carret.svg';
import TopPosts from '../components/TopPosts/TopPosts';
import TrendingPosts from '../components/TrendingPosts/TrendingPosts';

const AllPosts = () => {
	const userInfo = JSON.parse(sessionStorage.getItem('uA'));

	// const data = FetchUserDetails();
	const { data, status, error } = useFetchProducts();

	return (
		<>
			<UserHeader name={userInfo.name} />
			<MainPageWrapper>
				{status === 'success' && Array.isArray(data?.products) && data?.products.length > 0 && (
					<>
						<div>
							<h2>
								<ArrowIcon /> Top Posts
							</h2>
							<TopPosts products={data?.products.slice(0, 4)} />
						</div>
						<div>
							<h2>
								<ArrowIcon /> Trending
							</h2>
							<TrendingPosts products={data?.products} count={data?.count} />
						</div>
					</>
				)}
				{error && (
					<div>
						<h1>Something went wrong!</h1>
					</div>
				)}
			</MainPageWrapper>
		</>
	);
};

export default AllPosts;
