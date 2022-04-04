import classes from './Button.module.css';

const Button = ({ children, styleClass, ...otherProps }) => {
	return (
		<button className={`${classes.Button} ${styleClass ? styleClass : ''}`} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
