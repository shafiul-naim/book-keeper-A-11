import React from "react";
import { Table } from "react-bootstrap";
import useInventories from "../../hooks/useInventories";

const ManageInventories = () => {
  const [inventories, setInventories] = useInventories();

  const handleDelete = (id) => {
const proceedDelete = window.confirm("Are your sure want to delete?")
if(proceedDelete){
    const url = `http://localhost:5000/inventories/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const remainingData = inventories.filter(inventory => inventory._id !== id);
        setInventories(remainingData)
    });
}
  }

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-primary mb-3">Inventory</h2>
      <div className=" border-1">
        {inventories.map((inventory) => (
          <div key={inventory._id}>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td className="w-25">{inventory.name}</td>
                  <td className="w-25">{inventory.price}</td>
                  <td className="w-25">{inventory.supplierName}</td>
                  <td className="w-25">
                    <button onClick={() => handleDelete(inventory._id)} className="bg-danger p-1 text-white border-0">
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
          <button className="text-success my-3 p-1 border-0">Add new item</button>
      </div>
    </div>
  );
};

export default ManageInventories;
