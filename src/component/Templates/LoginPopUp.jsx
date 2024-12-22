import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowPopUp,RemovePopUp,SetDetails,SetFormSignIn,SetFormSignUp } from "../../Store/Login/login";
import axios from "../../Config/axiosConfig";
import { useNavigate } from "react-router-dom";
import CSSLoader from "../../Function/CssLoader";

function Login (){
	CSSLoader('Assets/CSS/UserSide/main.css');

	const dispatch = useDispatch();
	const {PopUp ,Form} = useSelector((state)=>state.Login);
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	

	// Registration
	const [userDetail, setUserDetail] = useState({
		first_name : '',
		last_name : '',
		email : '',
		phone_number : '',
		password : '',
		cpassword : ''
	});

	const [Rerror, setRError] = useState({
		first_name : '',
		last_name : '',
		email : '',
		phone_number : '',
		password : '',
		cpassword : ''
	});

	const handleChanges = (e) => {
		let value = e.target.value;

		setUserDetail({
			...userDetail,
			[e.target.name] : value	
		});
	}

	const validate = () => {
		let isError = false;

		const error = {
			first_name : '',
			last_name : '',
			email : '',
			phone_number : '',
			password : '',
			cpassword : ''
		};

		if(userDetail.first_name.length < 3){
			isError = true;
			error.first_name = 'First Name must be atleast 3 characters long';
		}
		if(userDetail.last_name.length < 3){
			isError = true;
			error.last_name = 'Last Name must be atleast 3 characters long';
		}
		
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if(!emailRegex.test(userDetail.email)){
			isError = true;
			error.email = 'Email is Invalid'
		}

		if(userDetail.phone_number.length < 10 || userDetail.phone_number.length > 15){
			isError = true;
			error.phone_number = 'Mobile number is Invalid.'
		}

		if(userDetail.password.length < 5){
			isError = true;
			error.password = 'password must be atleadt 5 characters long';
		}

		if(userDetail.password !== userDetail.cpassword){
			isError = true;
			error.cpassword = 'Password is not match';
		}
		setRError(error);
		return isError;
	};

	const handleSignUpSummit = async (e) =>{
		e.preventDefault();
		const ValidationCheck = validate();
		if(!ValidationCheck){
			try{
				const formData = new URLSearchParams();

                Object.entries(userDetail).forEach(([key, value]) => {
					if(key !== 'cpassword')
					formData.append(key, value);
				});
				formData.append("first_name", userName);
                formData.append("last_name", password);
				formData.append("email", userName);
                formData.append("phone_number", password);
				



				const response = await axios.post('/api/v1/users/',formData);
				console.log('SignUp successful:', response);
			}catch (error){
				console.warn('failed: ', error);
			}finally {
				// dispatch(RemovePopUp());
            }
		}
	}

		


	useEffect(() => {
		setError('');
	} ,[userName,password]);

	const handleSignINSubmit = async (e) => {
		e.preventDefault();
		if(!userName || !password){
			setError('Please fill all the fields');
		}else{
			
			try {
				const formData = new URLSearchParams();
                formData.append("username", userName);
                formData.append("password", password);

                const response = await axios.post('api/v1/users/token/', formData.toString());
                console.log('Login successful:', response);
				

                // Save JWT token to localStorage
				localStorage.setItem('jwtToken', `${response.data.token_type} ${response.data.access_token}`);
				
				const encodedData = btoa(JSON.stringify( response.data.user));
				localStorage.setItem('encodedData', encodedData);
				dispatch(SetDetails(response.data.user));
                dispatch(RemovePopUp());
            } catch (error) {
                if (error.response && error.response.data) {
                    setError(error.response.data.detail || "An error occurred during login.");
                } else {
                    setError("An unexpected error occurred. Please try again later.");
                }
				console.warn('Login failed:', error);
				localStorage.setItem('is_login', false);  
            } finally {
				// Reset the form
				setUserName('');
				setPassword('');
				// 
            }
			
		}
	}

    return(
		<>
			<div>
				{/* Trigger Button */}
				<button	type="button" className="btn btn-primary" onClick={()=>{dispatch(ShowPopUp())}}	>
					Login
				</button>

				{/* Bootstrap Modal */}
				{PopUp && (
					<div className="modal fade show" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">
										{Form === 'Signin'? 'Sign In' : 'Sign Up'}
									</h5>
									<button	type="button" className="btn-close"	onClick={() => dispatch(RemovePopUp())}></button>
								</div>
								<div className="modal-body">
									{Form === 'Signin'? <form className="space-y-4" onSubmit={handleSignINSubmit}>
										<div className="mb-3">
											<label htmlFor="username" className="form-label">
											Username
											</label>
											<input type="text"	id="username" className="form-control" placeholder="Username" value={userName} onChange={(e)=>{setUserName(e.target.value) }}/>
											<span className="error-msg ">{error.userName}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="password" className="form-label">
											Password
											</label>
											<input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
										</div>
										<div className="d-flex justify-content-between">
											<a href="#" className="text-decoration-none">
											Forgot Password?
											</a>
										</div>
										<div className="error" style={{color: "red", margin: "10px 0", fontWeight: "bold"}}>
											{error}
										</div>
										<button type="submit" className="btn btn-primary w-100">
											Sign in
										</button>
									</form>
									:
									<form className="space-y-4" onSubmit={handleSignUpSummit}>
										<div className="mb-3">
											<label htmlFor="Fname" className="form-label">
											First Name
											</label>
											<input type="text"	id="Fname" className="form-control" placeholder="First Name" name="first_name" value={userDetail.first_name} onChange={(e)=>{handleChanges(e)}}/>
											<span className="error">{Rerror.first_name}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="Lname" className="form-label">
											Last Name
											</label>
											<input type="text" id="Lname" className="form-control" placeholder="Last Name" name="last_name" value={userDetail.last_name}  onChange={(e)=>{handleChanges(e)}} />
											<span className="error">{Rerror.last_name}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="Email" className="form-label">
											Email
											</label>
											<input type="email" id="Email" className="form-control" placeholder="Abc@gmail.com" name="email" value={userDetail.email}  onChange={(e)=>{handleChanges(e)}} />
											<span className="error">{Rerror.email}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="Pnumber" className="form-label">
											Phone Number
											</label>
											<input type="Number" id="Pnumber" className="form-control" placeholder="987654321" name="phone_number" value={userDetail.phone_number}  onChange={(e)=>{handleChanges(e)}} />
											<span className="error">{Rerror.phone_number}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="password" className="form-label">
											Password
											</label>
											<input type="password" id="password" className="form-control" placeholder="password" name="password" value={userDetail.password}  onChange={(e)=>{handleChanges(e)}} />
											<span className="error">{Rerror.password}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="cpassword" className="form-label">
											Conform Password
											</label>
											<input type="password" id="cpassword" className="form-control" placeholder="comfirm password" name="cpassword" value={userDetail.cpassword}  onChange={(e)=>{handleChanges(e)}} />
											<span className="error">{Rerror.cpassword}</span>
										</div>
										
										<div className="error" style={{color: "red", margin: "10px 0", fontWeight: "bold"}}>
											{error}
										</div>
										<button type="submit" className="btn btn-primary w-100">
											Sign Up
										</button>
									</form>}
								</div>
								
								<div className="modal-footer">
									<p className="text-center w-100 mb-0">
										Don't have an account?{" "}
										{Form === 'Signin'?
										<button onClick={()=>{ dispatch(SetFormSignUp())}} className="text-decoration-none">
											Sign up
											</button>:
										<button onClick={()=>{ dispatch(SetFormSignIn())}} className="text-decoration-none">
											Sign In
										</button>}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
    )
}

export default Login;