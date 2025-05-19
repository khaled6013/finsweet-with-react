import './jenny.css'
import { Container,Row,Col } from 'react-bootstrap'
import jeny from '../../assets/jenny.png'

const Jenny = () => {
  return (
    <>
      <section id='jenny-main'>
       <Container>
        <Row>
            <Col lg={4}>
              <div className='client'>
                 <h2>What our clients say about us</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
              </div>
            </Col>
            <Col lg={{ span: 7, offset: 1 }}>
              <div className='wilson'>
                <h2>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>
              </div>
              <Row className='top03'>
                <Col lg={1}>
                <img src={jeny} alt="" />
                </Col>
                <Col lg={3}>
                  <div className='jenny-Wilson'>
                    <h4>Jenny Wilson</h4>
                    <p>Vice President</p>
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

export default Jenny