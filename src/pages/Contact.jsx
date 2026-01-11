import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {

  const [entries, setEntries] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let  name = e.target.name.value;
  let  email = e.target.email.value;
  let number = e.target.number.value;

    let newEntry = { name, email, number };

    setEntries([...entries, newEntry]);

    e.target.reset();
  }

  function removeEntry(index) {
    setEntries(entries.filter((_, i) => i !== index));
  }

  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Us</h1>
      <p>If you have any questions or need help, contact us using the form below.</p>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" />

          <label htmlFor="number">Phone Number:</label>
          <input type="tel" id="number" name="number" required placeholder="Enter your phone number" />

          <button className="contact-btn">Submit</button>
        </form>
      </div>

      
      <h2 className="table-title">Submitted Contacts</h2>

      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {entries.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-data">No data submitted yet.</td>
            </tr>
          ) : (
            entries.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>
                  <button className="remove-btn" onClick={() => removeEntry(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}
