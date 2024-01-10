import React, { useState, useEffect } from 'react';

const Appointment = () => {
  const [services, setServices] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  useEffect(() => {
    // Fetch services, hospitals, doctors, and time slots data
    fetch('/api/healthcare-data')
      .then(response => response.json())
      .then(data => {
        const serviceNames = data.map(entry => entry.service_name).filter((value, index, self) => self.indexOf(value) === index);
        const hospitalNames = data.map(entry => entry.hospital_name).filter((value, index, self) => self.indexOf(value) === index);
        const doctorNames = data.map(entry => entry.doctor_name).filter((value, index, self) => self.indexOf(value) === index);
        const uniqueTimeSlots = Array.from(new Set(data.map(entry => entry.time_slot)));

        setServices(serviceNames.map(name => ({ name })));
        setHospitals(hospitalNames.map(name => ({ name })));
        setDoctors(doctorNames.map(name => ({ name })));
        setTimeSlots(uniqueTimeSlots);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
      {/* Existing JSX for displaying appointment details */}

      {/* Display fetched services */}
      <div>
        <h3>Available Services:</h3>
        <select
          className='App-select'
          value={selectedService}
          onChange={handleServiceSelection}
        >
          <option value='' disabled>Select a Service</option>
          {services.map((service, index) => (
            <option key={index} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      {/* Display fetched hospitals */}
      <div>
        <h3>Available Hospitals:</h3>
        <select
          className='App-select'
          value={selectedHospital}
          onChange={handleHospitalSelection}
        >
          <option value='' disabled>Select a Hospital</option>
          {hospitals.map((hospital, index) => (
            <option key={index} value={hospital.name}>
              {hospital.name}
            </option>
          ))}
        </select>
      </div>

      {/* Display fetched doctors */}
      <div>
        <h3>Available Doctors:</h3>
        <select
          className='App-select'
          value={selectedDoctor}
          onChange={handleDoctorSelection}
        >
          <option value='' disabled>Select a Doctor</option>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>

      {/* Display fetched time slots */}
      <div>
        <h3>Select a Time Slot:</h3>
        <select
          className='App-select'
          value={selectedTimeSlot}
          onChange={handleTimeSlotSelection}
        >
          <option value='' disabled>Select a Time Slot</option>
          {timeSlots.map((timeSlot, index) => (
            <option key={index} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
        </select>
      </div>

      {/* ... (remaining JSX) */}
    </div>
  );
};

export default Appointment;
