import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    width: 70%;
    height: 50px;
    background-color: ${({theme}) => theme.colors.backgroundCard.water};

    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${({theme}) => theme.colors.background};
`;
