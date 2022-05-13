import React from "react";
import "./Inventory.css";
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
  const { id, name, price, description, img, supplierName, quantity } =
    inventory;
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className=" col ">
      <div className=" card inventory border-0 h-100">
        <img src={img} className=" inventory-image mb-1 mx-auto" alt="..." />
        <div className="card-body p-0">
          <h6
            className="card-title p-2 w-100 text-black
          "
          >
            Book Name: <span>{name}</span>
          </h6>
          <p className="card-text">{description}</p>
          <p className="card-text mb-2">
            Price:
            <span className="fw-bold ">{price}</span>
          </p>
          <p className="card-text">
            Supplier Name: <span className="fw-bolder">{supplierName}</span>
          </p>
          <p className="card-text">Quantity: {quantity}</p>
        </div>
        <div className=" rounded mx-auto text-center w-100">
          <button
            onClick={() => navigateToInventoryDetails(id)}
            className="btn-update fs-6 text-white rounded px-2 mb-1 mx-auto "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
