import React from 'react';
import { useDispatch } from 'react-redux';
import { searchUpdateDate } from '../action/action';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import '../css/navBar.css';


function BasicExample() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode);
 
    const update = (e) => {
        dispatch(searchUpdateDate(e.target.value));
    }

    const toggleMode = () => {
        dispatch({ type: 'TOGGLE_MODE', payload: !mode });
    }

    return (
        
        <Navbar 
            expand="lg"
            style={mode ?  { backgroundColor: "white", color: "#1d1c1c" }:{ backgroundColor: "#1d1c1c", color: "white"}} >
            <Container >
                <Navbar.Brand href="#home" style={mode?{ color: "#1d1c1c" }:{ color: "white" }}>Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Form className="d-flex">
                            <input type='text' placeholder='Search Image Here' onChange={update} className="form-control"  style={mode ?  { backgroundColor: "white", color: "#1d1c1c" }:{ backgroundColor: "#1d1c1c", color: "white"}}  />
                        </Form>
                        <Nav.Link href="#home" style={mode?{ color: "#1d1c1c" }:{ color: "white" }}>Explore</Nav.Link>
                        <Nav.Link href="#link" style={mode?{ color: "#1d1c1c"}:{ color: "white" }}>Collection</Nav.Link>
                        <Nav.Link href="#link" style={mode?{ color: "#1d1c1c"}:{ color: "white" }}>Community</Nav.Link>
                    </Nav>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Mode"
                        onClick={toggleMode}
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
}

export default BasicExample;
