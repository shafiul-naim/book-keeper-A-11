import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventories`;
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
    <div className="mt-5 pt-5 container w-100">
      <h2 className="text-center mb-5">Add Item</h2>
      <form
        className="d-flex flex-column mb-3 w-75 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          
          className="mb-3"
          value={user?.email}
          
          {...register("email")}
        />
        <input
          placeholder="Book Name"
          className="mb-3"
          required
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Description"
          className="mb-3"
          required
          {...register("description")}
        />
        <input
          placeholder="Price"
          className="mb-3"
          required
          type="number"
          {...register("price")}
        />
        <input
          placeholder="Sold"
          className="mb-3"
          type="number"
          required
          {...register("sold")}
        />
        <input
          placeholder="Supplier Name"
          className="mb-3"
          required
          {...register("supplierName")}
        />
        <input
          placeholder="Quantity"
          className="mb-3"
          required
          type="number"
          {...register("Quantity")}
        />
        <input
          placeholder="Photo URL"
          className="mb-3"
          required
          type="text"
          {...register("img")}
        />
       
        <input
          value="Add Item"
          className="text-white bg-success border-1 rounded-pill mx-auto"
          type="submit" style={{width:"100px"}}
        />
      </form>
    </div>
  );
};

export default AddItems;
