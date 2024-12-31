import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {removeMoviePopUp } from '../../Store/Movie/movie'

export default function MoviePopUp(props) {
    const dispatch = useDispatch();
    // const movie = Object.keys(useSelector((state) => state.Movie.MoviePopUp)).length == 0 ?   false : true;
    const movie = 0;
    
    const handlecolse = () =>{
        dispatch()
    }

    return (
        <div>
            {movie?  (
                <div className="modal fade show" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Avengers</h5>
                                <button	type="button" className="btn-close"	></button>
                            </div>
                            <div className="modal-body p-0 d-flex">
                                <div>
                                    <img src="https://via.placeholder.com/200x300?text=Avengers" alt="" />
                                </div>
                                <div className='p-2'>
                                    <p>The Avengers. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City. Since then, the team has expanded its roster and faced a host of new threats, while dealing with their own turmoil.</p>
                                    <span><b>Type</b>: Actions, Drama</span><br/>
                                    <span><b>Language</b>: Hindi, English, Tamil</span><br/>
                                    <span><b>Duration</b>: 2h 45m</span><br/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className='btn btn-secondary'>Get more details</button>
                                <button className='btn btn-danger'>Book My Show</button>
                            </div>
                        </div>
                    </div>
                </div>
            ):""}
        </div>
    )
}
