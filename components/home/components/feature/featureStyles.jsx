import styled from "styled-components";

export const FeaturesStyles = styled.div`
    padding: 0 4vw;
    margin-top: 4vw;
    .feature-head{
        text-align: center;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 800;
        font-size: 36px;
        line-height: 49px;
        margin-bottom: 4vw;
    }
    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 33px;
            display: flex;
            align-items: center;
            letter-spacing: 0.05em;
            color: #000000;
            text-align: justify;
            text-justify: inter-word;
        }
    }
    @media (max-width: 500px) {
        .feature-head{
            font-size: 24px;
            margin-bottom: 15px;
        }
        .flex{
            flex-direction: column-reverse;
            width: 100%;
            img{
                margin-top: 30px;
                width: 100%;
                height: 250px;
                object-fit: contain;
            }
            .text{
                font-size: 16px;
                line-height: 20px;
            }
        }
        .flex-mobile{
            flex-direction: column;
        }
    }
`;