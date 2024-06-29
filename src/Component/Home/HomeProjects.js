import React from "react";
import "./HomeProjects.css";
import image from "../../images/elegant.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const projects = [
  {
    id: 1,
    // title: "Elegant Orchards ",
    image: image,
    link: "/elegantorchards",
  },
];

function HomeProjects() {
  <style>
    {`
          .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            height: 0;
            overflow: hidden;
            max-width: 100%;
            background: #000;
          }

          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }
        `}
  </style>;
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="container   pt-1 pb-5">
          <h2
            className="font1 text-center mt-2 mb-3"
            style={{ color: "#3A6958" }}
          >
            Our Projects
          </h2>

          <div className="row ">
            <p className="text-center pb-1  para-color">
              Our projects reflect a commitment to quality, innovation, and a
              vision for redefining the art of living.
            </p>
            {projects.map((project) => (
              <div className="col-12 col-md-4 px-md-4" key={project.id}>
                <div className="project-class ">
                  <div className="customs-card">
                    <img
                      src={project.image}
                      alt="elegant-project"
                      className="w-100 poda"
                    />
                    <div className="customs-card-body text-center py-3">
                      {/* <h6 className="customs-card-title" >{project.title}</h6> */}
                      <Link
                        to={project.link}
                        className="btn btn-info customs-btn para-color"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 col-lg-8 mt-3 mt-md-0">
              {/* <iframe
                className="mx-auto d-block"
                width="100%"
                height="450px"
                src="https://www.youtube.com/embed/bAnSLv0pKpw?autoplay=0&loop=1&controls=0&mute=1&playlist=bAnSLv0pKpw&si=aXTpnLWMW6c0ZbXM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe> */}

              <div className="video-container mx-auto d-block mt-4" style={{height:'400px '}}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/CT_1vQAdCk4?autoplay=0&loop=1&controls=0&mute=1&si=F591mxOZug54uiwo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProjects;
