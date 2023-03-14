import {
  Header,
  BackButton,
  ContentImage,
  CircleImage,
  PokemonImage,
  Content,
  PokemonTypeContainer,
  DotsImage,
  Container,
  ContainerTitle,
  StatusBar,
  Atributes,
  AtributeValue,
  ContentBar,
  ProgressBar,
  Ability,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import CircleImg from "../../assets/img/circle.png";
import DotsImg from "../../assets/img/dots.png";

import { TextLoad } from "../Home/styles";
import CardAnimation from "../../components/CardAnimation";
import TypesPokemon from "../../components/TypesPokemon";
import TextCard from "../../components/TextCard";
import useGetAboutPokemon from "../../hooks/useGetAboutPokemon";

export default function AboutPokemon() {
  const { pokemonDetail, isLoading } = useGetAboutPokemon();

  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <>
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TextLoad>Carregando...</TextLoad>
        </View>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
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
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail?.id}.png`,
                  }}
                />
              </CardAnimation>
            </ContentImage>

            <Content>
              <TextCard
                sizeId={15}
                sizeName={30}
                pokemonId={pokemonDetail.id}
                pokemonName={pokemonDetail.name}
              />

              <PokemonTypeContainer>
                {pokemonDetail.types.map((pokemonType) => (
                  <TypesPokemon
                    key={pokemonType.type.name}
                    types={pokemonType}
                    text={pokemonType.type.name}
                  />
                ))}
              </PokemonTypeContainer>
            </Content>

            <DotsImage source={DotsImg} />
          </Header>

          <Container>
            <ContainerTitle type={pokemonDetail.types[0].type.name}>
              Base Stats
            </ContainerTitle>

            {pokemonDetail.stats.map((atribute) => (
              <StatusBar key={atribute.stat.name}>
                <Atributes>{atribute.stat.name}</Atributes>
                <AtributeValue>{atribute.base_stat}</AtributeValue>

                <ContentBar>
                  <CardAnimation>
                    <ProgressBar
                      type={pokemonDetail.types[0].type.name}
                      borderWidth={0}
                      progress={100}
                      width={atribute.base_stat}
                      color={pokemonDetail.color}
                    />
                  </CardAnimation>
                </ContentBar>
              </StatusBar>
            ))}
            <ContainerTitle
              type={pokemonDetail.types[0].type.name}
              key={pokemonDetail.types[0].type.name}
            >
              Habilidades
            </ContainerTitle>
            {pokemonDetail.abilities.map((ability) => (
              <Ability key={ability.ability.name}>{ability.ability.name}</Ability>
            ))}
          </Container>
        </ScrollView>
      )}
    </>
  );
}
