import './manu.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Manu = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar-main">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-item">
                            <Link to={""}>Home</Link>
                            <Link to={"/about"}>About us</Link>
                            <Nav.Link href="#link">Features</Nav.Link>
                            <Nav.Link href="#link">Pricing</Nav.Link>
                            <Nav.Link href="#link">FAQ</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                        </Nav>
                         <div className='contact'>
                        <NavLink>Contact us</NavLink>
                    </div>
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>
        </>
    )
}

export default Manu