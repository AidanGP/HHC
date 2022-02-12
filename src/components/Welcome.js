import React from 'react';
import './Welcome.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import welcome_1 from '../images/welcome_icons/1.png';
import welcome_2 from '../images/welcome_icons/2.png';
import welcome_3 from '../images/welcome_icons/3.png';
import welcome_4 from '../images/welcome_icons/4.png';

import discord from '../images/navbar_icons/discord-line.png';

import Header from './Header';
import HR from './Divider';

const Welcome = () => {
    return (
        <>
            <HR />
            <Container id="About" className="section-container">
                <Row>
                    <Col xs={12} md={8}>
                        <Header heading="Welcome to the Hungover Hedgehogs Club"
                            content={["The Hungover Hedgehogs Club is a collection of 5,555 NFTs with a unique style of art never before seen in other NFT collections. With over 150 different traits, an insane backstory and our unique style of vector art, our project and community stands out above many others.",
                                "HHC's $THORN token is also set to launch soon after mint, holders will be able to purchase HHC merchandise as well as purchase whitelist passes for future Hungover projects and more.",
                                "The discord server launched yesterday and their whitelist has just opened up with 100/755 WL spots already taken in the first 2 hours! DONT MISS OUT ON THIS OPPORTUNITY!!"]}
                        />
                        <Button
                            href="https://www.discord.gg/Xcscqsh7cD"
                            className="disc-btn"
                        >
                            <img
                                src={discord}
                                width="20"
                                height="20"
                                className="d-inline-block align-center"
                                alt="Discord Link"
                            />
                            <strong> DISCORD</strong>
                        </Button>
                    </Col>
                    <Col xs={6} md={4}>
                        <Row>
                            <Col><Image className="top-row-img" src={welcome_1} /></Col>
                            <Col><Image className="top-row-img" src={welcome_2} /></Col>
                        </Row>
                        <Row>
                            <Col><Image className="bottom-row-img" src={welcome_3} /></Col>
                            <Col><Image className="bottom-row-img" src={welcome_4} /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Welcome;