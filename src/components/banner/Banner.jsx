import { Col, Row, Container, Form } from "react-bootstrap"
import './banner.css'
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <>
            <section id="banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="left-text">
                                <h2>Building stellar websites for early startups</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            <div className="left-btn">
                                <a href="#">View our work</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="right-img">
                                <img src={banner} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner