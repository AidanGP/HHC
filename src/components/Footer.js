import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Header from './Header'

import discord from '../images/navbar_icons/discord-line.png';
import twitter from '../images/navbar_icons/twitter-line.png';
import instagram from '../images/navbar_icons/instagram-line.png';

const Footer = () => {
    return (
        <>
            <Container style={{ paddingTop: "8vh" }} align="center">
                <Header
                    heading="HHC"
                    content={[""]}
                />
            </Container>

            <Navbar style={{ backgroundColor: "var(--bg)" }} variant="light">

                <Container style={{ padding: "4vh 0" }}>

                    <Nav className='m-auto'>

                        <Nav.Link style={{ padding: "0 1vw" }} href="https://www.discord.gg/Xcscqsh7cD" target="_blank" rel="noopener noreferrer">
                            <img
                                src={discord}
                                width="30"
                                height="30"
                                className="d-inline-block align-center"
                                alt="Discord Link"
                            />
                        </Nav.Link>
                        <Nav.Link style={{ padding: "0 1vw" }} href="https://www.instagram.com/hungoverhedgehogclub/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={instagram}
                                width="30"
                                height="30"
                                className="d-inline-block align-center"
                                alt="Instagram Link"
                            />
                        </Nav.Link>
                        <Nav.Link style={{ padding: "0 1vw" }} href="https://twitter.com/HHClubNFT" target="_blank" rel="noopener noreferrer">
                            <img
                                src={twitter}
                                width="30"
                                height="30"
                                className="d-inline-block align-center"
                                alt="Twitter Link"
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar >
        </>
    )
}

export default Footer;