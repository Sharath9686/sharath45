import React from 'react'
import { useState } from 'react'
import './HospitalCSS/HospitalUpdateProfile.css'

function HospitalUpdateProfile() {
  const [DoctorName, setDoctorName] = useState('')
  const [DoctorImage, setDoctorImage] = useState('')
  const [AboutDoctor, setAboutDoctor] = useState('')

  const handaleDoctorName = (e) => {
    setDoctorName(e.target.value)
  }
  const handleDoctorImage = (e) => {
    setDoctorImage(e.target.value)
  }
  const handleAboutDoctor = (e) => {
    setAboutDoctor(e.target.value)
  }

  const handeleUpdateProfile = async (e) => {
    e.preventDefault();
    if (DoctorName === '' || DoctorImage === '' || AboutDoctor === '') {
      alert("Fill in all the required information!");
    } else {
      try {
        const response = await fetch('http://localhost:8080/postProfile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            doctorname: DoctorName,
            image: DoctorImage,
            aboutdoctor: AboutDoctor,
          }),
        });

        if (response.ok) {
          alert("Profile updated ")
          window.location.reload();

        } else {
          alert("Failed to Update. Please try again.");
        }
      } catch (error) {
        console.error("Error during Update:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <>
    <center>
      <div><h2 id='upd-h2'>UpdateProfile</h2></div>
      </center>
      <div>
      <form className='update-form'>
        <input
          type="text"
          className="upd-input"
          onChange={handaleDoctorName}
          value={DoctorName}
          placeholder="User DoctorName"
        /><br />
        {/* <label className="reg-lable">Password:</label> */}
       <label id='upd-lable'> select Photo:  </label> 
        <input
          type="file"
          className="upd-input"
          onChange={handleDoctorImage}
          value={DoctorImage}
          placeholder="Enter DoctorImage"
        /><br />
        <label id='upd-lable'>About Doctor :</label>
        <textarea
          className='upd-textarea'
          rows="4"
          cols="30"
          value={AboutDoctor}
          onChange={handleAboutDoctor}/><br/>
          <button
          id='upd-btn'
          type='submit'
          onClick={handeleUpdateProfile}>UpdateProfile
          </button>
      
        </form>
      </div>
    </>
  )
}
export default  HospitalUpdateProfile;
