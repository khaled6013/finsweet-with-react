import './solves.css'
import { Container,Row,Col } from 'react-bootstrap'
import icon from '../../assets/icon.png'
import icon1 from '../../assets/icon (1).png'
import icon2 from '../../assets/icon (2).png'
import icon3 from '../../assets/icon (3).png'
import icon4 from '../../assets/icon (4).png'
import icon5 from '../../assets/icon (5).png'
import Solvesreusable from '../reusable/Solvesreusable'

const Solves = () => {
  return (
   <>
     <section id='solves-main'>
       <Container>
         <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <div className='features-text'>
                <p>Features</p>
                <h2>Design that solves problems, one product at a time</h2>
              </div>
            </Col>
         </Row>
         <Row className='top02'>
           <Solvesreusable pic={icon} title="Uses Client First" ></Solvesreusable>
           <Solvesreusable pic={icon1} title="Two Free Revision Round"></Solvesreusable>
           <Solvesreusable pic={icon2} title="Template Customization"></Solvesreusable>
           <Solvesreusable pic={icon3} title="24/7 Support"></Solvesreusable>
           <Solvesreusable pic={icon4} title="Quick Delivery"></Solvesreusable>
           <Solvesreusable pic={icon5} title="Hands-on approach"></Solvesreusable>
         </Row>
       </Container>
     </section>
   </>
  )
}

export default Solves