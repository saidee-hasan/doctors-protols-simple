
import "./Doctors.css";
import doctor from "../../images/doctor.png";
import"./Doctors.css"
const Doctors = () => {
  const doctorsData = [
    {
      img: doctor,
    },
    {
      img: doctor,
    },
    {
      img: doctor,
    },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="doctor">
      
        <h1> Our Doctor</h1>
      {doctorsData.map((dot) => (
        
        <div class="card">
          <div class="card-body">
            <img style={{ width: "250px" }} src={dot.img} alt="" />

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

export default Doctors;
