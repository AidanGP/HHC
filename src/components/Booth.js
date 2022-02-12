import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Button, Alert, Badge } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';

const MemberResponse = (props) => {
    return (
        <div style={{ borderColor: "var(--accent)", borderStyle: "solid", borderWidth: "1px", borderRadius: "5px" }}>
            <Alert variant="none" style={{ marginBottom: 0 }} text="white">
                <h1 className="heading" style={{ fontSize: "24px" }}>{(props.member) ? "Welcome to The Booth" : "Join the Club"}</h1>
                <p style={{ color: "white" }}>
                    {(props.member) ?
                        "Congratulations, you are a member of an extremely secretive back room in The Hedge known as ... The Booth" :
                        "The Booth is for club members only, be sure to mint one of our hedgehogs or purchase one from OpenSea when they are released :)"}
                </p>
                <hr />
                <p className="mb-0">
                    <Badge bg="success">{props.walletAddress}</Badge>
                </p>
            </Alert>
        </div>
    )
}

const Booth = () => {

    const [walletAddress, setWalletAddress] = useState(null);
    const [nfts, setNfts] = useState(null);
    const [isMember, setIsMember] = useState(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletAddress(accounts[0]);
        }
    }

    const getNftData = async () => {
        if (!walletAddress) return;
        const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`);
        const data = await response.json();
        setNfts(data.items);
    }

    const displayNfts = async () => {
        const n = await nfts.length;
        for (let i = 0; i < n; i++) {
            const nft = nfts[i]["meta"]["name"];
            if (nft.includes("Hungover Hedgehog")) {
                setIsMember(true);
                return;
            }
        }
        setIsMember(false);
    }

    useEffect(() => {
        getNftData()
    }, [walletAddress]);

    useEffect(() => {
        displayNfts()
    }, [nfts]);

    return (
        <>
            <HR />
            <Container id="Booth" className="section-container">
                <Header
                    heading="The Booth"
                    content={['THE BOOTH will be accessible after the public sale has finished to those who hold at least 1 Hungover Hedgehog.',
                        "Through THE BOOTH you will be able to claim a free 1000 $THORN tokens and will gain access to the staking function in which your Hedgehogs will each gain 500 $THORN tokens per day. Along with this you'll gain access to Hagen's exclusive item stock that is not normally buyable from the scrap shop.",
                        "However, THE BOOTH is packed with many other Hedgehogs like you and there are very limited exclusive items, after all Hagen is pretty broke."]}
                />

                {!walletAddress &&
                    <Button onClick={connectWallet} variant="outline-success" style={{ borderWidth: "2px" }}>
                        <strong>
                            Connect Wallet
                        </strong>
                    </Button>
                }

                {isMember &&
                    <MemberResponse
                        member={true}
                        walletAddress={walletAddress}
                    />
                }
                {isMember == false &&
                    <MemberResponse
                        member={false}
                        walletAddress={walletAddress}
                    />
                }
            </Container>
        </>
    )
}

export default Booth;

