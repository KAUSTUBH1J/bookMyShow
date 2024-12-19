import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowPopUp,RemovePopUp,SetRole } from "../../Store/Login/login";
import axios from "../../Config/axiosConfig";



function Login (){
	
	const dispatch = useDispatch();
	const {PopUp} = useSelector((state)=>state.Login);
	
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [apiError, setApiError] = useState('');
	const [error, setError] = useState({
		userName: '',
		password: ''
	});


	const handleLogSubmit = async (e) => {
		e.preventDefault();
		if(!userName || !password){
			console.log('error');
		}else{
			
			try {
				const formData = new URLSearchParams();
                formData.append("username", userName);
                formData.append("password", password);

                const response = await axios.post('api/v1/users/token/', formData.toString());
                console.log('Login successful:', response);
				

                // Save JWT token to localStorage
				localStorage.setItem('jwtToken', `${response.data.token_type} ${response.data.access_token}`);
				
				const encodedData = btoa(JSON.stringify({ user_id: response.data.user.user_id, role: response.data.user.user_type }));
				localStorage.setItem('encodedData', encodedData);
				
                
            } catch (error) {
                if (error.response && error.response.data) {
                    setApiError(error.response.data.message || "An error occurred during login.");
                } else {
                    setApiError("An unexpected error occurred. Please try again later.");
                }
				localStorage.setItem('is_login', false);  
            } finally {
                // setIsSubmitting(false);
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
											<input type="text"	id="username" className="form-control" placeholder="Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
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