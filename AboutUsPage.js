
import React from 'react'
import { Link } from 'react-router-dom';
import '../ComponentsCSS/AboutUsPage.css';
import Clinec from '../immagess/dranil.jpg'
import Primary from '../immagess/drbelehalli.jpg'
import Emergency from '../immagess/drlatha.jpg'
import Blood from '../immagess/drdinesh.jpg'
// import Appointment from './applogo.png'

const AboutourDoctors = [
  {
    id: 1,
    Name: 'Dr. Anil Kumar R',
    Immage: <img src={Clinec} alt='Kumar'id='kumar' />,
    AboutDoctor: 'MBBS, MD, FRCP (Edinburgh), FICP,FRSSDI, WHO Fellowship in Diabetology',
    link: "https://kierbengaluru.karnataka.gov.in/uploads/media_to_upload1674449693.pdf",
  },
  {
    id: 2,
    Name: 'Dr. Belehalli Pavan',
    Immage: <img src={Primary} alt='Pavan' id='pavan'  />,
    AboutDoctor: 'MBBS, DNB-Orthopaedics,Mch - Orthopaedics, MNAMS',
    link: "https://kierbengaluru.karnataka.gov.in/uploads/media_to_upload1673069723.pdf",
  },
  {
    id: 3,
    Name: 'Dr. Lalitha R',
    Immage: <img src={Emergency} alt='Latha' id='latha' />,
    AboutDoctor: 'MBBS, MD (Internal Medicine), SCE (RCP UK),PGD (Cardiff University, UK),PGD (Diabetes and Clinical Endo) RCP, UK',
    link: "https://kierbengaluru.karnataka.gov.in/uploads/media_to_upload1672304307.pdf",
  },
  {
    id: 4,
    Name: '	Dr. Dinesh R.B',
    Immage: <img src={Blood} alt='Dinesh' id='dinesh' />,
    AboutDoctor: 'MBBS, DOMS, DNB, MNAMS, FPEC',
    link: "https://kierbengaluru.karnataka.gov.in/uploads/media_to_upload1675054113.pdf",
  },
]
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

