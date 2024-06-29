import React, { useState, useEffect } from "react";
import "./HomePagePopupForm.css"; // Adjust the path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUser,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4"; // Import ReactGA

const HomePagePopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    number: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => {
      setIsVisible(true);
      ReactGA.event({
        category: "Popup",
        action: "Popup Displayed",
        label: "HomePage Popup Form",
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, [isVisible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "number") {
      const regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        if (
          value.length > 0 &&
          ["0", "1", "2", "3", "4", "5"].includes(value[0])
        ) {
          error = "Enter a valid number";
        }
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === "name") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        error = "Don't use special characters in the name";
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name === "email") {
      if (!value.endsWith("@gmail.com")) {
        error = "Email must end with @gmail.com";
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(formErrors).some((error) => error !== "");
    if (hasErrors) {
      return;
    }
    if (validateForm()) {
      submitToZohoCRM(formData);
    } else {
      console.log("Form validation failed.");
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      number: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const submitToZohoCRM = (formData) => {
    const zohoForm = document.createElement("form");
    zohoForm.action = "https://crm.zoho.in/crm/WebToLeadForm";
    zohoForm.method = "POST";
    zohoForm.style.display = "none";

    const fields = {
      xnQsjsdp:
        "7f84793891d1c0d2c010b0619057fdc6f7f20f7b445f641a2f9728700ec74b8e",
      xmIwtLD:
        "cbd0c4fb585428814e057b6ef3e8f4be75c74368bf3760603706e1c70201fa2d962b0b548a9a5782ed5d378c969a7807",
      actionType: "TGVhZHM=",
      Company: "Groavy",
      "Last Name": formData.name,
      Email: formData.email,
      Mobile: formData.number,
      LEADCF1: "Groavy",
    };

    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = fields[key];
        zohoForm.appendChild(hiddenField);
      }
    }

    document.body.appendChild(zohoForm);
    zohoForm.submit();
    document.body.removeChild(zohoForm);

    showSuccessNotification();
    div_hide();
    navigate("/");
  };

  const showSuccessNotification = () => {
    notification.success({
      message: "Form Submitted",
      description: "Thank you for contacting us!",
      placement: "top",
    });
  };

  const div_hide = () => {
    setIsVisible(false);
    AOS.refresh();
  };

  return (
    <div id="bodysoda" style={{ overflow: isVisible ? "hidden" : "auto" }}>
      {isVisible && (
        <div id="abc" className="p-3 p-md-0" style={{ display: "flex" }}>
          <div
            id="popupContact"
            data-aos={isMounted ? "zoom-in" : ""}
            data-aos-once="true"
          >
            <form id="popupform" onSubmit={handleSubmit} name="form">
              <FontAwesomeIcon
                icon={faTimes}
                id="close"
                className="text-black"
                data-aos="zoom-out"
                onClick={div_hide}
              />
              <h2 className="text-center">Reach out to us</h2>
              <hr />
              <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  id="popupname"
                  name="name"
                  placeholder="Name*"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <span className="error text-danger">{formErrors.name}</span>
                )}
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  id="popupemail"
                  name="email"
                  placeholder="Email*"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <span className="error text-danger">{formErrors.email}</span>
                )}
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faPhone} className="input-icon" />
                <input
                  id="popupnumber"
                  name="number"
                  placeholder="Whatsapp Number*"
                  type="tel"
                  maxLength={10}
                  value={formData.number}
                  onChange={handleChange}
                />
                {formErrors.number && (
                  <span className="error text-danger">{formErrors.number}</span>
                )}
              </div>
              <button className="popupsubmit" type="submit" id="submitpopup">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePagePopupForm;
