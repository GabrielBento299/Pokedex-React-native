import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;

export const HomeContainer = styled.View`
    flex: 1;
`;

export const HeaderImage = styled.ImageBackground`
    height: 250px;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
`;

export const TextTitle = styled.Text`
    font-size: 32px;
    color: ${({theme}) => theme.colors.textBlack};
    font-weight: 700;
    padding: 20px;
`;

export const TextLoad = styled.Text`
    font-size: 42px;
    color: red;
    font-weight: 700;
    text-align: center;
    margin-top: 60px;
`;