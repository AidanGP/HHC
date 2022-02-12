import React from 'react';
import { Container, Alert } from 'react-bootstrap';



const Header = (props) => {
    return (
        <Container className="header-container">
            <Alert.Heading className="heading">{props.heading}</Alert.Heading>
            {
                props.content.map(line =>

                    <p key={props.content.indexOf(line)}>
                        {line}
                    </p>

                )
            }
        </Container>
    )
}

export default Header;