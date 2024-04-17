import React from "react";
import Header from "./../Header/Header";
import Services from "./../Services/Services";
import Dental from "../Dental/Dental";
import Appoirment from "../Appoirment/Appoirment";
import Patients from "../Patients/Patients";
import Doctors from "../Doctors/Doctors";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Appoirment></Appoirment>
      <Dental></Dental>
      <Patients></Patients>
     <Doctors></Doctors>
     <Contact></Contact>
     <Footer></Footer>
    
    </div>
  );
};

export default Home;
