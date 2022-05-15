import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories] = useInventories();
  

  const navigate = useNavigate();

  const navigateToManageInventories = () => {
    navigate("/manageInventories");
  };

  return (
    <>
      <div id="inventory" className="container mt-5 ">
        <h2 className="text-center my-5 text-primary ">Book Inventory</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 border-1 ">
          {inventories.slice(0, 6).map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
          
        </div>
        
      </div>
      <div className="mx-auto my-3 text-center">
        <button
          onClick={navigateToManageInventories}
          className="btn-update fs-6 text-white rounded p-2 mb-1  "
        >
          Manage Inventories
        </button>
      </div>
    </>
  );
};

export default Inventories;
