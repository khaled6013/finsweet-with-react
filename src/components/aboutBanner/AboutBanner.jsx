import { Container,Row,Col } from "react-bootstrap"
import bannerImg from '../../assets/ok.png'
import './aboutbanner.css'

const AboutBanner = () => {
  return (
    <>
      <section id="about-banner-main">
        <Container>
            <Row>
                <Col lg={5}>
                  <div className="about-solve">
                     <h3>About us</h3>
                     <h2>Our designs solve problems</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                </Col>
                <Col lg={{span:6, offset:1}}>
                <div className="">
                  <img src={bannerImg} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutBanner