import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  const navigateToManageInventories = () => {
    navigate("/manageInventories");
  };

  return (
    <>
      <div id="inventory" className="container mt-5 ">
        <h2 className="text-center my-5 text-primary ">Book Inventory</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 border-1">
          {inventories.map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </div>
      </div>
      <div className="mx-auto my-3">
        <button
          onClick={ navigateToManageInventories}
          className="btn-update fs-6 text-white rounded px-2 mb-1 mx-auto "
        >
          Manage Inventories
        </button>
      </div>
    </>
  );
};

export default Inventories;
