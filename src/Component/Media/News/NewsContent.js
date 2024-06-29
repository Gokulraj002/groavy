import React from "react";
import "./NewsContent.css";
import trophy from "../../../images/tropy.png";
import trophy1 from "../../../images/trophy1.png";
import trophy2 from "../../../images/News.jpg";
import certificate from "../../../images/certificate.png";

const NewsContent = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-12 col-md-6">
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  src={trophy}
                  alt="Times Business Award Trophy"
                />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  <h5 className="newsh5 text-center text-white">
                    Times Business Award
                  </h5>
                  <p className="news-p text-white text-center">
                    We are honored to receive the prestigious Times Business
                    Award. This recognition is a testament to our commitment to
                    excellence and innovation in the industry. This trophy
                    symbolizes our dedication to delivering outstanding services
                    and achieving remarkable milestones.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="position-relative newscol">
                <img
                  className="news-img"
                  src={certificate}
                  alt="Times Business Award Certificate"
                />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  <h5 className="newsh5 text-center text-white">
                    Times Business Award Certificate
                  </h5>
                  <p className="news-p text-white text-center">
                    Proudly awarded to Elegant Orchards Estate (Groavy Buildcon)
                    for being a Premium & Future Ready Farmland Project. This
                    certificate of excellence is a recognition of our relentless
                    pursuit of quality and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="position-relative newscol">
                <img className="news-img w-100" src={trophy2} alt="News Details" />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  <h5 className="newsh5 text-center text-white">
                    Times Business Award Announcement
                  </h5>
                  <p className="news-p text-white text-center">June 2024</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="position-relative newscol">
                <img className="news-img w-100" src={trophy2} alt="News Details" />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  <h5 className="newsh5 text-center text-white">
                    Times Business Award Announcement
                  </h5>
                  <p className="news-p text-white text-center">June 2024</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="position-relative newscol">
                <img className="news-img w-100" src={trophy2} alt="News Details" />
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle news-content">
                  <h5 className="newsh5 text-center text-white">
                    Times Business Award Announcement
                  </h5>
                  <p className="news-p text-white text-center">June 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContent;
