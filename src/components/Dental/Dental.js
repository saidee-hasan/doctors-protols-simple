import React from "react";
import "./Dental.css";
import treatment from "../../images/treatment.png";

const Dental = () => {
  return (
    <div className="mr-10 mt-5">
      <div className="col-md-6  dentel">
        <img src={treatment} alt="" />
      </div>

      <div className="col-md-6 dentel">
        <h3>
          Exceptional Dental Care , <br /> On your temes
        </h3>
        <p style={{ color: "grey" }}>
          olor sit, amet consectetur adipisicing elit. Iusto officiis
          perspiciatis doloremque modi. Deserunt veritatis adipisci sit eum
          natus praesentium ea nesciunt. Illum necessitatibus voluptatem illo
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim veniam
          beatae eligendi ipsa impedit, nam quibusdam possimus illum dolores
          laudantium quod numquam modi, cumque unde blanditiis temporibus
          tempora totam, corporis aspernatur in ab commodi vero perspiciatis
          dolorum! Earum cupiditate velit, repellat pariatur exercitationem
          officiis soluta perspiciatis laudantium ea ducimus accusantium dicta
          voluptas. Perspiciatis reiciendis praesentium officia voluptate itaque
          eum voluptates, distinctio doloribus impedit, error ut eius saepe hic
          dolor corrupti. Sint culpa provident at eos omnis voluptatum enim
          fugiat tempora dolor quis recusandae impedit, quam velit natus
          debitis, facere, voluptates laboriosam rem repellat commodi tenetur!
          Fuga assumenda rerum minima vero! architecto? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nihil deserunt consequuntur ad sunt
          nesciunt eius necessitatibus. Sint, praesentium veritatis in a, vitae
          id beatae, doloribus ipsam saepe eos neque nemo. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Impedit praesentium tempora
          mollitia debitis, aliquam facilis atque nostrum! Doloribus similique
          repellat sit eveniet explicabo nobis culpa, nemo esse corporis vero
          laborum totam id iure sed asperiores incidunt voluptatum architecto
          tempora assumenda quis pariatur quas enim unde? Similique illum dolor,
          praesentium porro nobis velit cupiditate ipsum sapiente soluta
          repellendus fugit. Nobis commodi laborum minus voluptates doloremque,
          illo beatae ducimus eaque. Dolores blanditiis omnis error ab dolorum,
          id repellendus officia quod iste ea earum doloremque accusamus ratione
          asperiores perspiciatis beatae reiciendis, soluta delectus
          necessitatibus velit. Harum beatae necessitatibus ducimus quos sequi,
          cum debitis!
        </p>
        <button type="button" class="btn btn-success">
          Success
        </button>
      </div>
      
    </div>
  );
};

export default Dental;
