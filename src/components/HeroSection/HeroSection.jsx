import classes from './HeroSection.module.css';
import { Link } from 'react-router-dom';
import AppStoreIcon from '../../assets/appstore.svg';
import PlayStoreIcon from '../../assets/playstore.svg';

const HeroSection = () => {
	return (
		<header className={classes.HeroSection}>
			<div>
				<h1 className={classes.Heading}>
					Our mission is to <span>advance</span> humanity
				</h1>
				<p className={classes.Paragraph}>
					We would strive to achieve that through providing education and quality health
				</p>
				<div className={classes.DownloadAppBox}>
					<h6>Download app</h6>
					<Link to="#">
						<img src={PlayStoreIcon} alt="Play Store" />
					</Link>
					<Link to="#">
						<img src={AppStoreIcon} alt="App Store" />
					</Link>
				</div>
			</div>
			<div>
				<img
					src="https://res.cloudinary.com/abisola/image/upload/v1649107623/sharath-kumar-hari-Mb2LErousEY-unsplash_1_zhumex.png"
					alt="Rodunfy"
				/>
			</div>
		</header>
	);
};

export default HeroSection;
