import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowPopUp,RemovePopUp,SetDetails } from "../../Store/Login/login";
import axios from "../../Config/axiosConfig";
import { useNavigate } from "react-router-dom";

function Registration (){
	
	const [userDetail, setUserDetail] = useState({
		first_name : '',
		last_name : '',
		email : '',
		contact_number : '',
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
	
    return(
		<>
			<div>
			
				{/* Bootstrap Modal */}
				{PopUpReg && (
					<div className="modal fade show" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Sign UP</h5>
									<button	type="button" className="btn-close"	onClick={() => dispatch(RemovePopUp())}></button>
								</div>
								<div className="modal-body">
									<form className="space-y-4" onSubmit={handleLogSubmit}>
										<div className="mb-3">
											<label htmlFor="Fname" className="form-label">
											First Name
											</label>
											<input type="text"	id="Fname" className="form-control" placeholder="First Name" name="first_name" value={userDetail.first_name} onChange={(e)=>{handleChanges}}/>
											<span className="error-msg ">{error.Fname}</span>
										</div>
										<div className="mb-3">
											<label htmlFor="Lname" className="form-label">
											Last Name
											</label>
											<input type="text" id="Lname" className="form-control" placeholder="Last Name" name="last_name" value={userDetail.last_name}  onChange={(e)=>{handleChanges}} />
										</div>
										<div className="mb-3">
											<label htmlFor="Email" className="form-label">
											Email
											</label>
											<input type="email" id="Email" className="form-control" placeholder="Abc@gmail.com" name="email" value={userDetail.email}  onChange={(e)=>{handleChanges}} />
										</div>
										<div className="mb-3">
											<label htmlFor="Pnumber" className="form-label">
											Phone Number
											</label>
											<input type="Number" id="Pnumber" className="form-control" placeholder="987654321" name="phone_number" value={userDetail.phone_number}  onChange={(e)=>{handleChanges}} />
										</div>
										<div className="mb-3">
											<label htmlFor="password" className="form-label">
											Password
											</label>
											<input type="password" id="password" className="form-control" placeholder="password" name="password" value={userDetail.password}  onChange={(e)=>{handleChanges}} />
										</div>
										<div className="mb-3">
											<label htmlFor="cpassword" className="form-label">
											Conform Password
											</label>
											<input type="password" id="cpassword" className="form-control" placeholder="comfirm password" value={password}  onChange={(e)=>{handleChanges}} />
										</div>
										
										<div className="error" style={{color: "red", margin: "10px 0", fontWeight: "bold"}}>
											{error}
										</div>
										<button type="submit" className="btn btn-primary w-100">
											Sign Up
										</button>
									</form>
								</div>
								
								<div className="modal-footer">
									<p className="text-center w-100 mb-0">
										Don't have an account?{" "}
										<btton href="#" className="text-decoration-none">
											Sign In
										</btton>
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

export default Registration;