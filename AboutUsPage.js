
import React from 'react'
import { Link } from 'react-router-dom';
import '../ComponentsCSS/AboutUsPage.css';
import Clinec from '../immagess/dranil.jpg'
import Primary from '../immagess/drbelehalli.jpg'
import Emergency from '../immagess/drlatha.jpg'
import Blood from '../immagess/drdinesh.jpg'
// import Appointment from './applogo.png'

// const AboutourDoctors = [
//   {
//     id: 1,
//     Name: 'Dr. Anil Kumar R',
//     Immage: <img src={Clinec} alt='Kumar'id='kumar' />,
//     AboutDoctor: 'MBBS, MD, FRCP (Edinburgh), FICP,FRSSDI, WHO Fellowship in Diabetology',
//     link: "https://kierbengaluru.karnataka.gov.in/uploads/media_to_upload1674449693.pdf",
//   },
//   {
//     id: 2,
//     Name: 'Dr. Belehalli Pavan',
//     Immage: <img src={Primary} alt='Pavan' id='pavan'  />,
//     AboutDoctor: 'MBBS, DNB-Orthopaedics,Mch - Orthopaedics, MNAMS',
//     link: "https://kierbengaluru.karnataka.gov.in/uploads/media_to_upload1673069723.pdf",
//   },
//   {
//     id: 3,
//     Name: 'Dr. Lalitha R',
//     Immage: <img src={Emergency} alt='Latha' id='latha' />,
//     AboutDoctor: 'MBBS, MD (Internal Medicine), SCE (RCP UK),PGD (Cardiff University, UK),PGD (Diabetes and Clinical Endo) RCP, UK',
//     link: "https://kierbengaluru.karnataka.gov.in/uploads/media_to_upload1672304307.pdf",
//   },
//   {
//     id: 4,
//     Name: '	Dr. Dinesh R.B',
//     Immage: <img src={Blood} alt='Dinesh' id='dinesh' />,
//     AboutDoctor: 'MBBS, DOMS, DNB, MNAMS, FPEC',
//     link: "https://kierbengaluru.karnataka.gov.in/uploads/media_to_upload1675054113.pdf",
//   },
// ]
// const Aboutimformation=[{

//   link:'',
// }]
function AboutUsPage() {
  return (
    <>

            <section className="about-section">
        <h2>About our Doctors</h2>
        <div className="About-Doctors">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="about-card">
              <div className="about-icon">{doctor.Immage}</div>
              <h3>{doctor.DoctorName}</h3>
              <p>{doctor.AboutDoctor}</p>
              <a href={doctor.link} target="_blank" rel="noopener noreferrer" className="about-link">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
<div className='about-page'>
      <div className='about-Team'></div>
      <hr color="blue" width="100%"></hr>
      <p className='about-p'>About :-</p>
      <Link to="/Main/Aboutmanagement"><h4 className='about-Team'> Our Management</h4></Link>
      <div className='About-Department'>
      <Link to="/Main/AboutDeportment"><h4 className='About-Department'>Our Department</h4></Link>
      </div>
      <div className='About-Clinic'></div>
      <Link to="/Main/AboutClinic"><h4 className='About-Clinic'>About our Clinic</h4></Link>

      <div className='Feedback'>

      </div>
      </div>
    </>
  )
}
export default AboutUsPage;


// // MainComponent.js
// import React, { useState, useEffect } from 'react';
// import HospitalUpdateProfile from './HospitalUpdateProfile';
// import AboutUsPage from './AboutUsPage';

// const MainComponent = () => {
//   const [doctorDetails, setDoctorDetails] = useState({
//     DoctorName: '',
//     DoctorImage: '',
//     AboutDoctor: '',
//   });

//   useEffect(() => {
//     // Fetch the updated doctor details from the database
//     const fetchDoctorDetails = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/getDoctorDetails');
//         if (response.ok) {
//           const data = await response.json();
//           setDoctorDetails(data);
//         } else {
//           console.error('Failed to fetch doctor details.');
//         }
//       } catch (error) {
//         console.error('Error during fetch:', error);
//       }
//     };

//     fetchDoctorDetails();
//   }, []); // Run this effect only once, similar to componentDidMount

//   const handleUpdateDoctorDetails = (updatedDetails) => {
//     // Assuming you've already updated the details in the database
//     // Just update the state with the latest data
//     setDoctorDetails(updatedDetails);
//   };

//   return (
//     <>
//       <HospitalUpdateProfile onUpdateDoctorDetails={handleUpdateDoctorDetails} />
//       <AboutUsPage doctorsData={[doctorDetails]} />
//     </>
//   );
// };

// export default MainComponent;












// // HospitalUpdateProfile.js
// import React, { useState } from 'react';

// const HospitalUpdateProfile = ({ onUpdateDoctorDetails }) => {
//   const [DoctorName, setDoctorName] = useState('');
//   const [DoctorImage, setDoctorImage] = useState('');
//   const [AboutDoctor, setAboutDoctor] = useState('');

//   const handleDoctorName = (e) => {
//     setDoctorName(e.target.value);
//   };

//   const handleDoctorImage = (e) => {
//     setDoctorImage(e.target.value);
//   };

//   const handleAboutDoctor = (e) => {
//     setAboutDoctor(e.target.value);
//   };

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();

//     if (DoctorName === '' || DoctorImage === '' || AboutDoctor === '') {
//       alert('Fill in all the required information!');
//     } else {
//       try {
//         // Assume you have an API endpoint for posting doctor details
//         const response = await fetch('http://localhost:8080/postDoctorProfile', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             doctorName: DoctorName,
//             doctorImage: DoctorImage,
//             aboutDoctor: AboutDoctor,
//           }),
//         });

//         if (response.ok) {
//           alert('Profile posted successfully');
//           onUpdateDoctorDetails({
//             DoctorName,
//             Immage: <img src={DoctorImage} alt={DoctorName} />,
//             AboutDoctor,
//             link: 'https://example.com', // Provide the correct link
//           });
//           // Optionally, you can clear the form fields
//           setDoctorName('');
//           setDoctorImage('');
//           setAboutDoctor('');
//         } else {
//           alert('Failed to post profile. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error during profile post:', error);
//         alert('An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <form className="update-form">
//       <input
//         type="text"
//         className="upd-input"
//         onChange={handleDoctorName}
//         value={DoctorName}
//         placeholder="Enter DoctorName"
//       />
//       <label id="upd-lable">Select Photo: </label>
//       <input
//         type="file"
//         className="upd-input"
//         onChange={handleDoctorImage}
//         value={DoctorImage}
//         placeholder="Enter DoctorImage"
//       />
//       <label id="upd-lable">About Doctor:</label>
//       <textarea
//         className="upd-textarea"
//         rows="4"
//         cols="30"
//         value={AboutDoctor}
//         onChange={handleAboutDoctor}
//       />
//       <button id="upd-btn" type="submit" onClick={handleUpdateProfile}>
//         Post Profile
//       </button>
//     </form>
//   );
// };

// export default HospitalUpdateProfile;



