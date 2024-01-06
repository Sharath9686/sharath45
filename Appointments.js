import React, { useState } from 'react';
import './Appointments.css';

const doctors = [
    { id: 1, name: 'Dr. Anil Kumar R', hospital: 'City Hospital' },
  { id: 2, name: 'Dr. Belehalli Pavan', hospital: 'General Medical Hospital' },
  { id: 3, name: 'Dr. Lalitha R', hospital: 'General Medical Hospital' },
  { id: 4, name: '	Dr. Dinesh R.B', hospital: 'General Medical Hospital' },
 
];

const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 12:00 AM',
  '02:00 PM - 04:00 PM',
  '04:00 PM - 06:00 PM',
  
];

const Appointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [appointmentFixed, setAppointmentFixed] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');


  const handleFixAppointment = async () => {
    if (selectedDoctor && selectedTimeSlot && userName && userEmail) {
      const appointmentData = {
        
        doctorName: selectedDoctor.name,
        hospitalName: selectedDoctor.hospital,
        timeSlot: selectedTimeSlot.timeSlot,
        userName: userName,
        userEmail: userEmail,
      };

      try {
        const response = await fetch('http://localhost:8080/Updateappointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(appointmentData),
        });

        if (response.ok) {
          console.log('Appointment Fixed!');
          console.log(`User: ${userName} (${userEmail})`);
          console.log(`Doctor: ${selectedDoctor.name} - ${selectedDoctor.hospital}`);
          console.log(`Time Slot: ${selectedTimeSlot}`);
          setAppointmentFixed(true);
        } else {
          console.error('Failed to fix appointment.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Please fill in all fields before fixing the appointment.');
    }
  };


  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <div id='bg'>
      {appointmentFixed ? (
        <div>
          <p>Appointment Fixed!</p>
          <p>{`You have an appointment with ${selectedDoctor.name} at ${selectedTimeSlot}.`}</p>
        </div>
      ) : (
        <div id='appoint'>
          <h2>Schedule an Appointment</h2>
          <div>
            <h3>Select a Doctor:</h3>
            <ul>
              {doctors.map((doctor) => (
                <li key={doctor.id} onClick={() => handleDoctorSelection(doctor)}className={selectedDoctor === doctor ? 'selected' : ''}>
                <span>  {doctor.name}{doctor.hospital}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Select a Time Slot:</h3>
            <ul>
              {timeSlots.map((timeSlot) => (
                <li key={timeSlot} onClick={() => handleTimeSlotSelection(timeSlot)} className={selectedTimeSlot === timeSlot ? 'selected' : ''}>
                  {timeSlot}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className='app-label'>Name:</label>
            <input type="option" className='App-input' value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <label className='app-label'>Email:</label>
            <input type="email" value={userEmail}  className='App-input' onChange={(e) => setUserEmail(e.target.value)} />
          </div>

          <button className='app-button'onClick={handleFixAppointment}>Fix Appointment</button>
        </div>
      )}
    </div>
  );
};

export default Appointment;
