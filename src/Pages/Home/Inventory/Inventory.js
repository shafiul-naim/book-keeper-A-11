import React from "react";
import './Inventory.css'
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
  const { id, name, price, description, img } = inventory;
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className=" col ">
      <div className="inventory card h-100">
        <img src={img} className="card-img-top inventory-image mb-1 mx-auto" alt="..." />
        <div className="card-body p-0">
          <h6 className="card-title p-2 w-100 text-black
          ">
            Book Name: <span>{name}</span>
          </h6>
          <p className="card-text">{description}</p>
          <p className="card-text">
            Price:
            <span className="fw-bold">{price}</span>
          </p>
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
