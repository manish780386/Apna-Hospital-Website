import React from "react";
import "./Appointment.css";

export default function Appointment({ appointments, removeAppointment }) {
  return (
    <div className="appointment-container">
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Mobile No.</th>
            <th>Booking No.</th>
            <th>Doctor Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">No Appointments Booked</td>
            </tr>
          ) : (
            appointments.map((item) => (
              <tr >
                <td>{item.patient}</td>
                <td>{item.mobile}</td>
                <td>{item.bookingNo}</td>
                <td>{item.doctorName}</td>
                <td>
                  <button
                    className="complete-btn"
                    onClick={() => removeAppointment(index)}
                  >
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
