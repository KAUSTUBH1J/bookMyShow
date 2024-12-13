import React,{useState} from "react";

function Login (){
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => setShowModal(!showModal);
  
    return(
		<>
			<div>
				{/* Trigger Button */}
				<button	type="button" className="btn btn-primary" onClick={toggleModal}	>
					Open Login
				</button>

				{/* Bootstrap Modal */}
				{showModal && (
					<div className="modal fade show" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Login</h5>
							<button	type="button" className="btn-close"	onClick={toggleModal}></button>
						</div>
						<div className="modal-body">
							<form className="space-y-4">
								<div className="mb-3">
									<label htmlFor="username" className="form-label">
									Username
									</label>
									<input type="text"	id="username" className="form-control" placeholder="Username"/>
								</div>
								<div className="mb-3">
									<label htmlFor="password" className="form-label">
									Password
									</label>
									<input type="password" id="password" className="form-control" placeholder="Password" />
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