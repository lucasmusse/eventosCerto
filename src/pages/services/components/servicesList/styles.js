import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 68px;

  font-family: "Roboto", sans-serif;

  
  
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 68px;

  h2{
    text-align: center;
    font-family: "Parisienne", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 2.5rem;
  }
  
`;

export const Image = styled.img`
  width: 160px;
`;
