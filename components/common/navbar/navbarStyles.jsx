import styled from "styled-components";

export const NavbarStyle = styled.div`
  position: sticky;
  padding: 0 4vw;
  top: 0;
  height: 12vh;
  width: 100%;
  background: #f7f9f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Nunito";
  .logo-section {
    font-weight: 800;
    font-size: 2.7777777777777777vw;
    line-height: 3.8194444444444446vw;
    color: rgba(243, 149, 79, 1);
  }
  .download-text {
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    color: rgba(243, 149, 79, 1);
    cursor: pointer;
  }
  @media (max-width: 500px) {
    padding: 0 12px;
    height: 80px;
    .download-text{
        display: none;
    }
    .logo-section{
        font-size: 20px;
    }
  }
`;
