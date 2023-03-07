import React from 'react';
import { WelcomeContainer, Content, Footer, Title, Subtitle } from "./styles";
;
import Lottie from 'lottie-react-native';

export default function Welcome() {
    return (
        <WelcomeContainer>
            <Content>
                <Lottie 
                    source={require("./pokemon.json")}
                    autoPlay={true}
                />
            </Content>
            <Footer>
                <Title>Bem vindo</Title>
                <Subtitle>Encontre todos os pokemons em um só lugar</Subtitle>
            </Footer>
        </WelcomeContainer> 
    )
    
}