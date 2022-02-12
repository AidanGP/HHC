import React from 'react';
import './Welcome.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import welcome_1 from '../images/welcome_icons/1.png';
import welcome_2 from '../images/welcome_icons/2.png';
import welcome_3 from '../images/welcome_icons/3.png';

import Header from './Header';
import HR from './Divider';

const Economy = () => {
    return (
        <>
            <HR />
            <Container id="Econ" className="section-container">
                <Row>
                    <Col xs={10} md={6}>
                        <Row>
                            <Header heading="Economy System"
                                content={["The Hungover Hedgehogs Club is a collection of 5,555 NFTs with a unique style of art never before seen in other NFT collections. With over 150 different traits, an insane backstory and our unique style of vector art, our project and community stands out above many others.",
                                    "HHC's $THORN token is also set to launch soon after mint, holders will be able to purchase HHC merchandise as well as purchase whitelist passes for future Hungover projects and more.",
                                    "The discord server launched yesterday and their whitelist has just opened up with 100/755 WL spots already taken in the first 2 hours! DONT MISS OUT ON THIS OPPORTUNITY!!"]}
                            />
                        </Row>
                        <Row>
                            <Col><Image className="econ-img" src={welcome_1} /></Col>
                            <Col><Image className="econ-img" src={welcome_2} /></Col>
                            <Col><Image className="econ-img" src={welcome_3} /></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Image src={welcome_1} style={{ minHeight: "100%" }} />
                        </Row>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Economy;