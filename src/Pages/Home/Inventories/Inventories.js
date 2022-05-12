import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, ([]))
    return (
        <div id="inventory" className="container mt-5 ">
        <h2 className="text-center my-5 text-primary ">Book Inventory</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 border-1">
      {inventories.map((inventory) => (
        <Inventory key={inventory.id} inventory={inventory}></Inventory>
      ))}
      </div>
    </div>
    );
};

export default Inventories;