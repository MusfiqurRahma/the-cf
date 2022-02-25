import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bulletImg from '../../../image/football-website-image/Ellipse 228.png';
import './Registered.css';
import registeredImg from '../../../image/football-website-image/Rectangle 2748.png';

const Registered = () => {
    return (
        <div>
            <Container>
             <Row>
                    <Col xs={12} md={6} className='registered-container'>
                        <h3>Registered intermediaries</h3>
                        <div style={{
                            display: 'flex',
                            marginBottom: '20px',
                            fontFamily: 'poppins',
                            fontSize:'14px'
                        }}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi ante quis vitae  quam scelerisque consectetur in eu. Turpis euismod enim sit dictumst blandit.Vulputate gravida ultricies dictum in integer nibh scelerisque vel.</p>
                       </div>
                        <div style={{
                            display: 'flex',
                            fontFamily: 'poppins',
                            fontSize: '14px'
                        }}>
                        <img src={bulletImg} alt="" style={{width:'20px',height:'20px',marginTop:'10px'}}/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi ante quis vitae  quam scelerisque consectetur in eu.</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            fontFamily: 'poppins',
                            fontSize: '14px'
                        }}>
                        <img src={bulletImg} alt="" style={{width:'20px',height:'20px',marginTop:'10px'}}/> <p>Lörem ipsum denat faktaresistens i ritonade med isam.Van dumpling till liss.</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            fontFamily: 'poppins',
                            fontSize: '14px'
                        }}>
                            <img src={bulletImg} alt="" style={{ width: '30px', height: '20px', marginTop: '10px' }} /> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi ante quis vitae  quam scelerisque consectetur in eu.</p>
                        </div>
                        <div class="banner-btn" style={{textAlign:'left'}}>
                <a href=''>Join Now</a>
                </div>
                    </Col>
                    <Col className='registeredImg'>
                        <img src={registeredImg} alt="" />
                    </Col>
             </Row>
             </Container>
        </div>
    );
};

export default Registered;