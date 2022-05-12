import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = `inventories.json`
        fetch('inventories.json')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, ([]))
    return (
        <div className='mt-5 pt-5'>
            <div className=" card inventory border-0 h-100">
        <img  className=" inventory-image mb-1 mx-auto" alt="..." />
        <div className="card-body p-0">
          <h6 className="card-title p-2 w-100 text-black
          ">
            Book Name: <span></span>
          </h6>
          <p className="card-text"></p>
          <p className="card-text mb-2">
            Price:
            <span className="fw-bold "></span>
          </p>
        </div>
        
      </div>
        </div>
    );
};

export default InventoryDetails;