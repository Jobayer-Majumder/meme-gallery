import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styles/GlobalStyles';




const Header = () => {

    return (
        <>
            <Section>
                <Container>
                    <h5>Meme Gallery </h5>
                </Container>
            </Section>
        </>
    );
};




const Section = styled.div`
    border-bottom: 1px solid black
`


export default Header;