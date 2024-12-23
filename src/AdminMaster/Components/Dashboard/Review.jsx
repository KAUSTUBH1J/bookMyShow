import react from 'react';

export default function Review(){
    return (
        <>
            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                <div className="card shadow h-100">
                    <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Reviews</h6>
                    </div>
                    <div className="card-body pb-0 p-3">
                    <ul className="list-group">
                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-0">
                        <div className="w-100">
                            <div className="d-flex mb-2">
                            <span className="me-2 text-sm font-weight-bold text-dark">Positive Reviews</span>
                            <span className="ms-auto text-sm font-weight-bold">80%</span>
                            </div>
                            <div>
                            <div className="progress progress-md">
                                <div className="progress-bar bg-primary w-80" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div className="w-100">
                            <div className="d-flex mb-2">
                            <span className="me-2 text-sm font-weight-bold text-dark">Neutral Reviews</span>
                            <span className="ms-auto text-sm font-weight-bold">17%</span>
                            </div>
                            <div>
                            <div className="progress progress-md">
                                <div className="progress-bar bg-primary w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div className="w-100">
                            <div className="d-flex mb-2">
                            <span className="me-2 text-sm font-weight-bold text-dark">Negative Reviews</span>
                            <span className="ms-auto text-sm font-weight-bold">3%</span>
                            </div>
                            <div>
                            <div className="progress progress-md">
                                <div className="progress-bar bg-primary w-5" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="card-footer pt-0 p-3 d-flex align-items-center">
                    <div className="w-60">
                        <p className="text-sm">
                        More than <b>1,500,000</b> developers used Creative Tim's products and over <b>700,000</b> projects were created.
                        </p>
                    </div>
                    <div className="w-40 text-end">
                        <a className="btn btn-dark mb-0 text-end" href="javascript:;">View all reviews</a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}