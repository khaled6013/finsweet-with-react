import './work.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';
import Rw from '../reusable/Rw';
import pointer from '../../assets/point.png'


const Work = () => {

    return (
        <>
            <section id='work-main'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="left-text-work">
                                <h2>How we work</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div className='left-a'>
                                <a href="#">Get in touch with us <FaArrowRightLong className='leftA' /></a>
                            </div>
                        </Col>
                        <Col lg={{ span: 6, offset: 1 }}>
                            <Row>
                                <Rw img={pointer} title="Strategy" ></Rw>
                                <Rw img={pointer}  title="Wireframing" ></Rw>
                                <Rw img={pointer}  title="Design"></Rw>
                                <Rw img={pointer}  title="Development"></Rw>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Work