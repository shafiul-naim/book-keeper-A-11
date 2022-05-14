import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    const url = `http://localhost:5000/inventories/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [update]);
  
  

  const handleUpdate = () => {
    const quantity = inventory.Quantity;
    const updatedQuantity = parseInt(quantity) - 1;

    const url = `http://localhost:5000/inventories/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdate(!update)
        alert("updated successfully");
      });
  };

  return (
    <div className="container mt-5 pt-5">
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
      </div>
      <button onClick={handleUpdate} className="mx-auto text-info my-3">
        Delivered
      </button>
    </div>
  );
};

export default InventoryDetails;
