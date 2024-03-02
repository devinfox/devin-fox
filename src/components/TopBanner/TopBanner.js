import React, { useState, useEffect } from 'react';
import bannerDesktop from './topBanner-f1.jpg';
import bannerMobile from './topBanner-Mobile-f1.jpg';
import './TopBanner.css';

const TopBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const desktopImage = new Image();
    desktopImage.src = bannerDesktop;

    const mobileImage = new Image();
    mobileImage.src = bannerMobile;

    // Use Promise.all to wait for both images to load
    Promise.all([desktopImage, mobileImage]).then(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className={`top-banner ${isLoaded ? 'fade-in-active' : ''}`}>
      <img
        src={bannerMobile}
        alt="Mobile Banner"
        className={`mobile-image ${isLoaded ? 'fade-in-image' : ''}`}
      />
      <img
        src={bannerDesktop}
        alt="Desktop Banner"
        className={`desktop-image ${isLoaded ? 'fade-in-image' : ''}`}
      />
    </div>
  );
};

export default TopBanner;
