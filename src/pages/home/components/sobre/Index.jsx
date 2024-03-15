

import { MainContainer, MainContent, TeamContainer, TeamCard } from './styles';
import {Divider} from '../../../../components/divider/Index'
import Avatar2 from '../../../../assets/avatar2.avif'


export function About(){
    return (
        <MainContainer id="sobreNos">
            
            <h2>Sobre nós</h2>
            <Divider/>
            <MainContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis cumque, nihil optio sequi itaque nemo! Illum at, laborum nulla magni voluptatem iste, fugiat labore provident nostrum delectus sit? Tenetur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse deserunt delectus non dolorem eaque. Alias culpa aliquid corporis dolore officiis ex natus cum, placeat, esse facere ipsam. Molestias, cupiditate?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis facilis pariatur tempora veritatis nihil minus necessitatibus consectetur rem modi quos sed quaerat, non, eius repellat sit fuga possimus reprehenderit.
            </MainContent>
            <TeamContainer>
                <TeamCard>
                    <img src={Avatar2} alt="Membro da equipe" />
                    <p><b>Julia Lenzi Dietrich</b></p>
                    <p>Assessora de Eventos</p>
                </TeamCard>
                <TeamCard>
                    <img src={Avatar2} alt="Membro da equipe" />
                    <p><b>Jordana Lenzi</b></p>
                    <p>Assistente e Administrativo</p>
                </TeamCard>
            </TeamContainer>
        </MainContainer>


    )
}

