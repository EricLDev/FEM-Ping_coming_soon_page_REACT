import React from "react";
import classes from "./Dashboard.module.css";
import dashboard from "../images/illustration-dashboard.png";

const Dashboard = () => {
	return (
		<div className={classes.dashboard}>
			<img src={dashboard} alt="" />
		</div>
	);
};

export default Dashboard;
