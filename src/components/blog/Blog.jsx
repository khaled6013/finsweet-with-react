import './blog.css'
import { Container,Row,Col } from 'react-bootstrap'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import Blogreusable from '../reusable/Blogreusable';

const Blog = () => {
  return (
    <>
        <section id='blog-main'>
         <Container>
            <Row>
                <Col lg={3}>
                  <div className='ourBlog'>
                   <h2>Our blog</h2>
                  </div>
                </Col>
            </Row>
            <Row className='top99'>
               <Blogreusable img={blog1}></Blogreusable>
               <Blogreusable img={blog2}></Blogreusable>
               <Blogreusable img={blog3}></Blogreusable>
            </Row>
         </Container>
        </section>
    </>
  )
}

export default Blog