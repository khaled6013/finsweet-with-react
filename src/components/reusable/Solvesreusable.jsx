import { Col } from "react-bootstrap"


const Solvesreusable = ({pic,title}) => {
    return (
        <>
            <Col lg={4}>
                <div className='uses'>
                    <img src={pic} alt="" />
                    <h3>{title}</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
            </Col>
        </>
    )
}

export default Solvesreusable