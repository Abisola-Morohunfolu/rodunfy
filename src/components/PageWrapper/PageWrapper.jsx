import classes from './PageWrapper.module.css';

// page wrapper for register and login
const PageWrapper = ({ children, submitHandler }) => {
	return (
		<section className={classes.PageWrapper}>
			<img
				src="https://res.cloudinary.com/abisola/image/upload/v1649195053/page_bg_xydy9s.png"
				alt="Pattern"
			/>

			<div className={classes.FormContainer}>
				<form className={classes.Form} onSubmit={submitHandler}>
					{children}
				</form>
			</div>
		</section>
	);
};

export default PageWrapper;
