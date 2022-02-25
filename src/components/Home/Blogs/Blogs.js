import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blogs.css';
import footbalOne from '../../../image/football-website-image/Group 1000001769.png';
import footbalTwo from '../../../image/football-website-image/Group 1000001770.png';
import footbalThree from '../../../image/football-website-image/Group 1000001768.png';


const Blogs = () => {
    return (
        <div className='blogsContainer'>
            <Container>
            <Row>
              <Col xs={12} md={6} className='blogsText'>
               <h2>Blogs</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum bibendum id purus fermentum dolor cras. Facilisi pretium egestas cras iaculis proin id adipiscing.</p>
                        <div class="blogs-btn">
                        <a href=''>See All</a>
                        </div>
             </Col>
              <Col xs={6} md={3}>
              <img src={footbalOne} alt="" className='fbOne'/> <br /> <br />
              <img src={footbalTwo}  alt="" className='fbTwo'/>
              </Col>
              <Col xs={6} md={3}>
                        <img src={footbalThree} alt="" className='fbThree' />
             </Col>
             </Row>
            </Container>
        </div>
    );
};

export default Blogs;