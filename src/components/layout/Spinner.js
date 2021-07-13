import React from 'react'
import SpinnerGif from './spinner.gif'
const Spinner = () => {
    return (
        <div className='container text-center my-2'>
            <img src={SpinnerGif} alt="Loading..." style={{width:"100px"}} />
        </div>
    )
}

export default Spinner
