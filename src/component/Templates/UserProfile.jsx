import React, { useEffect, useState } from 'react';
import CSSLoader from '../../Function/CssLoader';
import { useSelector, useDispatch } from 'react-redux';
import { CloseProfilePopUp } from '../../Store/Settings/setting';
import axios from '../../Config/axiosConfig';
import {GetUserDetails} from '../../Function/ApiFunction';
import {GetDateAndTime} from '../../Function/CurrentDate';

export default function UserProfile() {

    const [edit, setEdit] = useState(false);
    const {ProfilePopUp} = useSelector((state)=>state.setting);
    const {UserDetails} = useSelector((state)=>state.Login);
    
    const dispatch = useDispatch();
    CSSLoader('/Assets/CSS/UserSide/profile.css');

    const [user, SetUser] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone_number": "",
    });

    const [error, SetError] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone_number": "",
    });

    useEffect(() => {
        if (UserDetails?.user_id) {
            fetchUserDetails();
        }
    }, [UserDetails.user_id]);

    const fetchUserDetails = async () => {
        try {
            const userDetail = await GetUserDetails(UserDetails.user_id); // Await the result
            console.log('Fetched User Detail:', userDetail);
            SetUser(userDetail);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };
    
    const handleEdit = (opertaion)  => {
        if(opertaion === 'edit'){
            setEdit(true);
        }else if(opertaion === 'show'){
            fetchUserDetails();
            setEdit(false);

        }
    }

    const handlechange = (e) =>{
        const value =e.target.value;

        SetUser({
            ...user,
            [e.target.name] : value
        })
    }

    const StyledDiv = {
        'display'         : ProfilePopUp?'block':'none',
        'backgroundColor' : 'rgba(0, 0, 0, 0.5)',
    };

    const validation = () =>{
        const isError = false;

        const error = {
			first_name : '',
			last_name : '',
			email : '',
			phone_number : '',
		};

        if(user.first_name.length < 3){
			isError = true;
			error.first_name = 'First Name must be atleast 3 characters long';
		}
		
        if(user.last_name.length < 3){
			isError = true;
			error.last_name = 'Last Name must be atleast 3 characters long';
		}
		
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if(!emailRegex.test(user.email)){
			isError = true;
			error.email = 'Email is Invalid'
		}

		if(user.phone_number.length < 10 || user.phone_number.length > 15){
			isError = true;
			error.phone_number = 'Mobile number is Invalid.'
		}
        SetError(error);

        return isError;
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const isValidate = validation();
        if(!isValidate){
            try {
                user['password']    = UserDetails.password;
                user['updated_at']  = GetDateAndTime();
                const response = await axios.put(`/api/v1/users/${user.user_id}`,user);
                if(response.status === 201){
                    console.log("successfull");
                }
                console.log(response);
				dispatch(CloseProfilePopUp());
                handleEdit('show');
            } catch (error) {
                console.log('error ');
                console.log(error);

            }
        }
    }

    return (
        <div className="modal fade show p-5" tabIndex="-1" style={StyledDiv}>
            <div className="card mx-auto" style={{"maxWidth": "600px"}}>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="card-header text-center bg-primary text-white profile-image-section">
                        <img src="https://via.placeholder.com/150" alt="Profile Image"  className="rounded-circle img-thumbnail mb-3" style={{'width':'120px', 'height': '120px'}} />
                        <h3 id="user-name" className="mb-0">{UserDetails.first_name}</h3>
                        <p id="user-type" className="mb-0">{UserDetails.last_name}</p>
                        <div className="position-absolute top-0 end-0 p-2 btn-close flex-none cursor-pointer" fdprocessedid="hrxqhl" onClick={()=>{dispatch(CloseProfilePopUp())}} ></div>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Profile Details</h5>
                        <hr/>
                        <div className="row mb-3">
                            <label className="col-sm-4 fw-bold">First Name:</label>
                            <div className="col-sm-8" id="first-name">
                                { edit ? <input type="text" className='form-control'name='first_name' value={user.first_name} onChange={(e)=>handlechange(e)} />:user.first_name}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 fw-bold">Last Name:</label>
                            <div className="col-sm-8" id="last-name">
                                { edit ?  <input type="text" className='form-control' name='last_name' value={user.last_name} onChange={(e)=>handlechange(e)} />:user.last_name}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 fw-bold">Email:</label>
                            <div className="col-sm-8" id="email">
                                { edit ?  <input type="email" className='form-control' name='email' value={user.email} onChange={(e)=>handlechange(e)} />:user.email}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 fw-bold">Phone Number:</label>
                            <div className="col-sm-8" id="phone-number">
                                { edit ?  <input type="number" className='form-control' name='phone_number' value={user.phone_number} onChange={(e)=>handlechange(e)} />:user.phone_number}
                            </div>
                        </div>
                        { !edit ?<div className="row mb-3">
                            <label className="col-sm-4 fw-bold">Account Created:</label>
                            <div className="col-sm-8" id="created-at"> {UserDetails.created_at}</div>
                        </div>:''}
                        { !edit ?<div className="row mb-3">
                            <label className="col-sm-4 fw-bold">Last Updated:</label>
                            <div className="col-sm-8" id="updated-at"> {UserDetails.updated_at}</div>
                        </div>:''}
                    </div>

                    <div className="card-footer text-center">
                        {edit?<><button className="btn btn-primary me-2" type='sumbit'>Submit</button><button className="btn btn-danger me-2" onClick={()=>handleEdit('show') }>close</button></>:<button className="btn btn-primary me-2" onClick={()=>handleEdit('edit') }>Edit Profile</button>}
                        {!edit ?<button className="btn btn-danger">Delete Account</button>:''}
                    </div>
                </form>
                
            </div>

        </div>
    )
}
