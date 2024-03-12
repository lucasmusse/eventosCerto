import styled from "styled-components";


export const HeaderContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem;
    outline: 1px;
`

export const Logo = styled.img`

height: 120px;

`

export const ButtonBack = styled.button`

  padding: 0.8rem;
  border-radius: 8px;
  background: #FFEBD6;
  color: gray;
  border:none;
  cursor: pointer;
  &:hover{
    background: #FFEBF5;
  }

`