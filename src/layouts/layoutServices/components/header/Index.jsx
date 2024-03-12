import {  HeaderContainer } from "./styles";

import { NavLink } from "react-router-dom";
import { CaretLeft } from 'phosphor-react'

export function Header(){
    return(
        <HeaderContainer>
            <NavLink to='/'><CaretLeft size={46}/></NavLink>
        </HeaderContainer>
    )
}