import React from 'react';
import './SplitBox.css';
import adwords from './adwords-screenshot.png';
import bossel from './dr-bossel-monitor-iphone.png'
import vluxe from './vluxe-phone-and-monitor.png'

const SplitBox = () => {
  return (
    <div className="split-box">
      <div className="split-box-item item-1">
        <h2>App & Web Development</h2>
        <img class="glow-image" src={vluxe} alt="Image 1" />
        <button class="click-here"><a class="button-1" href="/portfolio">Projects</a></button>
      </div>
      <div className="split-box-item item-2">
        <h2 className="second-header" style={{paddingLeft: "50px", paddingRight: "50px"}}>Marketing Services</h2>
        <img class="glow-image" src={adwords} alt="Image 2" />
        <button class="click-here"><a class="button-1" href="/results">Results</a></button>
      </div>
    </div>
  );
};

export default SplitBox;
