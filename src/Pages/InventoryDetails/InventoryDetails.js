import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState([]);
  const [update, setUpdate] = useState(true);
  const navigate = useNavigate();

  const navigateToManageInventories = () => {
    navigate("/manageInventories");
  };

  useEffect(() => {
    const url = `http://localhost:5000/inventories/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [update, inventoryId]);

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
        setUpdate(!update);
        alert("Delivered successfully");
      });
  };
  const handleRestock = (event) => {
    event.preventDefault();
    const availableQuantity = inventory.Quantity;
    const restockQuantity = parseInt(event.target.number.value);
    const updatedQuantity = parseInt(availableQuantity + restockQuantity);
    console.log(restockQuantity);
    console.log(updatedQuantity);

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
        setUpdate(!update);
        alert("Restocked successfully");
        console.log("success", data);
        event.target.reset();
      });
  };

  return (
    <div className="container mt-5 pt-5">
      <div className=" card inventory border-0 h-100 w-75 mx-auto">
        <img
          src={inventory.img}
          className=" inventory-image mb-1 mx-auto"
          alt="..."
        />
        <div className="card-body p-0 text-center w-100 mx-auto">
          <h6
            className="card-title p-2 w-100 text-black
          "
          >
            Book Name: <span>{inventory.name}</span>
          </h6>
          <p className="card-text w-75 mx-auto">{inventory.description}</p>
          <p className="card-text mb-2">
            Price:
            <span className="fw-bold ">{inventory.price}</span>
          </p>
          <p className="card-text">
            Supplier Name:{" "}
            <span className="fw-bolder">{inventory.supplierName}</span>
          </p>
          <p className="card-text">Quantity: {inventory.Quantity}</p>
          <p className="card-text">Sold: {inventory.sold}</p>
          <button
            onClick={handleUpdate}
            className="bg-danger text-white rounded my-3 w-25"
          >
            Delivered
          </button>
        </div>
      </div>

      <div className="my-4 w-75 mx-auto text-center">
        <form onSubmit={handleRestock}>
          <input
            type="number"
            name="number"
            placeholder="Restock the item"
            required
          />
          <input type="submit" value="Restock" className="ms-2 text-success" />
        </form>
        <button
          onClick={navigateToManageInventories}
          className="btn-update fs-6 text-white rounded p-1 my-3  "
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default InventoryDetails;
