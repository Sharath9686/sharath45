    import React, { useState } from 'react';
    import './Appointments.css';

    const services = [
    { id: 1, name: 'General Checkup' },
    { id: 2, name: 'Dental Care' },
    { id: 3, name: 'Orthopedic Consultation' },
    { id: 4, name: 'Pediatric Care' },
    { id: 5, name: 'Cardiology Consultation' },
    ];

    const hospitals = [
    { id: 1, name: 'City Hospital', doctors: [1, 2, 3, 4, 5] },
    { id: 2, name: 'General Medical Hospital', doctors: [2, 3, 4] },
    { id: 3, name: 'K.R Hospital', doctors: [4, 5, 2] },
    { id: 4, name: 'Apolo Hospital', doctors: [2, 3, 1, 5] },
    ];

    const doctors = [
    { id: 1, name: 'Dr. Anil Kumar R', services: [1], hospital: 1 },
    { id: 2, name: 'Dr. Renuka', services: [2], hospital: 1 },
    { id: 3, name: 'Dr. Gagan B N', services: [3], hospital: 1 },
    { id: 4, name: 'Dr. Chandana ', services: [4], hospital: 1 },
    { id: 5, name: 'Dr. Lavanya ', services: [5], hospital: 1 },
    { id: 6, name: 'Dr. Dileep', services: [1], hospital: 2 },
    { id: 7, name: 'Dr. Ravi chandra', services: [2], hospital: 2 },
    { id: 8, name: 'Dr. Anil  R', services: [3], hospital: 2 },
    { id: 9, name: 'Dr. Shashikala K', services: [4], hospital: 2 },
    { id: 10, name: 'Dr. Kumar R', services: [5], hospital: 2 },
    { id: 11, name: 'Dr.  Pavan', services: [1], hospital: 3 },
    { id: 12, name: 'Dr. Lalitha R', services: [2], hospital: 3 },
    { id: 13, name: 'Dr. Dinesh R.B', services: [3], hospital: 3 },
    { id: 14, name: 'Dr. Karthic A.R', services: [4], hospital: 3 },
    { id: 15, name: 'Dr. Anil Kumar R', services: [5], hospital: 3 },
    { id: 16, name: 'Dr. Madhu', services: [1], hospital: 4 },
    { id: 17, name: 'Dr. Manoj B N', services: [2], hospital: 4 },
    { id: 4, name: 'Dr. Manju B M ', services: [3], hospital: 4 },
    { id: 5, name: 'Dr. Lavanya Shanmuga ', services: [4], hospital: 4 },
    { id: 6, name: 'Dr. Deepak', services: [5], hospital: 4 },
    { id: 7, name: 'Dr. Mayan Gowda', services: [1], hospital: 5 },
    { id: 8, name: 'Dr. Suma ', services: [2], hospital: 5 },
    { id: 9, name: 'Dr.  Vijay', services: [3], hospital: 5 },
    { id: 10, name: 'Dr. Pavan Kumar R', services: [4], hospital: 5 },
    { id: 11, name: 'Dr. Manu M', services: [5], hospital: 5 },
    ];

    const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    ];

    const Appointment = () => {
    const [selectedService, setSelectedService] = useState('');
    const [selectedHospital, setSelectedHospital] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [appointmentFixed, setAppointmentFixed] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleFixAppointment = () => {
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
          <div id='App-appoint'>
            <h2>Schedule an Appointment</h2>

            <div>
              <h3>Select a Service:</h3>
              <select
              className='App-select'
                value={selectedService}
                onChange={handleServiceSelection}
              >
                <option value='' disabled>Select a Service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedService && (
              <div>
                <h3>Select a Hospital:</h3>
                <select
                className='App-select'
                  value={selectedHospital}
                  onChange={handleHospitalSelection}
                >
                  <option value='' disabled>Select a Hospital</option>
                  {hospitals.map((hospital) => (
                    <option key={hospital.id} value={hospital.id}>
                      {hospital.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedHospital && selectedService && (
              <div>
                <h3>Available Doctors:</h3>
                <select
                className='App-select'
                  value={selectedDoctor}
                  onChange={handleDoctorSelection}
                >
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

            {selectedDoctor && (
              <div>
                <h3>Select a Time Slot:</h3>
                <select
                className='App-select'
                  value={selectedTimeSlot}
                  onChange={handleTimeSlotSelection}
                >
                  <option value='' disabled>Select a Time Slot</option>
                  {timeSlots.map((timeSlot) => (
                    <option key={timeSlot} value={timeSlot}>
                      {timeSlot}
                    </option>
                  ))}
                </select>
              </div>
            )}

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

            <button id='app-button' onClick={handleFixAppointment}>
              Fix Appointment
            </button>
          </div>
        )}
      </div>
    );
    };

    export default Appointment;
