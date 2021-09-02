import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/Styles/Styles';






const SearchBar = () => {



    return (
        <Container>
            <Row>
                <div>
                    <Input type="text" placeholder='Search the best meme' />
                    <Button>Search</Button>
                </div>
                <div>
                    <Button>Upload a meme</Button>
                </div>
            </Row>
        </Container>
    );
};

const Row = styled.div`
    display: grid;
    justify-content: 
    
`;


const Input = styled.input`
    padding: 6px 8px;
    width: 70%
`

const Button = styled.button`
    padding: 6px 10px;
    border: 1px solid cyan;

`;






export default SearchBar;



