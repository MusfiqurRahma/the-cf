import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Navs from '../Navs/Navs';
import Registered from '../Registered/Registered';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navs></Navs>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Blogs></Blogs>
            <Registered></Registered>
        </div>
    );
};

export default Home;