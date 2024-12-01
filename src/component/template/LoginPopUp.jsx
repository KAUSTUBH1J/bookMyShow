import React,{useState} from "react";

function Login (){
	
    return(
        <>
		<div className=" position-absolute top-50 start-50 translate-middle rounded-3 shadow-lg w-100" style={{'height': '100%','background': '#0000007a', 'zIndex':'1031'}}>
			<button className="position-absolute top-10 end-0 m-5">x</button>
			<div className="container position-absolute top-50 start-50 translate-middle bg-light p-4 rounded-3 shadow-lg w-50">
				<h3 className="text-center text-primary mb-4">Login</h3>
				<form>
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control border-primary"
							id="floatingInput"
							placeholder="name@example.com"
							required
							data-bs-toggle="tooltip"
							data-bs-placement="right"
							title="Enter your email address"
						/>
						<label for="floatingInput" className="text-secondary">Email address</label>
						<div className="invalid-feedback">
							Please provide a valid email.
						</div>
					</div>

					<div className="form-floating mb-3">
						<input
							type="password"
							className="form-control border-primary"
							id="floatingPassword"
							placeholder="Password"
							required
							data-bs-toggle="tooltip"
							data-bs-placement="right"
							title="Enter your password"
						/>
						<label for="floatingPassword" className="text-secondary">Password</label>
						<div className="invalid-feedback">
							Please provide a password.
						</div>
					</div>

					<div className="mb-3 form-check">
						<input type="checkbox" className="form-check-input border-primary" id="exampleCheck1" />
						<label className="form-check-label text-secondary" for="exampleCheck1">
							Remember me
						</label>
					</div>

					<button type="submit" className="btn btn-primary w-100">
						Submit
					</button>
				</form>
			</div>
		</div>
        </>
    )
}

export default Login;