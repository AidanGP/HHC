import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Header from './Header';
import HR from './Divider';
import './FAQ.css';

const FAQItem = (props) => {
    return (
        // <Accordion.Item  eventKey={props.n}>
        //     <Accordion.Header className="faq-heading"><strong>{props.question}</strong></Accordion.Header>
        //     
        //         <div>{
        //             props.answer.map(line => (<p>{line}</p>))
        //         }</div>
        //     </Accordion.Body>
        // </Accordion.Item>
        <>

            <Accordion.Item className="faq-q" eventKey={props.n}>

                <Accordion.Header className="heading-2" style={{ color: "var(--bg)" }}>{props.question}</Accordion.Header>
                <Accordion.Body className="faq-body">
                    {
                        props.answer.map(line =>

                            <p key={props.answer.indexOf(line)}>
                                {line}
                            </p>

                        )
                    }
                </Accordion.Body>

            </Accordion.Item>

        </>
    )
}

const FAQ = () => {
    return (
        <>
            <HR />
            <Container id="FAQ" className="section-container">
                <Header heading="Frequently Asked Questions" content={[" "]} />
                <Accordion className="faq-questions">
                    <div className="faq-container">
                        <FAQItem
                            n="0"
                            question="What is the Hungover Hedgehogs Club?"
                            answer={["The Hungover Hedgehogs Club is a collection of 5,555 unique vector art Hedgehogs who are constantly getting pissed together on the Ethereum Blockchain. Owning a Hungover Hedgehog is your ticket into the our club, giving you access to many holder utilities and benefits."]}
                        />
                        <FAQItem
                            n="1"
                            question="Pre-Sale Mint Cost?"
                            answer={["TBD"]}
                        />
                        <FAQItem
                            n="2"
                            question="Public Mint Cost?"
                            answer={["TBD"]}
                        />
                        <FAQItem
                            n="3"
                            question="Mint Date"
                            answer={["PRE-SALE MINT: TBD",
                                "PUBLIC MINT: TBD"]}
                        />
                        <FAQItem
                            n="4"
                            question="How many can we mint per wallet?"
                            answer={["Pre-Sale: 3 Max per wallet",
                                "Public: 8 Max per wallet"]}
                        />
                        <FAQItem
                            n="5"
                            question="Is there a cap on the Pre-Sale Mint?"
                            answer={["Yes, out of our supply of 5,555 Hungover Hedgehogs we are allowing 1,555 for Pre-Sale"]}
                        />
                        <FAQItem
                            n="6"
                            question="How many whitelist spots are there?"
                            answer={["There will be a total of 755 Whitelist spots available to our community, check whitelist-info to find out how to get Whitelisted."]}
                        />
                    </div>
                </Accordion>
            </Container>
        </>
    )

}

export default FAQ;