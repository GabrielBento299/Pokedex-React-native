import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";

type ButtonProps = {
    title: string;
} & TouchableOpacityProps

export default function Button({ title }: ButtonProps) {
    return (
        <ButtonContainer>
            <Title>{title}</Title>
        </ButtonContainer>    
    )
}