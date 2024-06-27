import React from 'react'
import image1 from "../../../images/mob-serv.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Banner from '../../../images/About-Banner.png'
const NewsBanner = () => {
  return (
    <div>
       <div className="position-relative">

      <picture className="w-100">
  <source srcSet={image1} media="(max-width: 699px)"/>
  <img src={Banner} alt="about-banner" className="w-100" height={'380px'}/>
</picture>
      
  <div className="position-absolute top-50 start-50 translate-middle">


    <h2 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Find the Perfect Farmland for Your Needs
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h2>

    </div>
    </div>
    </div>
  )
}

export default NewsBanner
