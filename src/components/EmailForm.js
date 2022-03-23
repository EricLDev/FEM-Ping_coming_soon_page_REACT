import React, { useState } from "react";
import classes from "./EmailForm.module.css";

const EmailForm = () => {
	const [email, setEmail] = useState("");
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState("");

	const onChangeHandler = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

		if (!emailRegex.test(email) || !email) {
			setIsValid(false);
			setMessage("Please provide a valid email address");
		} else {
			setIsValid(true);
			setMessage("The entered email is valid");
		}
	};

	return (
		<form className={classes.emailForm} onSubmit={onSubmitHandler}>
			<input className={`${!isValid ? classes.outlineError : ""}`} type="text" placeholder="Your email address..." onChange={onChangeHandler} />
			<div className={`${classes.message} ${isValid ? classes.success : classes.error}`}>{message}</div>
			<button>Notify Me</button>
		</form>
	);
};

export default EmailForm;
