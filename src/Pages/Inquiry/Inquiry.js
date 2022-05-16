
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FaQuestion } from "react-icons/fa";

const Inquiry = () => {
  return (
    <div  id="inquiry" className="my-5   ">
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
                      <h5 className="mx-auto fs-2 text-white ">Inquiry</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-4 bg-light">
        <div className="col col-md-6">
          <p className="text-center">
            <FaQuestion size={56} className="text-info mx-auto"></FaQuestion>
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


