import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        setDoctors(response.data.doctors);
        setServices(response.data.services);
        setHospitals(response.data.hospitals);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const submitAppointment = () => {
    // Implement your appointment submission logic here
    console.log('Appointment submitted!');
  };

  return (
    <div>
      <h1>Doctor Appointment App</h1>
      <form>
        <label htmlFor="doctors">Select Doctor:</label>
        <select id="doctors">
          {doctors.map(doctor => (
            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
          ))}
        </select>

        <label htmlFor="services">Select Service:</label>
        <select id="services">
          {services.map(service => (
            <option key={service.id} value={service.id}>{service.name}</option>
          ))}
        </select>

        <label htmlFor="hospitals">Select Hospital:</label>
        <select id="hospitals">
          {hospitals.map(hospital => (
            <option key={hospital.id} value={hospital.id}>{hospital.name}</option>
          ))}
        </select>

        <button type="button" onClick={submitAppointment}>Submit Appointment</button>
      </form>
    </div>
  );
}

export default App;
