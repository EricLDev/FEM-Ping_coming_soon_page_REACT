import React from "react";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<div className={classes.header}>
			<p>
				PING<span>.</span>
			</p>
			<p>
				We are launching
				<span> soon!</span>
			</p>
			<p> Subscribe and get notified</p>
		</div>
	);
};

export default Header;
