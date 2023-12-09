import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';
import axios from 'axios';
import { useHistory } from "react-router-dom";

// image
import logo from "../../images/freshment.png";
import loginbg from "../../images/lg_page_main_photo.png";



function Login (props) {
	let history = useHistory();
	//const [college_email, setEmail] = useState('demo@example.com');
	//const [college_password, setPassword] = useState('123456');
	const [college_email, setEmail] = useState('');
	const [college_password, setPassword] = useState('');
    let errorsObj = { college_email: '', college_password: '' };
    const [errors, setErrors] = useState(errorsObj);
	const dispatch = useDispatch();

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleApi = (e) => {
		e.preventDefault();
		let error = false;
        const errorObj = { ...errorsObj };
        if (college_email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (college_password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ;
		}
		dispatch(loadingToggleAction(true));	
        dispatch(loginAction(college_email, college_password, props.history));
	}

	// const handleApi = (e) => {
	// 	e.preventDefault();
	// 	fetch ('https:freshmentmodules.governmentjobsforgraduates.com/api/freshment_portal_apis/College/login', {
	// 		method: "POST",
 	// 		headers:{ 'Content-Type': 'application/x-www-form-urlencoded'},
	// 		body: new URLSearchParams({
	// 	 	'college_email': college_email,
	// 	 	'college_password': college_password
	//  		}),
	//   })
	// 	.then((response) => response.json())
	// 	.then((result) => {
	// 	  if(result.message === "SUCCESS"){
	// 		alert("You are logged in.");
	// 		// this.goToMain();
	// 	   } else {
	// 		   alert("Please check your login information.");
	// 	   }
	// 	});
	//   }

    function onLogin(e) {
		e.preventDefault();
		console.log("called in login");
		let error = false;
		const errorObj = { ...errorsObj };
		if (college_email === "") {
		  errorObj.email = "Email is Required";
		  error = true;
		}
		if (college_password === "") {
		  errorObj.password = "Password is Required";
		  error = true;
		}
		setErrors(errorObj);
		if (error) {
		  return;
		}
		dispatch(loadingToggleAction(true));
		dispatch(loginAction(college_email, college_password, props.history));
	  }

  return (
		<div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
			<div className="login-aside text-center  d-flex flex-column flex-row-auto">
				<div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
					<div className="text-center mb-4 pt-5">
						<img src={logo} alt="" />
					</div>
					<h3 className="mb-2">Welcome back!</h3>
					<p>We help you find jobs in multiple segment, exams, <br /> daily current affairs & analyse previous exams<br/>history</p>
				</div>
				<div className="aside-image" style={{backgroundImage:"url(" + loginbg + ")"}}></div>
			</div>
			<div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
				<div className="d-flex justify-content-center h-100 align-items-center">
					<div className="authincation-content style-2">
						<div className="row no-gutters">
							<div className="col-xl-12 tab-content">
								<div id="sign-in" className="auth-form   form-validation">
									{props.errorMessage && (
										<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
											{props.errorMessage}
										</div>
									)}
									{props.successMessage && (
										<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
											{props.successMessage}
										</div>
									)}
									<form onSubmit={onLogin}  className="form-validate">
										<h3 className="text-center mb-4 text-black">Sign in your account</h3>
										<div className="form-group mb-3">
											<label className="mb-1"  htmlFor="val-email"><strong>Email</strong></label>
											<div>
												<input type="email" className="form-control"
													value={college_email}
												   onChange={handleEmail}
												   placeholder="Type Your Email Address"
												/> 
											</div>
											{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
										</div>
										<div className="form-group mb-3">
											<label className="mb-1"><strong>Password</strong></label>
											<input
											  type="password"
											  className="form-control"
											  value={college_password}
											  placeholder="Type Your Password"
												onChange={handlePassword}
											/>
											{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
										</div>
										<div className="form-row d-flex justify-content-between mt-4 mb-2">
											<div className="form-group mb-3">
											   <div className="custom-control custom-checkbox ml-1">
													<input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
													<label className="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
												</div>
											</div>
										</div>
										<div className="text-center form-group mb-3">
											<button onClick={handleApi} type="submit" className="btn btn-primary btn-block" >
												Sign In
											</button>
										</div>
									</form>
									<div className="new-account mt-3">
										<p>Forgot Password??<Link className="text-primary" to="./page-forgot-password">   Click Here</Link></p>
										{/* <p>Forgot Password??<Link className="text-primary" to="./two-factor-auth">   Click Here</Link></p> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
  );
};

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);