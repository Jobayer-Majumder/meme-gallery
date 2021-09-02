import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styles/Styles';




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
    border-bottom: 1px solid skyblue
`


export default Header;