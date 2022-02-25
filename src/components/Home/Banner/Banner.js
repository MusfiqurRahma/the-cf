import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
       <div id="banner">
        <div class="banner-text">
                <h2>Egestas faucibus est ac a pretium <br /> aliquam feugiat.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nunc <br />
                enim, libero, pellentesque. </p>
          <div class="banner-btn">
                <a href=''>Join Now</a>
                </div>
            </div>
        </div>
            <div className='arrow'>
            <i className="fa-solid fa-left-long"></i>
            <i className="fa-solid fa-arrow-right-long"></i>
       </div>
        </div>
    );
};

export default Banner;