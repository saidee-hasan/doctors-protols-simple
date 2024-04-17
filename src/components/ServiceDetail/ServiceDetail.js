import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div  className="col-md-4 text-center">
      <img style={{height:'50px'}} src={service.img} alt="" />
      <h5 className="mt-1 mb-5">{service.name}</h5>

      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nostrum?
        lorem23
      </p>
    </div>
  );
};

export default ServiceDetail;
