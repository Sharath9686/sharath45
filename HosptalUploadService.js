import React, { useState } from 'react';
import './HospitalCSS/HospitalUploadService.css';

const HospitalUpdateService = () => {
  const [serviceName, setServiceName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [hospitalName, setHospitalName] = useState('');


    const handleUpdate = async () => {
      try {
        const response = await fetch('http://localhost:8080/postService', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service: serviceName,
            doctors: doctorName,
            hospital: hospitalName


          }),
        });

        if (response.ok) {

          alert("Qurey submited")
          window.location.reload()
        } else {
          alert("Failed to register. Please try again.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred. Please try again later.");
      }
    }



  return (
    <div className='upd-serv'>
      <h4 id='upd-serv'>Update Services, Doctors, and Hospitals</h4>

      <div>
        <h4 id='upd-serv'>Update Service:</h4>
        <input
          className='upd-servinput'
          type='text'
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
       
      </div>

      <div>
        <h4>Update Doctor:</h4>
        <input
          className='upd-servinput'
          type='text'
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
   
      </div>

      <div>
        <h4>Update Hospital:</h4>
        <input
          className='upd-servinput'
          type='text'
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <button id='upd-servBtn' onClick={() => handleUpdate()}>Update Service</button>
      </div>
    </div>
  );
};

export default HospitalUpdateService;
