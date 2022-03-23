import React from "react";
import classes from "./Footer.module.css";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";

const Footer = () => {
	return (
		<div className={classes.footer}>
			<div className={classes.socialMedias}>
				<div className={classes.iconMediaFacebook}>
					<Facebook />
				</div>
				<div className={classes.iconMediaTwitter}>
					<Twitter />
				</div>
				<div className={classes.iconMediaInstagram}>
					<Instagram />
				</div>
			</div>
			<div className={classes.copyright}>&copy; Copyright Ping. All rights reserved.</div>
		</div>
	);
};

export default Footer;
