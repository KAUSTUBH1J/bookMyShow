import React, { useState } from 'react';
import CSSLoader from '../../Function/CssLoader';
import { useSelector, useDispatch } from 'react-redux';
import { CloseProfilePopUp } from '../../Store/Setting/Setting';

export default function UserProfile() {
    const [profile, setProfile] = useState(true);
    const {ProfilePopUp} = useSelector((state)=>state.Settings);
    const dispatch = useDispatch();
    CSSLoader('/Assets/CSS/UserSide/profile.css');
    
    const StyledDiv = {
        'display'         : ProfilePopUp?'block':'none',
        'backgroundColor' : 'rgba(0, 0, 0, 0.5)',
    };

    return (
        <div className="modal fade show" tabIndex="-1" style={StyledDiv}>
            <div className="card mx-auto" style={{"maxWidth": "600px"}}>

                <div className="card-header text-center bg-primary text-white profile-image-section">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Profile Image" 
                        className="rounded-circle img-thumbnail mb-3" 
                        style={{'width':'120px', 'height': '120px'}}
                    />
                    <h3 id="user-name" className="mb-0">John Doe</h3>
                    <p id="user-type" className="mb-0">Admin</p>
                    <div className="position-absolute top-0 end-0 p-2" onClick={()=>{dispatch(CloseProfilePopUp())}} >X</div>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Profile Details</h5>
                    <div className="row mb-3">
                        <label className="col-sm-4 fw-bold">First Name:</label>
                        <div className="col-sm-8" id="first-name">John</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 fw-bold">Last Name:</label>
                        <div className="col-sm-8" id="last-name">Doe</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 fw-bold">Email:</label>
                        <div className="col-sm-8" id="email">johndoe@example.com</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 fw-bold">Phone Number:</label>
                        <div className="col-sm-8" id="phone-number">123-456-7890</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 fw-bold">Account Created:</label>
                        <div className="col-sm-8" id="created-at">2024-12-23 08:10:55</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 fw-bold">Last Updated:</label>
                        <div className="col-sm-8" id="updated-at">2024-12-23 08:10:55</div>
                    </div>
                </div>

                <div className="card-footer text-center">
                    <button className="btn btn-primary me-2">Edit Profile</button>
                    <button className="btn btn-danger">Delete Account</button>
                </div>
            </div>

        </div>
    )
}
