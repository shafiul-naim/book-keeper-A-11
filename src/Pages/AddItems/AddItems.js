import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  console.log(user)
 
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://young-river-68187.herokuapp.com/inventories`;
    fetch(url , {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result)
    })
    alert("Item added successfully. Check manage inventories")
  };
  return (
    <div className=" pt-3 container w-100">
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
                      <h5 className="mx-auto fs-2 text-white ">Add Item </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <form
        className="d-flex flex-column mb-3 w-75 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          
          className="mb-3 rounded-pill p-2 border-0"
          value={user?.email}
          
          {...register("email")}
        />
        <input
          placeholder="Book Name"
          className="mb-3 rounded-pill p-2 border-0"
          required
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Description"
          className="mb-3 rounded-pill p-2 border-0"
          required
          {...register("description")}
        />
        <input
          placeholder="Price"
          className="mb-3 rounded-pill p-2 border-0"
          required
          type="number"
          {...register("price")}
        />
        <input
          placeholder="Sold"
          className="mb-3 rounded-pill p-2 border-0"
          type="number"
          required
          {...register("sold")}
        />
        <input
          placeholder="Supplier Name"
          className="mb-3 rounded-pill p-2 border-0"
          required
          {...register("supplierName")}
        />
        <input
          placeholder="Quantity"
          className="mb-3 rounded-pill p-2 border-0"
          required
          type="number"
          {...register("Quantity")}
        />
        <input
          placeholder="Photo URL"
          className="mb-3 rounded-pill p-2 border-0"
          required
          type="text"
          {...register("img")}
        />
       
        <input
          value="Add Item"
          className="text-white bg-success border-1 border-light px-3 py-2 rounded-pill mx-auto"
          type="submit" style={{width:"100px"}}
        />
      </form>
    </div>
  );
};

export default AddItems;
