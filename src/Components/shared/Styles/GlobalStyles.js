import styled from "styled-components";


export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const size = {
    xs: '320px',
    sm: '768px',
    lg: '1200px',
};

export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    lg: `(max-width: ${size.lg})`
};
