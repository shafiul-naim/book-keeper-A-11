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
    <div className="container mt-5 pt-5">
      <h2 className="text-primary mb-3">Inventory</h2>
      <h3 className="my-3">Total Items in stock: {inventories.length}</h3>
      <div className=" border-1">
        {inventories.map((inventory) => (
          <div key={inventory._id}>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td className="w-25">
                    <img className="addImg" src={inventory.img} alt="" />
                  </td>
                  <td className="w-25  ">{inventory.name}</td>
                  <td className="w-25">{inventory.price}</td>
                  <td className="w-25">{inventory.supplierName}</td>
                  <td className="w-25"> <button
                      onClick={() => navigateToInventory(inventory._id)}
                      className="bg-info p-1 text-white border-0"
                    >
                      View Details
                    </button></td>
                  <td className="w-25">
                    <button
                      onClick={() => handleDelete(inventory._id)}
                      className="bg-danger p-1 text-white border-0"
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
      <div>
        <button
          onClick={navigateToAddItem}
          className="text-success my-3 p-1 border-1 rounded-pill"
        >
          Add new item
        </button>
      </div>
    </div>
  );
};

export default ManageInventories;
