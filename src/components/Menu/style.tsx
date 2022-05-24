import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    background-color: #062541;
    width: 100wh;
    display: flex;
    justify-content: end;
    align-items: center;
`;
export const Title = styled.h2`
    color: #ffff;
    font-size: 20px;
    margin-right: 2%;

    @media (max-width: 560px) {
        font-size: 14px;
    }
`
