import React from 'react';
import { Container, Row, Col, Image, ListGroup, Badge } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

import hedgehogs from '../images/hedgehogs.gif';

const Layers = () => {
    return (
        <>
            <Row>
                <Col xs={4}>
                    <ListGroup>
                        <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><h6><Badge bg="success" text="black">10</Badge>{' '}Backgrounds</h6></ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><h6><Badge bg="success" text="black">21</Badge>{' '}Expressions</h6></ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><h6><Badge bg="success" text="black">18</Badge>{' '}Eyes</h6></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><h6><Badge bg="success" text="black">33</Badge>{' '}Accessories</h6></ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><h6><Badge bg="success" text="black">35</Badge>{' '}Outfits</h6></ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><h6><Badge bg="success" text="black">09</Badge>{' '}Ears</h6></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

const Specs = () => {
    return (
        <>
            <HR />
            <Container id="Specs" className="section-container">
                <Row>
                    <Col xs={12} md={8}>
                        <Header heading="The Details"
                            content={["Each Hungover Hedgehog is completely unique and programmatically generated from over 150 possible attributes, including clothing, headwear and more. All Hedgehogs are cool, but some are rarer than others.",]}
                        />
                        <Layers />
                        <br />
                        <Header
                            content={["The hedgehogs are stored as tokens on the Ethereum blockchain and are hosted on IPFS."]}
                        />
                        {/* <Row>
                            <Col xs={4}>
                                <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><h6><Badge bg="success" text="black">0.05Ξ</Badge>{' '}for the pre-sale</h6></ListGroup.Item>
                            </Col>
                            <Col>
                                <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><h6><Badge bg="success" text="black">0.07Ξ</Badge>{' '}for the public sale</h6></ListGroup.Item>
                            </Col>
                        </Row> */}
                    </Col>
                    <Col xs={6} md={4}>
                        <Image style={{ maxWidth: "100%", borderRadius: "3%" }} src={hedgehogs} />
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Specs;