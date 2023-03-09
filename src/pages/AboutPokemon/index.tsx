import { 
Header,
BackButton,
ContentImage, 
CircleImage,
PokemonImage,
Content,
PokemonId,
PokemonName,
PokemonTypeContainer,
PokemonType,
PokemonTypeText,
DotsImage,
Container,
ContainerTitle

} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, ScrollView, Text } from "react-native";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { useTheme } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

import CircleImg from '../../assets/img/circle.png';
import DotsImg from '../../assets/img/dots.png';

import { TextLoad } from "../Home/styles";
import CardAnimation from "../../components/CardAnimation";

interface RouteParams {
    pokemonId: number;
}

interface Stat {
    base_stat: number;
    stat: {
        name: string;
    }
}
interface Abilitiy {
    ability: {
        name: string;
    }
}
export type TypeName = 
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground';

interface PokemonTypes {
    type: {
        name: TypeName;
    }
}
interface IPokemonsProps {
    id: number;
    name: string;
    stats: Stat[];
    abilities: Abilitiy[];
    color: string;
    types: PokemonTypes[];
}

export default function AboutPokemon() {
    const {goBack} = useNavigation();
    const { colors } = useTheme();

    const route = useRoute();
    const { pokemonId } = route.params as RouteParams;

    const [pokemonDetail, setPokemonDetail] = useState({} as IPokemonsProps);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    async function getPokemonDetail() {
        try {
            const response = await api.get(`/pokemon/${pokemonId}`);
            const { stats, abilities, id, name, types } = response.data;

            const currentType = types[0].type.name as TypeName;
            const color = colors.backgroundCard[currentType];

            setPokemonDetail({stats, abilities, id, name, types, color});
    
        } catch (err) {
            Alert.alert("Ops, deu erro!");
        } finally {
            setIsLoading(false);
        }
    }

    function handleGoBack() {
        goBack();
    }
    

    useEffect(() => {
        getPokemonDetail();
    }, []);

    return (
        <>
            {isLoading ? <TextLoad>Carregando...</TextLoad> :
                <ScrollView style={{flex: 1, backgroundColor: "#FFF"}}>
                <Header type={pokemonDetail.types[0].type.name}>
                    <BackButton>
                        <Feather 
                            name="chevron-left" 
                            size={24} 
                            color="#eee"
                            onPress={handleGoBack}
                         />
                    </BackButton>
    
                    <ContentImage>
                        <CircleImage source={CircleImg} />
                        <CardAnimation>
                        <PokemonImage 
                            source={{
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail?.id}.png`
                            }}
                        />
                        </CardAnimation>
                    </ContentImage>

                    <Content>
                        <PokemonId>#{pokemonDetail.id}</PokemonId>
                        <PokemonName>{pokemonDetail.name}</PokemonName>

                        <PokemonTypeContainer>
                            {pokemonDetail.types.map((type) => (
                                <PokemonType type={type.type.name} key={type.type.name}>
                                    <PokemonTypeText>{type.type.name}</PokemonTypeText>
                                </PokemonType>    
                            ))}
                        </PokemonTypeContainer>
                    </Content>
                    <DotsImage source={DotsImg} />
                </Header>

                <Container>
                    <ContainerTitle type={pokemonDetail.types[0].type.name}>Base States</ContainerTitle>
                </Container>
            </ScrollView>
            }
        </>
    )
}