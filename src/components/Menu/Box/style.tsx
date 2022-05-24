import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    
    div:nth-child(3n+1){
        background-color: #1D405E;
        color: #fff;
    }
    `
export const Item = styled.div`
    background-color: aliceblue;
    width: 50%;
    height: 236px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h3{
        text-decoration: none;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;



    }
`