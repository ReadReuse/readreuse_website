import styled from "styled-components";

export const HeroBannerStyles = styled.div`
    width: 100%;
    height: 60vh;
    background: linear-gradient(90.15deg, #F7F9F4 0.12%, rgba(247, 230, 224, 0.856688) 12.58%, rgba(246, 208, 201, 0.2) 27.34%, rgba(246, 188, 180, 0.3) 41.08%, rgba(246, 171, 162, 0.4) 52.28%, rgba(246, 153, 143, 0.5) 64.23%, rgba(245, 137, 125, 0.6) 75.43%, rgba(245, 118, 106, 0.7) 87.64%, rgba(245, 100, 87, 0.9) 99.87%);
    padding: 0 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-section{
        .text{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 800;
            font-size:  2.7777777777777777vw;
            line-height: 3.8194444444444446vw;
            color: #15161B;
            margin-bottom: 2vw;
        }
        .button{
            button {
                background: #F56457;
                border-radius: 50px;
                border: none;
                outline: none;
                padding: 13px 23px;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 25px;
                color: #FFFFFF;
                cursor: pointer;

            }
        }
    }
    @media (max-width: 500px){
        height: 300px;
        .left-section{
            .text{
                font-size: 26px;
                line-height: 34px;
                margin-bottom: 20px;
                br{
                    display: none;
                }
            }
            .button{
                button {
                    font-size: 14px;
                    padding: 8px 12px;
                }
            }
        }
        .rigth-section{
            display: none;
        }
    }
`;