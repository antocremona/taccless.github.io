import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logotaccless.png';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


export const NavBar = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Tacc Less
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#productos">Productos</Nav.Link>
                            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
