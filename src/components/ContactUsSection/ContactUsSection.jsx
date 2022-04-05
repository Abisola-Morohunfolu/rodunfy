import classes from './ContactUsSection.module.css';
import { ReactComponent as WhatsAppIcon } from '../../assets/whatapp.svg';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';

const ContactUsSection = () => {
	return (
		<section className={classes.ContactUsSection}>
			<div className={classes.ContactUsText}>
				<h2>Contact Us</h2>
				<p>Got any questions, feedback, request and complains? Reach out...</p>
				<div>
					<div className={classes.ContactInfo}>
						<WhatsAppIcon />
						<p>+2348232323892</p>
					</div>
					<div className={classes.ContactInfo}>
						<MailIcon />
						<p>+contact@us.com</p>
					</div>
				</div>
			</div>
			<div>
				<img
					src="https://res.cloudinary.com/abisola/image/upload/v1649193307/undraw_calling_re_mgft_1_bncm5s.png"
					alt="Contact Us"
				/>
			</div>
		</section>
	);
};

export default ContactUsSection;
