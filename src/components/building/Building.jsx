import './building.css'
import { Container,Row,Col } from 'react-bootstrap'
import buildImg from '../../assets/build.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Building = () => {
  return (
    <>
      <section id='building-main'>
        <Container>
            <Row>
                <Col lg={6}>
                  <div className='build-img'>
                    <img src={buildImg} alt="" />
                    <div className='early'>
                      <h2>Building stellar websites for early startups</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                 <div className='send'>
                    <h3>Send inquiry</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <div className='from'>
                            <input type="text" placeholder='Your Name' className='name-main'/>
                            <input type="Email" placeholder='Email' className='emain-main' />
                            <input type="text" placeholder="Paste your Figma design URL" className='url-main' />
                        </div>
                        <div className='send-btn'>
                            <a href="#">Send an Inquiry</a>    
                        </div>
                        <div className='touch'>
                            <a href="#">Get in touch with us <FaArrowRightLong /></a>  
                        </div>
                 </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Building