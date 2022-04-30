import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink, Outlet } from 'react-router-dom'
import '../App.css';
import Img from '../assets/6.png'

const Layout = () => {
  return (
    <main>
        <Navbar className="color-nav" variant="light">
            <Container>
                <Navbar.Brand>
                    <NavLink to='/home' className="layout-logo"><img src={Img}></img></NavLink>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/home/logros">Logros</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/home/amigos">Amigos</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <div>Salir <i className="bi bi-box-arrow-right"></i></div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>
    </main>
  )
}

export default Layout;