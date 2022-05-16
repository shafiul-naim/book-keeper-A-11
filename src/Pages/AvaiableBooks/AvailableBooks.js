import React, { useEffect, useState } from "react";
import useInventories from "../../hooks/useInventories";
import Loading from "../Shared/Loading/Loading";
import "./AvailableBooks.css";

const AvailableBooks = () => {
  const [inventories] = useInventories();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (inventories?.length > 0) {
      setLoading(false);
    }
  }, [inventories]);
  
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" pt-3 container">
     <div className="container mb-3 py-5">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="card card-body border-0 shadow ">
                <div className="row">
                  <div className="col">
                    <div
                      className="card card-body "
                      style={{ backgroundColor: "#0f4f3f" , marginBottom:"-50px"}}
                    >
                      <h5 className="mx-auto fs-2 text-white ">All Books </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {inventories.map((inventory) => (
          <div className=" my-3"
            
            key={inventory._id}
          >
            <div className="col  p-2 mx-auto " >
              <img
                src={inventory.img}
                className=" inventory-image mb-1 mx-auto"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title p-1 w-100 text-black" >
                  {inventory.name}
                </h5>
                <p className="card-text" >{inventory.description}</p>
                <p className="card-text">
                  Price:
                  <span className="fw-bold">{inventory.price}</span>
                </p>
                <p className="card-text">
                  Supplier Name:
                  <span className="fw-bolder">{inventory.supplierName}</span>
                </p>
                <p className="card-text">Quantity: {inventory.Quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableBooks;

// {/* <div className=" card  border-0 h-100">
//                 <img
//                   src={inventory.img}
//                   className=" inventory-image mb-1 mx-auto"
//                   alt="..."
//                 />
//                 <div className="card-body p-0">
//                   <h6 className="card-title p-2 w-100 text-black ">
//                     Book Name: <span>{inventory.name}</span>
//                   </h6>
//                   <p className="card-text">{inventory.description}</p>
//                   <p className="card-text mb-2">
//                     Price:
//                     <span className="fw-bold ">{inventory.price}</span>
//                   </p>
//                   <p className="card-text">
//                     Supplier Name:{" "}
//                     <span className="fw-bolder">{inventory.supplierName}</span>
//                   </p>
//                   <p className="card-text">Quantity: {inventory.Quantity}</p>
//                 </div>
//               </div> */}
