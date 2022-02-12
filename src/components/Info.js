import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

import wanted from '../images/info_icons/wanted.png';
import coin from '../images/info_icons/coin.png';
import merch from '../images/info_icons/merch.png';
import access from '../images/info_icons/access.png';
import events from '../images/info_icons/events.png';
import metaverse from '../images/info_icons/metaverse.png';

const InfoItem = (props) => {
    return (
        <Col>
            <Card border="success" style={{ borderWidth: "0px", borderRadius: "3%", minHeight: '100%', backgroundColor: "var(--bg)" }} text="white">
                <Card.Body align="center">
                    <Card.Img style={{ maxWidth: "10vw", marginBottom: "1vh" }} variant="bottom" src={props.src} />
                    <Card.Text align="center">
                        {props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

const Info = () => {
    return (
        <>
            <HR />
            <Container id="Info" className="section-container">
                <Header
                    heading="Club Info"
                    content={["By holding a Hungover Hedgehog, you’re not just buying an insanely awesome PFP to flex to your friends. No, with your Hedgehog you gain access to an exclusive club which provides TONS of benefits and utilities. Your Hungover Hedgehog can act as your digital identity, and open countless opportunities. Here's some of our crazy utilities that you will receive just by holding a Hungover Hedgehog:"]}
                />
                <Row>
                    <InfoItem border="warning" src={wanted}
                        content="Over $40,000 in prizes for WANTED Hedgehogs"
                    />
                    <Col xs={1}>
                    </Col>
                    <InfoItem border="danger" src={coin}
                        content="$THORN utility token"
                    />
                    <Col xs={1}>
                    </Col>
                    <InfoItem border="info" src={merch}
                        content="Free HHC Merchandise"
                    />
                </Row>
                <br />
                <Row>
                    <InfoItem border="primary" src={access}
                        content="Exclusive Mint Access to future Hungover Projects"
                    />
                    <Col xs={1}>
                    </Col>
                    <InfoItem border="success" src={events}
                        content="Holder only invites to Luxury Bars & Events across the world"
                    />
                    <Col xs={1}>
                    </Col>
                    <InfoItem border="light" src={metaverse}
                        content="Access to Metaverse HHC Land & Future Games"
                    />
                </Row>
            </Container >
        </>
    )
}

export default Info;