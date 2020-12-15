import React from 'react';
import './style/Title.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <LinkContainer to='/'>
                        <Navbar.Brand>REINA TOCHIGI</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="title-items">
                            <LinkContainer to='/'>
                                <Nav.Link>Top</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/profile'>
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/works'>
                                <Nav.Link>Works</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Title;