import styled, { css } from 'styled-components/native';

import * as Progress from 'react-native-progress';

export type TypeName =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "normal"
  | "bug"
  | "flying"
  | "eletric"
  | "ground";


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

export const PokemonTypeContainer = styled.View`
     flex-direction: row;
     gap: 6px;
`;

export const DotsImage = styled.Image`
    width: 85px;
    position: absolute;
    right: 5px;
    top: 235px;
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
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    color: ${({theme, type}) => theme.colors.boxType[type]};
`;


export const StatusBar = styled.View`
    width: 100%;
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;
`;

export const Atributes = styled.Text`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.light_text};
    width: 100px;
`;

export const AtributeValue = styled.Text`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({theme}) => theme.colors.detail};
    text-align: right;
    margin-left: 10px;
;`


export const ContentBar = styled.View`
    margin-left: 20px;
`;

export const ProgressBar = styled(Progress.Bar)<TypeProps>`
`;

export const Ability = styled.Text`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({theme}) => theme.colors.detail};
    padding: 10px 20px;
    text-transform: capitalize;
`;
