import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user.email;
    console.log(email);
    const url = `http://localhost:5000/myitems?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceedDelete = window.confirm("Are your sure want to delete?");
    if (proceedDelete) {
      const url = `http://localhost:5000/myitems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingData = myItems.filter((myItem) => myItem._id !== id);
          setMyItems(remainingData);
        });
    }
  };

  const navigateToInventory = (id) => {
    navigate(`/inventory/${id}`);
    console.log(id);
  };

  return (
    <div className="mt-3 pt-3 container">
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
                      <h5 className="mx-auto fs-2 text-white ">My Items </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <h3 className="my-3 text-center">My Items in stock: {myItems.length}</h3>
      <div className="w-100 ">
        {myItems.map((myItem) => (
          <div key={myItem._id}>
            <Table striped bordered hover>
              <tbody>
                <tr className="inventory-table d-flex flex-column flex-md-row w-100 mx-auto">
                  <td className="w-100 ">
                    <img className="img" src={myItem.img} alt="" />
                  </td>
                  <td className="w-100  ">{myItem.name}</td>
                  <td className="w-100">{myItem.price}</td>
                  <td className="w-100">{myItem.supplierName}</td>
                  <td className="w-100">
                    {" "}
                    <button
                      onClick={() => navigateToInventory(myItem._id)}
                      className="bg-info p-1 text-white border-0"
                    >
                      View Details
                    </button>
                  </td>
                  <td className="w-100">
                    <button
                      onClick={() => handleDelete(myItem._id)}
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
    </div>
  );
};

export default MyItems;
