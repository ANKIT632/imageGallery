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
import DarkIcon from '../icons/moon.png'
import SunIcon from '../icons/sun.png'
import CloseButton from 'react-bootstrap/CloseButton';
import searchIcon1 from '../image/search1.png'



function NAVBAR() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode);
    const blur = useSelector((state) => state.showPop);
    const NavFlag = useSelector((state) => state.NavFlag);

   
// update data on search
    const update = (e) => {
     
        if (e.key === 'Enter') { 
            e.preventDefault();
            dispatch(searchUpdateData(e.target.value));
            dispatch({ type: 'setSearchVal', payload: e.target.value });
            e.target.blur();
        }

    }

    const toggleMode = () => {
        dispatch({ type: 'TOGGLE_MODE', payload: !mode });
    }

    const toggleNav = () => {
        dispatch({ type: 'NAV_TOOGLE', payload: !NavFlag });
    }

    if (!NavFlag)
        return (

            <Navbar
                expand="lg"
                id='NavBar'
                style={mode ? { backgroundColor: "white", color: "#1d1c1c" } : { backgroundColor: "#1d1c1c", color: "white" }} sticky='top'>
                <Container id='NavCon'>
                    <Link to='/' className="NavTittle" style={mode ? { color: "#1d1c1c" } : { color: "white" }}>Image Gallery</Link>

                    
                        <input id={mode ? "navSearch" : "navSearchActive"} className="NavSearchClass" type='text' placeholder='Search Image Here' onKeyUpCapture={(event)=>update(event)} />
                    

                    <img className='searchIcon' src={searchIcon1} alt='search' onClick={toggleNav} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "white" }} />

                    <Navbar.Collapse id="basic-navbar-nav" style={mode ? { backgroundColor: "white", width: "0px", color: "#1d1c1c" } : { backgroundColor: "#1d1c1c", color: "white", width: "0px" }}>
                        <Nav className="me-auto" id={blur ? "setPointer" : " "} >

                            <Link to='/Explore' className='NavEl' style={mode ? { color: "#1d1c1c" } : { color: "white" }}>Explore</Link>
                            <Link to="/Collection" className='NavEl' style={mode ? { color: "#1d1c1c" } : { color: "white" }}>Collection</Link>
                            <Link to="/Community" className='NavEl' style={mode ? { color: "#1d1c1c" } : { color: "white" }}>Community</Link>
                        </Nav>


                        {
                            mode ? <img className='NavCheck' src={SunIcon} alt='DarkMode' onClick={toggleMode} /> : <img className='NavCheck' src={DarkIcon} alt='LiteMode' onClick={toggleMode} />
                        }


                    </Navbar.Collapse>

                </Container>
            </Navbar>

        );
    else return (<div className='PopSearchContainer'><Form className="d-flex">

        {/* pop search */}

        <input  id={mode ? "navSearch" : "navSearchActive"} className="PopSearch" type='text' placeholder='Search Image Here' onKeyDownCapture={update} />
    </Form>
        <CloseButton id='closeSearch' onClick={toggleNav} />
    </div>)
}


export default NAVBAR;
