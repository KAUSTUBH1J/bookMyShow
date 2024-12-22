import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowPopUp,RemovePopUp,SetDetails } from "../../Store/Login/login";
import axios from "../../Config/axiosConfig";
import { useNavigate } from "react-router-dom";

function Login (){
	
	const dispatch = useDispatch();
	const {PopUp} = useSelector((state)=>state.Login);
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	
	useEffect(() => {
		setError('');
	} ,[userName,password]);

	const handleLogSubmit = async (e) => {
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
				dispatch(RemovePopUp());
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
									<h5 className="modal-title">Login</h5>
									<button	type="button" className="btn-close"	onClick={() => dispatch(RemovePopUp())}></button>
								</div>
								<div className="modal-body">
									<form className="space-y-4" onSubmit={handleLogSubmit}>
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
								</div>
								
								<div className="modal-footer">
									<p className="text-center w-100 mb-0">
										Don't have an account?{" "}
										<a href="#" className="text-decoration-none">
											Sign up
										</a>
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