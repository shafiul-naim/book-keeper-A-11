import React from 'react';
import error from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='mt-5 pt-5'>
            <h2 className='text-primary text-center'>Sorry page not found</h2>
        <img  className='img-fluid' src={error} alt="" />
        </div>
    );
};

export default NotFound;