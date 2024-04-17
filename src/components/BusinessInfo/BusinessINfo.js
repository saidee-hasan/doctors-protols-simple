import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const BusinessINfo = () => {
  const infosData = [
    {
      title: "Opaning Hours",
      description: "We are open 7 days ",
      icon: faClock,
      background: "primary",
    },
    {
      title: "Visit Our Location",
      description: "Brooklyn,NY 10003 USA ",
      icon: faLocationDot,
      background: "dark",
    },
    {
      title: "Call Us now",
      description: "+1 9756254825",
      icon: faPhone,
      background: "primary",
    },
  ];
  return (
    <section >
   <div className="w-75 row justify-content-center mt-5">
   {infosData.map((info) => (
        <InfoCard info={info}></InfoCard>
      ))}
   </div>
    </section>
  );
};

export default BusinessINfo;
