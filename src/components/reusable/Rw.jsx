import { Col } from "react-bootstrap"

const Rw = ({img,title}) => {
  
    
    
    return (
        <>
            <Col lg={6}>
                <div className='design'>
                    <img src={img} alt="" />
                    <h3> {title}</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
            </Col>
        </>
    )
}

export default Rw