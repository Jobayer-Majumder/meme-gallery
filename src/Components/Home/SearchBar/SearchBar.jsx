import React from 'react';
import styled from 'styled-components';
import { Container, device } from '../../shared/Styles/GlobalStyles';






const SearchBar = () => {



    return (
        <Container>
            <Row>
                <Col justifyMd={'center'}>
                    <Input type="text" placeholder='Search the best meme' />
                    <Button borderLeft={'none'}>Search</Button>
                </Col>
                <div>
                    <Button width={'100%'}>Upload meme</Button>
                </div>
            </Row>
        </Container>
    );
};

const Row = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    padding: 60px 0;

    @media only screen and ${device.sm} {
        grid-template-columns: 100%;
        grid-gap: 20px
        
    } 
    
`;

const Col = styled.div`
    display: flex;
    justify-content: center
    
`

const Input = styled.input`
    padding: 10px 8px;
    width: 60%
`

const Button = styled.button`
    padding: 10px 20px;
    border: 1px solid black;
    

    @media only screen and ${device.sm} {
        display: block;
        width: ${props => props.width}
    } 
`;






export default SearchBar;



