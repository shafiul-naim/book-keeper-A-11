import React from "react";
import "./Inventory.css";
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
  const { _id, name, price, description, img, supplierName, Quantity } =
    inventory;
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <>
      <div className=" col-md-4 my-3 d-flex ">
        <img src={img} className=" inventory-image mb-1 mx-auto" alt="..." />
      </div>
      <div className=" col-md-4  my-3 d-flex align-content-center ">
        <div className=" card border-0 h-100">
          <div className="card-body p-0 bg-light">
            <h6
              className="card-title py-2 w-100 text-black
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
            <p className="card-text">Quantity: {Quantity}</p>
          </div>
        </div>
      </div>
      <div className=" col-md-4  my-auto ">
        <div className=" rounded mx-auto text-center">
          <button
            onClick={() => navigateToInventoryDetails(_id)}
            className="btn-update fs-6 text-white rounded px-2 mb-1 h-100 mx-auto "
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Inventory;
