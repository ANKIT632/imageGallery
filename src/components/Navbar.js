import React from 'react';
import { useDispatch } from 'react-redux';
import { searchUpdateData } from '../action/action';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import '../css/navBar.css';
import { Link } from 'react-router-dom';


function NAVBAR() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode);
     const blur=useSelector((state)=>state.showPop);
       console.log(blur);
    const update = (e) => {
        dispatch(searchUpdateData(e.target.value));
        dispatch({ type: 'setSearchVal', payload: e.target.value });
    }

    const toggleMode = () => {
        dispatch({ type: 'TOGGLE_MODE', payload: !mode });
    }

    return (

        <Navbar
            expand="lg"
            id='NavBar'
            style={mode ? { backgroundColor: "white" , color: "#1d1c1c"  } : { backgroundColor: "#1d1c1c", color: "white" }} sticky='top'>
            <Container id='NavCon'>
                <Link to='/' className="NavTittle" style={mode ? { color: "#1d1c1c" } : { color: "white" }}>Image Gallery</Link>


                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "white" }} />
                <Navbar.Collapse id="basic-navbar-nav" style={mode ? { backgroundColor: "white", width: "0px", color: "#1d1c1c" } : { backgroundColor: "#1d1c1c", color: "white", width: "0px" }}>
                    <Nav className="me-auto" id={blur?"setPointer":" "} >
                        <Form className="d-flex">

                            <input id={mode ? "navSearch" : "navSearchActive"} className="NavSearchClass" type='text' placeholder='Search Image Here' onChange={update} />
                        </Form>
                        <Link to='/Explore' className='NavEl' style={mode ? { color: "#1d1c1c" } : { color: "white" }}>Explore</Link>
                        <Link to="/Collection" className='NavEl' style={mode ? { color: "#1d1c1c" } : { color: "white" }}>Collection</Link>
                        <Link to="/Community" className='NavEl' style={mode ? { color: "#1d1c1c" } : { color: "white" }}>Community</Link>
                    </Nav>

                    <Form.Check
                        reverse="true"
                        type="switch"
                        className="NavcheckBox"
                        label={mode ? "Dark Mode" : "Light Mode"}
                        onClick={toggleMode}
                        style={mode ? { color: "#1d1c1c" } : { color: "white" }}

                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NAVBAR;
