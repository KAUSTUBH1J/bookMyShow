import React, { useState } from 'react';
import CSSLoader from '../../Function/CssLoader';

export default function UserProfile() {
    const [profile, setProfile] = useState(true);

    CSSLoader('/Assets/CSS/UserSide/profile.css');

    const StyledDiv = {
        'display'         : profile?'block':'none',
        'backgroundColor' : 'rgba(0, 0, 0, 0.5)',
    };

    return (
        <div className="modal fade show" tabIndex="-1" style={StyledDiv}>
            <div class="card mx-auto" style={{"max-width": "600px"}}>

                <div class="card-header text-center bg-primary text-white profile-image-section">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Profile Image" 
                        class="rounded-circle img-thumbnail mb-3" 
                        style={{'width':'120px', 'height': '120px'}}
                    />
                    <h3 id="user-name" class="mb-0">John Doe</h3>
                    <p id="user-type" class="mb-0">Admin</p>
                    <div class="position-absolute top-0 end-0 p-2" onClick={()=>{setProfile(false)}} >X</div>
                </div>

                <div class="card-body">
                    <h5 class="card-title">Profile Details</h5>
                    <div class="row mb-3">
                        <label class="col-sm-4 fw-bold">First Name:</label>
                        <div class="col-sm-8" id="first-name">John</div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 fw-bold">Last Name:</label>
                        <div class="col-sm-8" id="last-name">Doe</div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 fw-bold">Email:</label>
                        <div class="col-sm-8" id="email">johndoe@example.com</div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 fw-bold">Phone Number:</label>
                        <div class="col-sm-8" id="phone-number">123-456-7890</div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 fw-bold">Account Created:</label>
                        <div class="col-sm-8" id="created-at">2024-12-23 08:10:55</div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 fw-bold">Last Updated:</label>
                        <div class="col-sm-8" id="updated-at">2024-12-23 08:10:55</div>
                    </div>
                </div>

                <div class="card-footer text-center">
                    <button class="btn btn-primary me-2">Edit Profile</button>
                    <button class="btn btn-danger">Delete Account</button>
                </div>
            </div>

        </div>
    )
}
