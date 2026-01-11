import React from 'react';
import './Doctor.css';

import doctor1 from '../images/doctor1.png';
import doctor2 from '../images/doctor2.png';
import doctor3 from '../images/doctor3.png';
import doctor4 from '../images/doctor4.png';
import doctor5 from '../images/doctor5.png';
import doctor6 from '../images/doctor6.png';
import doctor7 from '../images/doctor7.png';

export default function Doctor({ addAppointment }) {

  const doctors = [
    { img: doctor1, name: "Dr. Raj Sharma", specialist: "Cardiologist", experience: "10 Years" },
    { img: doctor2, name: "Dr. Nehal Verma", specialist: "Dermatologist", experience: "7 Years" },
    { img: doctor3, name: "Dr. Anil Gupta", specialist: "Neurologist", experience: "12 Years" },
    { img: doctor4, name: "Dr. Manish Singh", specialist: "Dentist", experience: "5 Years" },
    { img: doctor5, name: "Dr. Priya Mehta", specialist: "Orthopedic", experience: "8 Years" },
    { img: doctor6, name: "Dr. Kabir Rao", specialist: "Gynecologist", experience: "9 Years" },
    { img: doctor7, name: "Dr. Mohit Jain", specialist: "Pediatrician", experience: "6 Years" },
  ];

  function booked(doctorName) {
    const patient = prompt("Enter Patient Name:");
    if (!patient) return;

    const mobile = prompt("Enter Mobile Number:");
    if (!mobile) return;

    const bookingNo = "BK" + Math.floor(1000 + Math.random() * 9000);

    addAppointment({
      patient,
      mobile,
      doctorName,
      bookingNo
    });
  }

  return (
    <div className="doctor-container">
      {doctors.map((doc) => (
        <div className="doctor-card">
          <img src={doc.img} alt={doc.name} />
          <p><strong>Name:</strong> {doc.name}</p>
          <p><strong>Specialist:</strong> {doc.specialist}</p>
          <p><strong>Experience:</strong> {doc.experience}</p>

          <button className="appoint-btn" onClick={() => booked(doc.name)}>
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}
