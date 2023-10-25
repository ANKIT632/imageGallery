import React from 'react';
import { useDispatch } from 'react-redux';
import { searchUpdateDate } from '../action/action';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import '../css/navBar.css';
import {Link} from 'react-router-dom';


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
            style={mode ?  { backgroundColor: "white", color: "#1d1c1c" }:{ backgroundColor: "#1d1c1c", color: "white"}}  sticky='top'>
            <Container >
                <Link to='/' className="NavTittle" style={mode?{ color: "#1d1c1c" }:{ color: "white" }}>Image Gallery</Link>       
                
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Form className="d-flex">

                            <input id={ mode?"navSearch":"navSearchActive"} className="NavSearchClass" type='text' placeholder='Search Image Here' onChange={update}  />
                        </Form>
                        <Link to='/Explore' className='NavEl' style={mode?{ color: "#1d1c1c" }:{ color: "white" }}>Explore</Link>
                        <Link to="/link" className='NavEl' style={mode?{ color: "#1d1c1c"}:{ color: "white" }}>Collection</Link>
                        <Link to="/link" className='NavEl' style={mode?{ color: "#1d1c1c"}:{ color: "white" }}>Community</Link>
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
