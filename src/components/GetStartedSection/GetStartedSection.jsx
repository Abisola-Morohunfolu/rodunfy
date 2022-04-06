import classes from './GetStartedSection.module.css';
import Button from '../Button/Button';

const GetStartedSection = () => {
	return (
		<section className={classes.GetStartedSection}>
			<div className={classes.GetStartedTextBox}>
				<h2>
					Everything you’ll need to <span>excel</span> in life
				</h2>
				<p>We’ve curated a list of valuable resources to get you going in life, all for free!</p>
				<Button styleClass={classes.GetStartedButton}>Get Started</Button>
			</div>
			<div>
				<img
					src="https://res.cloudinary.com/abisola/image/upload/v1649108137/rasheed-kemy-oqY09oVTa3k-unsplash_1_o5tall.png"
					alt="Get Started"
					className={classes.GetStartedImage}
				/>
			</div>
		</section>
	);
};

export default GetStartedSection;
