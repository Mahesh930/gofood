import React from 'react'

const LodingSpinner = () => {
    return (
        <div className='flex items-center justify-center gap-4 '>

            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>

            {/* <div className="skeleton h-screen w-screen "></div> */}
        </div>
    )
}

export default LodingSpinner
