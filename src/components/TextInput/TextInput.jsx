import classes from './TextInput.module.css';

const TextInput = ({ placeholder, ...otherProps }) => {
	return <input placeholder={placeholder} {...otherProps} className={classes.TextInput} />;
};

export default TextInput;
