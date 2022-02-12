import React from 'react';
import './Roadmap.css'
import { Container, Row, Col, Alert, ListGroup, Badge } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

const RoadmapItem = (props) => {
    return (
        <>
            <div style={{ borderColor: "var(--accent)", borderStyle: "solid", borderWidth: "1px", borderRadius: "5px" }}>
                <Alert variant="none" style={{ marginBottom: 0 }} text="white">
                    <Row>
                        <Col md={2} lg={2} className="my-auto percent-box">
                            <h1 className="percent heading">
                                {props.n}
                            </h1>
                        </Col>
                        <Col>
                            <ListGroup variant="flush">
                                {props.item_1 && <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><Badge bg="success" text="black">1</Badge>{' '}{props.item_1}</ListGroup.Item>}
                                {props.item_2 && <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><Badge bg="success" text="black">2</Badge>{' '}{props.item_2}</ListGroup.Item>}
                                {props.item_3 && <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><Badge bg="success" text="black">3</Badge>{' '}{props.item_3}</ListGroup.Item>}
                                {props.item_4 && <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><Badge bg="success" text="black">4</Badge>{' '}{props.item_4}</ListGroup.Item>}
                                {props.item_5 && <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><Badge bg="success" text="black">5</Badge>{' '}{props.item_5}</ListGroup.Item>}
                                {props.item_6 && <ListGroup.Item style={{ backgroundColor: "#000", color: "white" }} variant="dark"><Badge bg="success" text="black">6</Badge>{' '}{props.item_6}</ListGroup.Item>}
                            </ListGroup>
                        </Col>
                    </Row>
                </Alert>
            </div>
            <br />
        </>
    )
}

const Roadmap = () => {
    return (
        <>
            <HR />
            <Container id="Roadmap" className="section-container">
                <Header
                    heading="The Roadmap"
                    content={[""]}
                />

                <RoadmapItem
                    n="25%"
                    item_1="5,555 Genesis Hedgehogs Launch"
                    item_2="Daily giveaways for our community"
                    item_3="Aggressive advertising campaign, giving away whitelist spots to early supporters"
                    item_4="Sold Out and listing on secondary marketplaces (Opensea)"
                    item_5="Distribute HHC NFTs to the giveaway winners after public sale complete"
                    item_6="Prizes of up to $3000 in ETH for lucky holders who mint 1 of the 10 WANTED hedgehogs"
                />
                <RoadmapItem
                    n="50%"
                    item_1="Celebrity and Influencer promotions after sell out"
                    item_2="Crypto whales brought in to sweep the floor and raise the value of our hedgehogs"
                    item_3="Announcement of $THORN token of which a large percentage will be reserved for HHC holders. $THORN can even be used to purchase upcoming merchandise"
                    item_4="A Defi platform will be created that will work integrated with our token and NFT collections"
                    item_5="Listing in exchanges"
                />
                <RoadmapItem
                    n="75%"
                    item_1="4,444 Hungover Foxes will be introduced as a second collection to the genesis hedgehogs and HHC holders who own at least 5 hungover hedgehogs will be granted 1 free mint pass with holders of under 5 being granted a free whitelist pass. (Production for this collection has already started)"
                />
                <RoadmapItem
                    n="100%"
                    item_1="Community wallet / Liquidity pool / Metaverse land"
                    item_2="Over 50 ETH will be added to the community wallet, and the liquidity pool will be initialized"
                    item_3="Purchase of metaverse land for community where we will begin development of the Hungover Hedgehog Nightclub where holders will be able to meet up and have conversations with one another while completing missions to conquer different territories in the sewers"
                />

            </Container >
        </>
    )
}

export default Roadmap;