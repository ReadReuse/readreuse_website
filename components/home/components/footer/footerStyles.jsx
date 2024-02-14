import styled from "styled-components";

export const FooterStyles = styled.div`
  .text {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.05em;
    color: #000000;
    margin-bottom: 2vw;
  }
  .google-download-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vw;
    flex-direction: column;
    background: rgba(243, 149, 79, 0.2);
    .google-img {
      cursor: pointer;
    }
  }
  .contact-use-section {
    padding: 0 4vw;
    margin: 3vw 0;
    .text{
        text-align: center;
    }
    .flex{
        width: 100%;
        display: flex;
        align-items: center;
        .text-contact{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 33px;
            color: #000000;
            gap: 12px;
            span{
                cursor: pointer;
            }
            .icon{
                display: flex   ;
            }
        }
    }

  }
  .copyright-section{
    height: 6vw;
    background: rgba(243, 149, 79, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
  }

  @media (max-width: 500px){
    .text{
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 20px;

    }
    .google-download-wrap{
      height: 220px;
      padding: 0 12px;
      margin-top: 20px;
      img{
        width: 70vw;
      }
    }
    .contact-use-section{
      .flex{
        flex-direction: column;
        gap: 10px;
        .text-contact{
          width: 100%;
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
    .copyright-section{
      height: 80px;
      padding: 0 12px;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
    }
  }
`;
