import React from 'react';
import { Container } from 'react-bootstrap';

const HR = () => {
    return (
        <Container>
            <hr style={{
                color: 'var(--accent)',
                backgroundColor: 'var(--accent)',
                height: 3,
                borderColor: 'var(--accent)',
                margin: 0,
                opacity: "0.75",
                background: "-webkit-linear-gradient(to right, #198754 20%, #C1CF63 100%)",
                background: "-moz-linear-gradient(to right, #198754 20%, #C1CF63 100%)",
                background: "linear-gradient(to right, #198754 20%, #C1CF63 100%)",
            }} />
        </Container>
    )
}

export default HR;