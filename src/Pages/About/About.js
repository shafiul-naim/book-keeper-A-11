import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="container  py-3" id="about">
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
                      <h5 className="mx-auto fs-2 text-white ">About</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
          <div className="row justify-content-center my-5">  
            <div className="col-lg-12">
              <div className="card card-body border-0 shadow ">
                <div className="row">
                  <div className="col-lg-6 ">
                    <div
                      className="card card-body shadow border-1"
                      style={{ backgroundColor: "#d7efd876" }}
                    >
                      <p className="fs-4 text-white">This website is about managing inventory of books. By this website you can keep track of your books. How many book you have in inventory. How much has been sold, how much you delivered etc. You can add item, can control the number of quantity of this item. And in need you can delete the item form your inventory in this website</p>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div
                      className="card card-body shadow border-1"
                      
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};

export default About;
