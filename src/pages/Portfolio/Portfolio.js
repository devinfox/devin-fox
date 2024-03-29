import React, { useState } from 'react';
import Modal from 'react-modal';
import './Portfolio.css'; // You can style this as needed
import AboutText from '../../components/AboutText/AboutText';
import tamariskImage from './tamarisk-1920.jpg';
import barberImage from './american-barbershop.jpg';
import discoDisiac from './discodisiac-screenshot.jpg';
import miracleMile from './miracle-mile.jpg';
import vluxe from './vma-1920x1080.jpg';
import bossel from './dr-bossel.jpg';


const projects = [
    {
        id: 1,
        title: 'Vluxe Modern Aesthetics by Nursing',
        image: vluxe,
        description: `
        At VLUXE, we collaborated with a forward-thinking medspa dedicated to ethical practices and client education. They prioritize staying ahead in the ever-evolving aesthetics industry, providing comprehensive support and knowledge to empower clients in making informed decisions. Their commitment to fostering trust-based relationships and staying abreast of modern beauty standards ensures a personalized and contemporary experience for every client.
      `,
        websiteLink: 'https://vmabynursing.com/',
      },
      {
        id: 2,
        title: 'Miracle Mile Medical Group',
        image:  miracleMile,
        description: `
        Revitalizing Miracle Mile Medical Group's online presence was a rewarding journey. Tasked with creating a platform that reflects their commitment to compassionate healthcare, WordPress emerged as the ideal solution. Leveraging its versatility, I brought to life a user-friendly site that emphasizes the warmth and excellence of their services.
      
        The WordPress-powered site stands as a digital testament to Miracle Mile Medical Group's mission. It seamlessly integrates renowned specialists and prioritizes the physician-patient relationship, providing an inviting online space for patients.
      
        This project was driven by a dedication to care, kindness, and compassion. By choosing WordPress, we ensured that the digital experience aligns with the values of the medical group — a commitment to the community's well-being and the thriving success of their practice.
      `,
        websiteLink: 'https://miraclemilemedicalgroup.com/',
      },
      {
        id: 3,
        title: 'ToothDoctorLA',
        image: bossel,
        description: `
        ToothDoctorLA, led by Dr. Jennifer Bossel, is dedicated to perfecting smiles and enhancing oral health. Dr. Bossel understands the profound impact a smile can have on first impressions, which drives her commitment to helping patients achieve their ideal smiles. With expertise honed through years of practice, she blends artistry and science to deliver exceptional dental care. Dr. Bossel's multicultural background enriches her approach, as she fluently communicates with patients in French, Spanish, Arabic, and Hebrew. Beyond dentistry, her passion for horseback riding and show jumping underscores her dedication and determination, qualities reflected in the personalized care provided at ToothDoctorLA.
      `,
        websiteLink: 'https://toothdoctorla.com',
      },
      {
        id: 4,
        title: 'DiscoDisiac',
        image: discoDisiac,
        description: `
        Welcome to Discodisiac, a vibrant Shopify-powered fashion haven dedicated to Slow Fashion. 
        Our site showcases completely handmade, one-of-a-kind pieces designed to last a lifetime. 
        Join the movement in 2023, step away from fast fashion, and explore our unique collection 
        curated for those who seek standout style with a conscience. Built with Shopify, our digital 
        space mirrors the craftsmanship and uniqueness of our handmade pieces. It's more than a 
        shopping destination; it's an invitation to embrace sustainable and enduring fashion.
      `,
        websiteLink: 'https://discodisiac.com/',
      },
  {
    id: 5,
    title: 'American Barbershop',
    image: barberImage,
    description: 'Experience the perfect blend of tradition and style on our Shopify-powered barbershop website. Serving multiple locations in OC, Santa Ana, Echo Park, Los Angeles, and Old Town Orange, our site showcases classic cuts and indulgent hot towel straight razor shaves. Built on Shopify, it seamlessly combines the timeless charm of a traditional barbershop with the convenience of online accessibility.',
    websiteLink: 'https://www.americanbarbershop.com',
  },
  {
    id: 6,
    title: 'Tamarisk Business Advisors',
    image: tamariskImage,
    description: 'Our mission was to translate the essence of Tamarisk Business Advisors into a digital experience. Through WordPress, we brought to life their commitment to a holistic and collaborative advisory approach. Our goal was to create a platform that mirrors their dedication to helping businesses thrive, protect legacies, and uphold timeless values. Explore the website to gain insights into its strategic vision, mission, and values. We are honored to have played a role in bringing their unique advisory services to the online world.',
    websiteLink: 'https://www.tamariskadvisors.com',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container">
       <AboutText />
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item" onClick={() => openModal(project)}>
            <div className="image-container">
            <img className="portfolio-image" src={project.image} alt={project.title} />
            <div className="overlay-text">
            <h2 style={{fontWeight: "300", fontSize: "25px"}}>{project.title}</h2>
            <p style={{zIndex: "900", fontWeight: "400",}}>View Project</p>
            </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedProject && (
          <>
            <div className="top-bar"><h2>{selectedProject.title}</h2><button onClick={closeModal}>X</button></div>
            <img className="project-preview"src={selectedProject.image}></img>
            <p>{selectedProject.description}</p>
            <a className="view-site" href={selectedProject.websiteLink} target="_blank" rel="noopener noreferrer">
              View Site
            </a>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;
