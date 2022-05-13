import React, { useEffect, useState } from "react";

const ManageInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-primary mb-3">Inventory</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 border-1">
        {inventories.map((inventory) => (
          <div key={inventory._id}>
            <div className=" col ">
              <div className=" card inventory border-0 h-100">
                <img
                  src={inventory.img}
                  className=" inventory-image mb-1 mx-auto"
                  alt="..."
                />
                <div className="card-body p-0">
                  <h6
                    className="card-title p-2 w-100 text-black
          "
                  >
                    Book Name: <span>{inventory.name}</span>
                  </h6>
                  <p className="card-text">{inventory.description}</p>
                  <p className="card-text mb-2">
                    Price:
                    <span className="fw-bold ">{inventory.price}</span>
                  </p>
                  <p className="card-text">
                    Supplier Name:{" "}
                    <span className="fw-bolder">{inventory.supplierName}</span>
                  </p>
                  <p className="card-text">Quantity: {inventory.Quantity}</p>
                </div>
                <div className=" rounded mx-auto text-center w-100">
                  <button
                    
                    className="btn-update fs-6 text-danger bg-white border rounded px-2 mb-1 mx-auto "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
