import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import "./ManageInventories.css";

const ManageInventories = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useInventories();

  const handleDelete = (id) => {
    const proceedDelete = window.confirm("Are your sure want to delete?");
    if (proceedDelete) {
      const url = `http://localhost:5000/inventories/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingData = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(remainingData);
        });
    }
  };

  

  const navigateToAddItem = () => {
    navigate("/additem");
  };
  const navigateToInventory = (id) => {
    navigate(`/inventory/${id}`);
    console.log(id);
  };

  return (
    <div className="container pt-3 ">
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
                      <h5 className="mx-auto fs-2 text-white ">Manage </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <h3 className="my-3 text-center">Total Items in stock: {inventories.length}</h3>
      <div className="w-100 mx-auto">
        {inventories.map((inventory) => (
          <div key={inventory._id}>
            <Table striped bordered hover>
              <tbody>
                <tr className="inventory-table d-flex flex-column flex-md-row w-100 mx-auto">
                  <td className="w-100 text-dark fs-5 text-center">
                    <img className="img " src={inventory.img} alt="" />
                  </td>
                  <td className="w-100 text-dark fs-5 text-center">{inventory.name}</td>
                  <td className="w-100 text-dark fs-5 text-center">{inventory.price}</td>
                  <td className="w-100 text-dark fs-5 text-center">{inventory.supplierName}</td>
                  <td className="w-100 text-dark fs-5 text-center">
                    {" "}
                    <button
                      onClick={() => navigateToInventory(inventory._id)}
                      className="bg-info p-1 text-white border-0"
                    >
                      View Details
                    </button>
                  </td>
                  <td className="w-100 text-center">
                    <button
                      onClick={() => handleDelete(inventory._id)}
                      className="bg-danger p-1 text-white border-0 rounded-pill py-2 px-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
      <div className="text-center ">
        <button
          onClick={navigateToAddItem}
          className="text-white bg-success my-3 px-3 py-2 border-1 rounded-pill "
        >
          Add new item
        </button>
      </div>
    </div>
  );
};

export default ManageInventories;
