import React from 'react'

const LoadingComponent = (props) => {
  return (
    <div className={`col-lg-${props.col_lg} col-12 mt-4 mt-lg-0`}>
      <div className="card shadow h-100">
        <div className="card-body">
          <div className="placeholder-wave">
            <div className="placeholder col-12 mb-4" style={{ height: '20px', width: '50%' }}></div>
            <div className="placeholder col-12 mb-4" style={{ height: '15px', width: '80%' }}></div>
            <div className="placeholder col-12 mb-4" style={{ height: '15px', width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingComponent;