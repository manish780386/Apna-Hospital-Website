import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Doctor from './pages/Doctor.jsx';
import Appointment from './pages/Appointment.jsx';
import Contact from './pages/Contact.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  
  const [appointments, setAppointments] = useState([]);

  function addAppointment(newAppointment) {
    setAppointments([...appointments, newAppointment]);
  }

  function removeAppointment(index) {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
  }

  return (
    
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor addAppointment={addAppointment} />} />
          <Route path="/appointment" element={<Appointment appointments={appointments} removeAppointment={removeAppointment} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
   
  );
}
