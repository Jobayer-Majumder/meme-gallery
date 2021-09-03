import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/Styles/GlobalStyles';




const Gallery = () => {
    const [memes, setMemes] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/getMemes')
        .then(res => res.json())
        .then(data => setMemes(data))

    }, [])

    return (
        <section>
            <Container>
                <Row>
                    {
                        memes?.map(meme => <div key={meme._id}>
                            <img src={meme.img} alt="" style={{width: '100%'}}/>
                            <h5>{meme.title}</h5>
                        </div>)
                    }
                </Row>
            </Container>

        </section>
    );
};



const Row = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 20px
`


export default Gallery;