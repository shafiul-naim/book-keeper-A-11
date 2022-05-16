import React from 'react';
import error from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='mt-5 pt-5 container d-flex flex-column align-items-center'>
            <h2 className='text-danger '>There is no inventory to CREATE READ UPDATE DELETE (CRUD)</h2>
        <img  className='img-fluid w-25 h-25' src={error} alt="" />
        </div>
    );
};

export default NotFound;