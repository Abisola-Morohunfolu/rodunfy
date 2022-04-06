import classes from './MainPageWrapper.module.css';

const MainPageWrapper = ({ children }) => {
	return <main className={classes.Main}>{children}</main>;
};

export default MainPageWrapper;
