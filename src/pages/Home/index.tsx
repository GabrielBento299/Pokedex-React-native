import { ActivityIndicator, FlatList, View } from "react-native";
import Card from "../../components/Card";
import { HomeContainer, HeaderImage, TextTitle, TextLoad } from "./styles";
import PokeballHeaderImg from "../../../assets/adaptive-icon.png";
import { useNavigation } from "@react-navigation/native";
import useGetPokemons from "../../hooks/useGetPokemons";

export default function Home() {
  const { navigate } = useNavigation();

  const { pokemons, isLoader } = useGetPokemons();

  function HandleNavigation(pokemonId: number) {
    navigate("About", {
      pokemonId,
    });
  }

  return (
    <HomeContainer>
      {isLoader ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TextLoad>Carregando...</TextLoad>
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={
            <>
              <HeaderImage source={PokeballHeaderImg} />
              <TextTitle>Pokédex</TextTitle>
            </>
          }
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          renderItem={({ item: pokemon }) => (
            <Card
              pokemon={pokemon}
              onPress={() => HandleNavigation(pokemon.id)}
            />
          )}
          ListFooterComponent={<ActivityIndicator size={"large"} color="red" />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </HomeContainer>
  );
}
