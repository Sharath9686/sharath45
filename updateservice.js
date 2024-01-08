import React, { useState, useEffect } from 'react';

const UpdateService = () => {
  const [serviceName, setServiceName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [hospitalName, setHospitalName] = useState('');

  const handleServiceUpdate = () => {
    // Assuming you have an endpoint to update services in your Spring Boot backend
    fetch('http://localhost:8080/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: serviceName }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Service updated successfully:', data);
        // You may want to perform additional actions after updating
      })
      .catch(error => console.error('Error updating service:', error));
  };

  const handleDoctorUpdate = () => {
    // Assuming you have an endpoint to update doctors in your Spring Boot backend
    fetch('http://localhost:8080/api/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: doctorName }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Doctor updated successfully:', data);
        // You may want to perform additional actions after updating
      })
      .catch(error => console.error('Error updating doctor:', error));
  };

  const handleHospitalUpdate = () => {
    // Assuming you have an endpoint to update hospitals in your Spring Boot backend
    fetch('http://localhost:8080/api/hospitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: hospitalName }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Hospital updated successfully:', data);
        // You may want to perform additional actions after updating
      })
      .catch(error => console.error('Error updating hospital:', error));
  };

  return (
    <div>
      <h2>Update Services, Doctors, and Hospitals</h2>

      <div>
        <h3>Update Service:</h3>
        <input
          type='text'
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
        <button onClick={handleServiceUpdate}>Update Service</button>
      </div>

      <div>
        <h3>Update Doctor:</h3>
        <input
          type='text'
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <button onClick={handleDoctorUpdate}>Update Doctor</button>
      </div>

      <div>
        <h3>Update Hospital:</h3>
        <input
          type='text'
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <button onClick={handleHospitalUpdate}>Update Hospital</button>
      </div>
    </div>
  );
};

export default UpdateService;
