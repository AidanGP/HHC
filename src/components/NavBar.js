import React from 'react';
import './NavBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
// import hhc_logo_1 from '../images/hhctest3.png';
// import hhc_logo_2 from '../images/hhctest2.png';

import discord from '../images/navbar_icons/discord-line.png';
import twitter from '../images/navbar_icons/twitter-line.png';
import instagram from '../images/navbar_icons/instagram-line.png';

const NavBar = () => {
    return (

        <Navbar className="nav-main" expand="lg" style={{ backgroundColor: "var(--bg)" }} variant="dark" >

            <Container>
                <Navbar.Brand className="heading-2" style={{ color: "var(--accent)" }}>Hungover Hedgehog Club</Navbar.Brand>
                {/* <Image className="nav-logo" variant="top" src={hhc_logo_1} /> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link style={{ paddingRight: "1.5vw", color: "white" }} href="#About">about</Nav.Link>
                        <Nav.Link style={{ paddingRight: "1.5vw", color: "white" }} href="#Roadmap">roadmap</Nav.Link>
                        <Nav.Link style={{ paddingRight: "1.5vw", color: "white" }} href="#Team">team</Nav.Link>
                        <Nav.Link style={{ paddingRight: "1.5vw" }} href="#" disabled>mint</Nav.Link>

                        <Nav.Link href="https://www.discord.gg/Xcscqsh7cD" target="_blank" rel="noopener noreferrer">
                            <img
                                src={discord}
                                width="24"
                                height="24"
                                className="d-inline-block align-center"
                                alt="Discord Link"
                            />
                        </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/hungoverhedgehogclub/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={instagram}
                                width="24"
                                height="24"
                                className="d-inline-block align-center"
                                alt="Instagram Link"
                            />
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/HHClubNFT" target="_blank" rel="noopener noreferrer">
                            <img
                                src={twitter}
                                width="24"
                                height="24"
                                className="d-inline-block align-center"
                                alt="Twitter Link"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >

    )
}

export default NavBar;