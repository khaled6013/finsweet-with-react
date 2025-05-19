import './footer.css'
import { Container, Row, Col, } from 'react-bootstrap'
import footerLogo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer id='footer-main'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className='footer-logo'>
                                <img src={footerLogo} alt="" />
                                <p>We are always open to discuss your project and improve your online presence.</p>
                            </div>
                        </Col>
                        <Col lg={{ span: 3, offset: 2 }}>
                            <div className='talk'>
                                <h1>Lets Talk!</h1>
                            </div>
                            <div className='icon-footer'>
                                <FaFacebook className='fb' />
                                <FaTwitter className='x' />
                                <FaInstagram className='insta' />
                                <FaLinkedin className='in' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='top88'>
                        <Col lg={5}>
                            <div className='callus'>
                                <Row>
                                    <Col lg={5}>
                                        <div className='me'>
                                            <h4>Email me at</h4>
                                            <p>contact@website.com</p>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className='us01'>
                                            <h4>Call us</h4>
                                            <p>0927 6277 28525</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className='copy'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className='fin'>
                                <p>Copyright 2022, Finsweet.com</p>
                            </div>
                        </Col>
                        <Col lg={{span:6, offset:3}}>
                          <div className='footer-manu'>
                             <a href="#">Home</a>
                             <a href="#">About us</a>
                             <a href="#">Features</a>
                             <a href="#">Pricing</a>
                             <a href="#">FAQ</a>
                             <a href="#">Blog</a>
                          </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer