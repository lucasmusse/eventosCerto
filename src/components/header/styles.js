import styled from "styled-components";

export const HeaderLayout = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 16vh;
  padding: 0 30px;
  

  img {
    height: 200px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    padding: 16px;
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
