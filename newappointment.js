import React, { useState, useEffect } from 'react';
import './Appointments.css';

const Appointment = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [appointmentFixed, setAppointmentFixed] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [services, setServices] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch services
    fetch('http://localhost:8080/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));

    // Fetch hospitals
    fetch('http://localhost:8080/api/hospitals')
      .then(response => response.json())
      .then(data => setHospitals(data))
      .catch(error => console.error('Error fetching hospitals:', error));

    // Fetch doctors
    fetch('http://localhost:8080/api/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const handleFixAppointment = () => {
    // Existing code for fixing appointment

    if (selectedService && selectedHospital && selectedDoctor && selectedTimeSlot && userName && userEmail) {
      console.log('Appointment Fixed!');
      console.log(`User: ${userName} (${userEmail})`);
      console.log(`Doctor: ${selectedDoctor} - ${selectedHospital}`);
      console.log(`Time Slot: ${selectedTimeSlot}`);
      setAppointmentFixed(true);
    } else {
      alert('Please fill in all fields before fixing the appointment.');
    }
  };

  const handleServiceSelection = (e) => {
    setSelectedService(e.target.value);
    setSelectedHospital('');
    setSelectedDoctor('');
    setSelectedTimeSlot('');
  };

  const handleHospitalSelection = (e) => {
    const selectedHospitalId = e.target.value;
    setSelectedHospital(selectedHospitalId);

    const filteredDoctors = doctors.filter(
      (doctor) => doctor.hospital === parseInt(selectedHospitalId) && doctor.services.includes(parseInt(selectedService))
    );

    setSelectedDoctor(filteredDoctors[0]?.name || '');
  };

  const handleDoctorSelection = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleTimeSlotSelection = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  return (
    <div id='bg'>
      {appointmentFixed ? (
        <div>
          <p>Appointment Fixed!</p>
          <p>{`You have an appointment with ${selectedDoctor} at ${selectedTimeSlot}.`}</p>
        </div>
      ) : (
        <div id='appoint'>
          {/* Existing appointment code */}

          {/* Hospital-related section */}
          <div>
            <h2>Hospital Functions</h2>
            <div>
              <h3>Select a Hospital:</h3>
              <select value={selectedHospital} onChange={handleHospitalSelection}>
                <option value='' disabled>Select a Hospital</option>
                {hospitals.map((hospital) => (
                  <option key={hospital.id} value={hospital.id}>
                    {hospital.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedHospital && (
              <div>
                <h3>Available Doctors:</h3>
                <select value={selectedDoctor} onChange={handleDoctorSelection}>
                  <option value='' disabled>Select a Doctor</option>
                  {doctors.map(
                    (doctor) =>
                      doctor.hospital === parseInt(selectedHospital) &&
                      doctor.services.includes(parseInt(selectedService)) && (
                        <option key={doctor.id} value={doctor.name}>
                          {doctor.name}
                        </option>
                      )
                  )}
                </select>
              </div>
            )}
          </div>

          {/* Appointment section */}
          <div>
            <h2>Schedule an Appointment</h2>

            <div>
              <h3>Select a Service:</h3>
              <select value={selectedService} onChange={handleServiceSelection}>
                <option value='' disabled>Select a Service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Existing appointment code */}
          </div>

          <div>
            <label className='app-label'>Name:</label>
            <input
              type='text'
              className='App-input'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className='app-label'>Email:</label>
            <input
              type='email'
              value={userEmail}
              className='App-input'
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <button className='app-button' onClick={handleFixAppointment}>
            Fix Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Appointment;
