import styled from "styled-components";



export const MainContainer = styled.section`
  
  display: flex;
  flex-direction: column;
  gap: 46px;
  padding: 4vw;

  
`;

export const CardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #ffebd6;

  margin: 2.5rem 30%;
  padding: 2.5rem;
  /* border: 1px solid #000; */

  -webkit-box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.64);
  box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.64);


  li{
    display:flex;
    align-items:center;
    
    line-height:1.5;
    font-size: 1.5rem;
    gap:10px;
    list-style:none;
    
    font-family: "Parisienne", cursive;
  }
`;
