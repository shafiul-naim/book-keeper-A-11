import React from 'react';
import { useParams } from 'react-router-dom';

const ManageInventories = () => {
    const {inventories} = useParams();
    console.log(inventories)
    return (
        <div className='mt-5 pt-5'>
            <h2>Inventory</h2>
        </div>
    );
};

export default ManageInventories;