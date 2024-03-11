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
    position:relative;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    margin: 12px;
    padding: 16px;
    transition: all .8s;
    padding-bottom: 3px;

    
    &::before{
      content: "";
      position : absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background-color: #FFEBD6;
      transition: width .8s;
    }
    &:hover::before{
      width: 100%;
    }
    &.active::before{
      width: 100%;
    }
  }
`;
