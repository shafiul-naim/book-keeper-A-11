
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FaQuestion } from "react-icons/fa";

const Inquiry = () => {
  return (
    <div className="my-5  bg-light ">
      <h2 className="text-primary">Inquiry</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-4">
        <div className="col col-md-6">
          <p>
            <FaQuestion size={56} className="text-info"></FaQuestion>
          </p>
          <p className="p-3 mx-auto my-auto">
            If you have question about the this inventory management system feel
            free to ask.Also if you are seller and want to keep your books in
            our inventory feel free to ask anything.
          </p>
        </div>
        <div className="col col-md-6">
          <form className="d-flex flex-column container">
            <input
              className="my-2 p-1 w-75 mx-auto"
              type="text"
              placeholder="Your name"
            />
            <input
              className="my-2 p-1 w-75 mx-auto"
              type="text"
              placeholder="Your email"
            />
            <input
              className="my-2 p-1 w-75 mx-auto"
              type="text"
              placeholder="What do you want to know"
            />
            <input
              className="my-2 p-1i mx-auto  rounded border-1 text-white bg-success"
              type="submit"
              value="Ask"
              style={{ width: "100px" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
