import React from 'react';
import { WelcomeContainer, Content, WrapperAnimation, WrapperImage,
Footer, Title, Subtitle } from "./styles";;
import Lottie from 'lottie-react-native';

import Button from '../../components/Button';

export default function Welcome() {
    return (
        <WelcomeContainer>
            <Content>
                <WrapperAnimation>
                <WrapperImage>
                <Lottie 
                    style={{width: 180}}
                    source={require("./pokemon.json")}
                    autoPlay={true}
                />
                </WrapperImage>
                </WrapperAnimation>

                <Title>Bem vindo</Title>
                <Subtitle>Encontre todos os pokemons em um só lugar</Subtitle>
            </Content>

            <Footer>
               <Button title="Começar" />
            </Footer>
        </WelcomeContainer> 
    )
    
}