import React, { useState } from "react";
import "../App.css";

function Contact() {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form data here (e.g., send it to a server)
    // For now, let's just log the data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Message textarea */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
