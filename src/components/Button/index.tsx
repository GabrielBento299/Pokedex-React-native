import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";

type ButtonProps = {
    title: string;
} & TouchableOpacityProps

export default function Button({ title, ...rest }: ButtonProps) {
    return (
        <ButtonContainer {...rest}>
            <Title>{title}</Title>
        </ButtonContainer>    
    )
}