import { CheckSquare } from 'phosphor-react'
import { CardList, MainContainer } from './style'
import { Divider } from '../../../../components/divider/Index'



export function ListaEventos(){

    return (
        <MainContainer>
        
        <h2>Eventos que Atendemos</h2>
        <Divider/>
        <CardList className="ListEventsCard">
            <ul>
                <li><CheckSquare size={24} /> Corporativo</li>
                <li><CheckSquare size={24}/> Casamentos</li>
                <li><CheckSquare size={24}/> Aniversários</li>
                <li><CheckSquare size={24}/> Festa de 15 anos</li>
                <li><CheckSquare size={24}/> Montagem de feiras</li>
                <li><CheckSquare size={24}/> Mostras</li>
                <li><CheckSquare size={24}/> Eventos em Geral</li>
            </ul>

        </CardList>
        
        
        </MainContainer>
    )




}