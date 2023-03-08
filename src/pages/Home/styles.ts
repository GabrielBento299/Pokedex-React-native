import styled from 'styled-components/native';

export const HomeContainer = styled.View`
    flex: 1;
    padding: 20px;
`;

export const TextTitle = styled.Text`
    font-size: 32px;
    color: ${({theme}) => theme.colors.textBlack};
    font-weight: 700;
    margin-top: 32px;
    margin-bottom: 12px;
`;

export const TextLoad = styled.Text`
    flex: 1;
    font-size: 42px;
    color: red;
    font-weight: 700;
    justify-content: center;
    align-items: center;
`;