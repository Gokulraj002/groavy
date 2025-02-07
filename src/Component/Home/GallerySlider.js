import React, { useState, useEffect } from "react";
import "./GallerySlider.css";
import { Modal, Button, Carousel } from "react-bootstrap";
import axios from "axios";
import FullView from "../../Component/Projects/Eligent/ElegantImages/full-change.png";
import Entrance from "../../Component/Projects/Eligent/ElegantImages/entrance.png";
import clubhouse from "../../Component/Projects/Eligent/ElegantImages/club.png";
import ParkView from "../../Component/Projects/Eligent/ElegantImages/park-change.png";
import Park from "../../Component/Projects/Eligent/ElegantImages/swimm.png";
import SwimmingPool from "../../Component/Projects/Eligent/ElegantImages/swimming.png";
import RockClimbing from "../../Component/Projects/Eligent/ElegantImages/rock-change.png";

const Slider = () => {
  const [sliderImageUrl, setSliderImageUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [imageSet, setImageSet] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ WordPress API Endpoint
  const API_URL = "https://info.groavy.com/wp-json/wp/v2/posts/45";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        const content = response.data.content.rendered;

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;

        const imgTags = tempDiv.getElementsByTagName("img");
        const imageUrls = Array.from(imgTags).map((img) => ({
          url: img.src,
          alt:"Managed Farmland Image",
          width: 350,
          height: 250,
        }));

        setSliderImageUrl(imageUrls);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // ✅ Static Images for Second Set
  const sliderImageUrl2 = [
    { url: FullView, alt: "Elegant-3DLayout", width: 350, height: 250 },
    { url: Entrance, alt: "Elegant-3DEntrance", width: 350, height: 250 },
    { url: clubhouse, alt: "clubhouse design3D", width: 350, height: 250 },
    { url: ParkView, alt: "park design3D", width: 350, height: 250 },
    { url: Park, alt: "Park-waiting-place", width: 350, height: 250 },
    { url: SwimmingPool, alt: "Swimming pool", width: 350, height: 250 },
    { url: RockClimbing, alt: "Rock Climbing", width: 350, height: 250 },
  ];

  const handleClose = () => {
    setZoomedImage(null);
    setImageSet([]);
    setActiveIndex(0);
  };

  const handleZoomIn = (image, imageSet) => {
    setZoomedImage(image);
    setImageSet(imageSet);
    setActiveIndex(imageSet.findIndex((img) => img.url === image.url));
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="slider-container">
      <h2 className="font11 text-center mt-2 mb-4" style={{ color: "#3A6958" }}>
        Managed Farmland Gallery
      </h2>

      {loading && <p className="text-center">Loading images...</p>}
      {error && <p className="text-center text-danger">Error: {error}</p>}

      {/* ✅ Marquee for API Images */}
      {!loading && !error && sliderImageUrl.length > 0 && (
        <marquee behavior="scroll" direction="left" scrollamount="6">
          <div className="marquee-container">
            {sliderImageUrl.map((image, index) => (
              <img
                style={{ cursor: "pointer" }}
                key={index}
                className="marquee-image mx-2"
                src={image.url}
                title="Click To See Full Image"
                alt={image.alt}
                loading="lazy"
                width={image.width}
                height={image.height}
                onClick={() => handleZoomIn(image, sliderImageUrl)}
              />
            ))}
          </div>
        </marquee>
      )}

      {/* ✅ Marquee for Static Images */}
      <marquee behavior="scroll" direction="right" scrollamount="8">
        <div className="marquee-container">
          {sliderImageUrl2.map((image, index) => (
            <img
              style={{ cursor: "pointer" }}
              key={index}
              className="marquee-image mx-2"
              src={image.url}
              title="Click The Image to Full view"
              alt={image.alt}
              loading="lazy"
              width={image.width}
              height={image.height}
              onClick={() => handleZoomIn(image, sliderImageUrl2)}
            />
          ))}
        </div>
      </marquee>

      {/* ✅ Modal for Image Preview */}
      {zoomedImage && (
        <Modal
          show={true}
          onHide={handleClose}
          centered
          size="xl"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Modal.Header closeButton>
            <Modal.Title>{imageSet[activeIndex]?.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="text-center"
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
              {imageSet.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.url}
                    alt={image.alt}
                    style={{ maxHeight: "80vh" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Slider;
