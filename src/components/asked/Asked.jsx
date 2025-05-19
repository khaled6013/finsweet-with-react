import './asked.css'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
const Asked = () => {
    return (
        <>
            <section id='asked-main'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className='question'>
                                <h2>Frequently asked questions</h2>
                                <a href="#">Contact us for more info</a>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='much'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>  <span className='how'>01</span><h2 className='owh2'>How much time does it take?</h2></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> <span className='how'>02</span><h2 className='owh2'>What is your class naming convention?</h2></Accordion.Header>
                                        <Accordion.Body>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>  <span className='how'>03</span><h2 className='owh2'>How do you communicate?</h2></Accordion.Header>
                                        <Accordion.Body>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header> <span className='how'>04</span><h2 className='owh2'>I have a bigger project. Can you handle it?</h2></Accordion.Header>
                                        <Accordion.Body>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header> <span className='how'>05</span><h2 className='owh2'>What is your class naming convention?</h2></Accordion.Header>
                                        <Accordion.Body>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Asked