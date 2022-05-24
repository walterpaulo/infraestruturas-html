import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 420px);

    h4{
        color: #878383;
        margin: 10px 0 30px 20px;
    }
    h2{
        text-align: center;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #062540;

        /* identical to box height */
        text-decoration-line: underline;
        text-transform: uppercase;
        margin-bottom: 80px;
    }
    @media (max-width: 560px) {
        h2{
            font-size: 16px;
            margin-bottom: 20px;
        }
        h4{
            font-size: 13px;
        }

    }
`