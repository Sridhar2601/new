import React, { useState } from "react";

const WhatsAppForm = ({ phoneNumber }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Build the pre-filled message from form data
    const message = `Hello, my name is ${formData.name}.
Email: ${formData.email}
Message: ${formData.message}`;

    // 2. URL-encode the message to handle spaces and special characters
    const urlEncodedMessage = encodeURIComponent(message);

    // 3. Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${urlEncodedMessage}`;

    // 4. Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "200px" }}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>
      <button type="submit">Send on WhatsApp</button>
    </form>
  );
};

export default WhatsAppForm;
