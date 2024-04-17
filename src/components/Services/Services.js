import React from "react";
import Fluoride from"../../images/fluoride.png"
import  Cavity from"../../images/cavity.png"
import whitening from"../../images/whitening.png"
import ServiceDetail from "../ServiceDetail/ServiceDetail";


const Services = () => {
  const servicesData = [
    {
      name: "Fluoride Treatment",
      img: Fluoride,
    },
    {
      name: "Caviry Filling",
      img:  Cavity,
    },
    {
      name: "Teeth Whitening",
      img: whitening,
    },
  ];
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>Our Services</h5>
        <h1>Services With Provide</h1>
      </div>
      <div >
   <div className="w-75 row justify-content-center mt-5">
   {servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)}
   </div>
    </div>
    </section>
  );
};

export default Services;
