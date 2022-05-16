import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../../hooks/useInventories";
import Loading from "../../Shared/Loading/Loading";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories] = useInventories();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (inventories?.length > 0) {
      setLoading(false);
    }
  }, [inventories]);

  if (loading) {
    return <Loading></Loading>;
  }

  const navigateToManageInventories = () => {
    navigate("/manageInventories");
  };

  return (
    <>
      <div id="inventory" className="container mt-5 ">
        <div className="container mt-5 py-5">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="card card-body border-0 shadow ">
                <div className="row">
                  <div className="col">
                    <div
                      className="card card-body "
                      style={{ backgroundColor: "#0f4f3f" , marginBottom:"-50px"}}
                    >
                      <h5 className="mx-auto fs-2 text-white ">Inventory</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 border-1 mx-auto bg-light mt-3">
          {inventories.slice(0, 6).map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </div>
      </div>
      <div className=" container mx-auto mb-3 text-center bg-light">
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
