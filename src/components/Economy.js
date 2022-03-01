import React from 'react';
import './Welcome.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import econ from '../images/econ.png'
import harold from '../images/harold.png'

import Header from './Header';
import HR from './Divider';

const Economy = () => {
    return (
        <>
            <HR />
            <Container id="Econ" className="section-container">
                <Row>
                    <Col xs={11} md={7}>
                        <Header heading="Economy System"
                            content={["The Sewers is a underground society filled with lazy, bored and hungover animals including our beloved hedgehogs.",
                                "Our economy system allows members to !work for precious $THRON, play games and gamble with $THORN in our very own club 'The Hedge' and buy various items from Harold's Scrap Shop, unless of course you spent in on alcohol... ",
                                "Members are able to spend their hard earned $THORN to get: Whitelist Spots, FREE Mint Passes, Raffle Tickets and much more items to come!"]}
                        />
                        <Image width="100%" src={econ} style={{ borderRadius: "12px", marginTop: "16px", marginBottom: "16px" }} />
                    </Col>
                    <Col xs={7} md={5}>
                        <Image style={{ maxWidth: "100%", borderRadius: "3%" }} src={harold} />
                    </Col>
                </Row>

                {/* <Col><Image width="100%" src={welcome_1} /></Col> */}
            </Container >
        </>
    )
}

export default Economy;