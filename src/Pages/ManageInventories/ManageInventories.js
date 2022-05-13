import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useInventories from "../../hooks/useInventories";

const ManageInventories = () => {
  const [inventories] = useInventories();

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
                    <button className="bg-danger p-1 text-white border-0">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
