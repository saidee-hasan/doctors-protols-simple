import React from "react";
import "./Contact.css";
const Contact = () => {
  return <div>
     <div className="container">
    <div className="content">
      <div className="image-box">
       <img src="contact.png" alt=""/>
      </div>
    <form action="#">
      <div className="topic">Send us a message</div>
      <div className="input-box">
        <input type="text" placeholder="Enter Your Email" required/>
 
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter Your Password" required/>
        
      </div>
      <br />
     
      <div className="input-box">
        <input className="btn btn-warning" type="submit" value="Send Message"/>
      </div>
    </form>
  </div>
  </div>
</div>;
};

export default Contact;
