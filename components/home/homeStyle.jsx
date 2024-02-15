import styled from "styled-components";

export const HomeStyled = styled.div`
  position: relative;
  .text-wrapper {
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Nunito";
    font-style: normal;
    background: rgba(243, 149, 79, 0.2);
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #15161b;
  }
  @media (max-width: 500px) {
    .text-wrapper {
      padding: 0 12px;
      height: 100px;
      font-size: 16px;
      line-height: 20px;
      br {
        display: none;
      }
    }
  }
`;
