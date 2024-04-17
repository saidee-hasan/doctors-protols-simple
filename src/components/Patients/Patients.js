import React from "react";
import pepole1 from "../../images/people-1.png";
import pepole2 from "../../images/people-2.png";
import pepole3 from "../../images/people-3.png";
import "./Patients.css";

const Patients = () => {
  const patientsData = [
    {
      name: "saidee",
      img: pepole1,
    },
    {
      name: "kaka khan",
      img: pepole2,
    },
    {
      name: "abdul khader",
      img: pepole3,
    },
  ];
  return (
    <div>
        <h3 className="text-center">What's Patients Says</h3>
      {patientsData.map((pat) => (
        <div class="card">
            
          <div class="card-body">
        
            <img src={pat.img} alt="" />
            <h5 class="card-title">{pat.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Patients;
