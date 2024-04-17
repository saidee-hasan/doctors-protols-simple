import React from "react";
import chair from "../../images/chair.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px"}} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{color:'#616d88'}}> Your New Smile Start Heair</h1>

        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis, earum molestias odit voluptates unde vitae. Quibusdam
          perspiciatis debitis quisquam cumque consequuntur ipsa et expedita
          deserunt cum vero eius, voluptas fugiat?
        </p>
        <button className="btn btn-primary">Get Appromint</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
