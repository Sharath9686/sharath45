import React, { useState } from 'react';

const UpdateService = () => {
  const [serviceData, setServiceData] = useState({
    serviceName: '',
    hospitalName: '',
    doctorName: '',
    timeSlot: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint for updating the service data
    fetch('/api/update-service', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success, if needed
        console.log('Data posted successfully:', data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <div>
      <h2>Update Service Data:</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Service Name:
          <input
            type="text"
            name="serviceName"
            value={serviceData.serviceName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Hospital Name:
          <input
            type="text"
            name="hospitalName"
            value={serviceData.hospitalName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Doctor Name:
          <input
            type="text"
            name="doctorName"
            value={serviceData.doctorName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time Slot:
          <input
            type="text"
            name="timeSlot"
            value={serviceData.timeSlot}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Update Data</button>
      </form>
    </div>
  );
};

export default UpdateService;
