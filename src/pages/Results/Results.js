// Results.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import AboutText from '../../components/AboutText/AboutText';
import discoDisiac from './discodisiac-screenshot.jpg';
import barberImage from './american-barbershop.jpg';
import tamariskImage from './tamarisk-1920.jpg';
import miracleMile from './miracle-mile.jpg';
import './Results.css'; // Style this as needed

// const projects = [
//   {
//     id: 1,
//     title: 'DiscoDisiac',
//     image: discoDisiac,
//     description: 'Brief explanation of Project 1.',
//     websiteLink: 'www.discodisiac.com',
//   },
//   {
//     id: 2,
//     title: 'American Barbershop',
//     image: barberImage,
//     description: 'Brief explanation of Project 2.',
//     websiteLink: 'www.americanbarbershop.com',
//   },
//   {
//     id: 3,
//     title: 'Tamarisk Business Advisors',
//     image: tamariskImage,
//     description: 'Brief explanation of Project 3.',
//     websiteLink: 'www.tamariskadvisors.com',
//   },
//   {
//     id: 4,
//     title: 'Miracle Mile Medical Group',
//     image: miracleMile,
//     description: 'Brief explanation of Project 4.',
//     websiteLink: 'www.miraclemilegroup.com',
//   },
//   // Add more projects as needed
// ];

// const Results = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <div className="results-container">
//       <AboutText />
//       <div className="project-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-item" onClick={() => openModal(project)}>
//             <div className="image-container">
//               <img className="results-image" src={project.image} alt={project.title} />
//               <div className="overlay-text">
//                 <h2 style={{ fontWeight: "300", fontSize: "30px" }}>{project.title}</h2>
//                 <p style={{ zIndex: "900", fontWeight: "400" }}>View Results</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Modal
//         isOpen={selectedProject !== null}
//         onRequestClose={closeModal}
//         className="modal"
//         overlayClassName="overlay"
//       >
//         {selectedProject && (
//           <>
//             <div className="top-bar">
//               <h2>{selectedProject.title}</h2>
//               <button onClick={closeModal}>X</button>
//             </div>
//             <img className="project-preview" src={selectedProject.image} alt={selectedProject.title} />
//             <p>{selectedProject.description}</p>
//             <a href={selectedProject.websiteLink} target="_blank" rel="noopener noreferrer">
//               View Site
//             </a>
//           </>
//         )}
//       </Modal>
//     </div>
//   );
// };

const Results = () => {
    return (
        <div style={{backgroundColor: "white", padding: "10%",}}>
        <h2 class="coming-soon" style={{fontFamily: "Montserrat", fontSize: "30px",}}>Coming Soon</h2>
        </div>
    )
}
export default Results;
