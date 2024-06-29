import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./css/EligantForm.css";

const EligantMainForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const iframe = document.getElementById("zoho-iframe-unique");
    iframe.onload = () => {
      showSuccessNotification();
      navigate("/elegantorchards");
    };
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let error = "";

    if (name === "whatsapp") {
      const regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        if (value.length > 0 && ["1", "2", "3", "4", "5"].includes(value[0])) {
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
        error = "Don't use special characters or numbers in the name";
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
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      return;
    }
    console.log("Form Data:", formData);
    submitToZohoCRM(formData);
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
    });
    onSubmitSuccess();
  };

  const submitToZohoCRM = (formData) => {
    const zohoForm = document.createElement("form");
    zohoForm.action = "https://crm.zoho.in/crm/WebToLeadForm";
    zohoForm.method = "POST";
    zohoForm.target = "zoho-iframe-unique";
    zohoForm.style.display = "none";

    const fields = {
      xnQsjsdp:
        "491d01328dd70a22215cbeb85f0311dbca6dba26d8809615e4025f427618b43d",
      xmIwtLD:
        "24d78cb7f7b1f8878b35e02b69d82431488979152eff5d927704a27765ddfe206427e8a463bba71ebb390a4e381589f3",
      actionType: "TGVhZHM=",
      Company: "Groavy",
      "Last Name": formData.name,
      Email: formData.email,
      Phone: formData.whatsapp,
      LEADCF1: "ElegantOrchards",
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

    window.gtag('event', 'conversion', {
      'send_to': 'AW-16458676935/cuzZCK7b8r0ZEMf1jag9',
      'value': 1.0,
      'currency': 'INR'
    });
  };

  const showSuccessNotification = () => {
    notification.success({
      message: "Form Submitted",
      description: "Thank you for choosing our idea to share with you.",
      placement: "topRight",
    });
  };

  return (
    <div className="form-container position-relative">
      <form
        id="eligantform"
        className="animated fadeInUp shadow-lg para-color"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center para-color3 mb-4">
          Fill this to Change Future{" "}
        </h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <span className="text-danger">*</span>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{color:'red', fontSize:'12px' }}>{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="whatsapp">WhatsApp No</label>
          <span className="text-danger">*</span>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            placeholder=" WhatsApp Number*"
            value={formData.whatsapp}
            onChange={handleChange}
            maxLength={10}
            pattern="[0-9]*"
            required
          />
          {errors.whatsapp && <p style={{color:'red', fontSize:'12px' }}>{errors.whatsapp}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <span className="text-danger">*</span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{color:'red', fontSize:'12px' }}>{errors.email}</p>}
        </div>
        <button
          type="submit"
          className="eligentformsubmit mx-auto d-block rounded-pill"
        >
          Submit
        </button>
        <div className="contact-buttons text-center mt-5">
          <a
            href="tel:6366829999"
            className="btn btn-info btn-sm para-color1 rounded-5 g-0"
          >
            <FaPhoneAlt /> Call
          </a>
          <a
            href="https://wa.me/6366829999"
            className="btn btn-sm mx-1 mx-md-3 btn-success para-color1 rounded-5"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:support@groavy.com"
            className="btn btn-sm btn-danger para-color1 rounded-5"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </form>
      <iframe
        id="zoho-iframe-unique"
        name="zoho-iframe-unique"
        title="zoho-iframe"
        className="hidden-iframe"
        style={{ display: "none" }}
      ></iframe>
    </div>
  );
};

export default EligantMainForm;
