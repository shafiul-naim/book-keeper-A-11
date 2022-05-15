import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
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
    <div className="mt-5 pt-5 container w-75">
      <h2>Add Item</h2>
      <form
        className="d-flex flex-column mb-3"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          value="Add Item "
          className="text-success w-50 rounded-pill mx-auto"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddItems;
