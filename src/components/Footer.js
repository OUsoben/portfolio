import React from 'react'
import "../styles/footer.css"
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  let navigate = useNavigate()
  return (
  
    <>
      <div className="p-5  mt-5 bg-dark row me-1 ">
           <div className=" text-white col-xl-6  allrights ">
           <p className="fw-bold ">CONTECT ME</p>
            <div className="">
              <div className="">
                <p className="" > <FontAwesomeIcon icon={faLocationDot} /> #01, Street 86k Phum Chak Jruk   Tboung,Sangkat Somrong Krom, <br /> Khan   Porsenchey,  Phnom Penh, Cambodia</p></div>
              
              <a className="text-white" style={{ textDecorationLine: "none" }} href="tel:069395136">
              <FontAwesomeIcon icon={faPhone} />  (+855) 69-395-136
              </a>
              <br  />
              <br />
              <a className="text-white" style={{ textDecorationLine: "none" }} href="mailto:ousoben20@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> ousoben20@gmail.com
              </a>
              </div>
           </div>
           <div className="col-xl-2 text-white  allrights mt-3   mt-xl-0 ">
           <p className="fw-bold ">MORE</p>
        
            <a style={{cursor:"pointer"}} onClick={()=>{
              navigate("/skills")
            }}>Skills</a>
            <br />
            <br />
            <a  style={{cursor:"pointer"}} onClick={()=>{
              navigate("/contactme")
            }}>Contact</a>
            <br />
            <br />
             <a  style={{cursor:"pointer"}} onClick={()=>{
              navigate("/portfolio")
            }}>Portfolio</a>

           </div>
        <div className="text-xl-end text-center pb-3 pt-4 col-xl-4 ">
    
          <a target="_blank" href="https://t.me/ou_soben">
            <FontAwesomeIcon className="" icon={faTelegram} size="2x" />
          </a>
          <a target="_blank" href="https://www.facebook.com/pai.lav.507/">
            <FontAwesomeIcon className="ms-4" icon={faFacebook} size="2x" />
          </a>
          <a target="_blank" href="https://www.instagram.com/slidyy_smith/">
            <FontAwesomeIcon className="ms-4" icon={faInstagram} size="2x" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/soben-ou-107203288/"
          >
            <FontAwesomeIcon className="ms-4" icon={faLinkedin} size="2x" />
          </a>
          <div className=" ">
          <p className="pt-3 text-sm allrights">
          © 2024 | All Rights Reserved.
            <span
              style={{ fontWeight: "bolder" }}
              className=" text-weight-bold"
            >
     
            </span>
          </p>
        </div>
        </div>
   
      </div>
    </>
  )
}

export default Footer