import './project.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import card from '../../assets/card.png'
import card2 from '../../assets/card3.png'
import card3 from '../../assets/card2.png'
const Project = () => {
    return (
        <>
            <section id='prject-main'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className='ourPro'>
                                <h1>View our projects</h1>
                            </div>
                        </Col>
                        <Col lg={{ span: 2, offset: 5 }}>
                            <div className='view'>
                                <a href="#">View More <FaArrowRightLong /></a>
                            </div>
                        </Col>
                    </Row>
                    <Row className='top01'>
                        <Col lg={8} className='poo'>
                            <div className='card01'>
                                <img src={card} alt="" />
                            </div>
                            <div className='overl'>
                                <h2>Workhub office Webflow Webflow Design</h2>
                                <a href="#">View project <FaArrowRightLong /></a>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Row>
                                <Col lg={12} className='poo1'>
                                    <div className='card02'>
                                        <img src={card2} alt="" />
                                    </div>
                                    <div className='overl01'>
                                        <a href="#">View portfolio  <FaArrowRightLong /></a>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className='card03'>
                                        <img src={card3} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Project