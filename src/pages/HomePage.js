import React from "react";
import "../styles/homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
const Homepage = () => {
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-xl-6 pt-5  ">
            <h1 className="slide-down ms-4">
              <span className="fs-2">Hello__</span> 
              <br />
              This is Ou soben{" "}
            </h1>
            <ul className=" dynamic-txts ">
              <li>
                <span className="text-danger">Frontend Developer</span>{" "}
                <img src="" alt="" />
              </li>
              
            </ul>
            <div className="slide-top">
            <p className="">
             A passionate Front-end React Developer based in
              Phnom penh.
            </p>
            <a target="_blank" href="https://www.linkedin.com/in/soben-ou-107203288/"><FontAwesomeIcon className="icon-platform" icon={faLinkedin} size="2x" color="black"/></a>
            <a target="_blank" href="https://github.com/OUsoben"><FontAwesomeIcon className="ms-3 icon-platform" icon={faGithub} size="2x" color="black"/></a>
            <div className="mt-5 ">
          
           <a target="_blank" className=" css-button-sliding-to-left--yellow btn btn-lg px-3" href="file:///D:/Application/Web-Frontend-Ou-Soben.pdf">Download CV</a>
          
          </div>
            </div>    
           
          </div>
          <div className=" col-xl-6  image-dynamic mt-5">
            <img
              className="img-fluid "
              src={require("../images/logo-image.png")}
              alt=""
            />
          </div>
        </div>
       
      </div>
      <div className="mt-5  container-detail bg-light ">
          <div style={{height: "400px"}} className="d-flex justify-content-evenly align-items-center ">
             <div className="">
             <FontAwesomeIcon icon={faHtml5} size="3x" color="orange"/>
             <h5 className="text-white">90%</h5>
             <p className="text-white">HTML</p>
             
             </div>
             <div className="">
             <FontAwesomeIcon icon={faCss3} size="3x" color="blue"/>    
             <h5 className="text-white pt-2">70%</h5>
             <p className="text-white">CSS</p>
             </div>
             <div className="">
             <FontAwesomeIcon icon={faBootstrap} size="3x" color="#7F27FF"/>
             <h5 className="text-white pt-2 ps-2">80%</h5>
             <p className="text-white">Bootstrap</p>
             </div>
             <div className="">
             <FontAwesomeIcon icon={faJs} className="ms-2" size="3x" color="yellow"/>
             <h5 className="text-white pt-2 ms-2">70%</h5>
             <p className="text-white ">Javscript</p>
             </div>
           
             <div className="123">
             <FontAwesomeIcon icon={faReact} size="3x" color="#61DBFB"/>
             <h5 className="text-white pt-2 ps-1">70%</h5>
             <p className="text-white">React Js</p>
             </div>
          </div>
        </div>
        <section className="container mt-5 ">
          <h5 className="fw-bold bebas-neue-regular">Who Am I </h5>
          <div className="row bg-section rounded mt-4">
            <div className="col-xl-3   text-center">
              <img className="img-fluid circle" src={require("../images/img-4.png")} alt="My image" />
              <div className=" ">
                <h5 className="  fw-bold pt-3"> Ou Soben</h5>
                <hr  className="text-danger "/>
                <p className="">It All Begins With A Passion.</p>
               
              </div>
          
               </div>
               <div className="col-xl-8 p-xl-5 ms-2">
          
                <p className="font-i">I'm 21 years old based in Phnom Penh city, a senior college student pursuing a degree in Computer Science at <strong>Royal University of Phnom Penh.</strong> ,and passion for Design and Web Development. <br /> <br /> With a foundation rooted in a love for web development, I have honed my skills in HTML, CSS, JavaScript, and React Js to create dynamic and responsive interfaces that seamlessly blend form with function.</p>
               </div>

          </div>

        </section>
    </>
  );
};

export default Homepage;
