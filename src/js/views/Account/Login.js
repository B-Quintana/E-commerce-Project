import React from "react";
import "./login.css";

export const Login = () => {
	return (
		<form className="container form">
			<div className="form-group">
				<label hmtlfor="exampleInputEmail1">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
				<small id="emailHelp" className="form-text text-muted">
					We will never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<label hmtlfor="exampleInputPassword1">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
				/>
			</div>
			<div className="form-group form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="exampleCheck1"
				/>
				<label className="form-check-label" hmtlfor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
