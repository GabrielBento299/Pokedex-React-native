import styled, { css } from 'styled-components/native';
import { TypeName } from '.';

interface TypeProps {
    type: TypeName;
};

export const Header = styled.View<TypeProps>`
    ${({theme, type}) => css`
        background-color: ${theme.colors.backgroundCard[type]};    
        height: 340px;
        padding: 20px;
        
        flex-direction: row;
        align-items: center;
        position: relative;
    `
}
`;  

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 70px;
    left: 40px;
`;  

export const ContentImage = styled.View`
    position: relative;
     
`;  

export const CircleImage = styled.Image`
    width: 125px;
    height: 125px;
    position: absolute;
`;  

export const PokemonImage = styled.Image`
    width: 125px;
    height: 125px;
`;  

export const Content = styled.View`
     margin-left: 32px;
`;  

export const PokemonId = styled.Text`
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
    color: ${({theme}) => theme.colors.light_text};
`;  

export const PokemonName = styled.Text`
     text-transform: capitalize;
     font-style: none;
     font-weight: bold;
     font-size: 28px;
     line-height: 38px;
     color: ${({theme}) => theme.colors.background};
`;  

export const PokemonTypeContainer = styled.View`
     flex-direction: row;
`;

export const PokemonType = styled.View<TypeProps>`
    ${({theme, type}) => css`
        background-color: ${theme.colors.boxType[type]};
        width: 61px;
        height: 25px;
        border-radius: 3px;

        align-items: center;
        justify-content: center;
        margin-left: 5px;
        margin-top: 10px;
    ` 
}
`; 

export const PokemonTypeText = styled.Text`
    color: ${({theme}) => theme.colors.background};
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    font-style: normal;
`;  

export const DotsImage = styled.Image`
    width: 85px;
    position: absolute;
    right: -20px;
    top: 220px;
`;

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.background};
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    margin-top: -40px;
`;

export const ContainerTitle = styled.Text<TypeProps>`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    color: ${({theme, type}) => theme.colors.boxType[type]}
`;