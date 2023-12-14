import React, { useEffect } from 'react';
import $ from 'jquery';
import './Results.css';

const Results = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('#fade-in-heading').animate({ opacity: 1 }, 1000); // Adjust the duration as needed
    });
  }, []);

  return (
    <div className="results-bg">
      <h2 id="fade-in-heading" style={{ fontFamily: 'Montserrat', fontSize: '30px', opacity: 0,}}>
        Coming Soon
      </h2>
    </div>
  );
};

export default Results;
