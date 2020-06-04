import React, { useCallback, useState } from "react";
import { Image, View, KeyboardAvoidingView, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  const handleNavigateToPoints = useCallback(() => {
    navigation.navigate("Points", {
      uf,
      city,
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <S.Container>
        <S.Main>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <S.Title>Seu marketplace de coleta de resíduos</S.Title>
            <S.Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </S.Description>
          </View>
        </S.Main>

        <S.Footer>
          <S.Input
            placeholder="Digite a UF"
            value={uf}
            onChangeText={setUf}
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
          />
          <S.Input
            placeholder="Digite a cidade"
            value={city}
            onChangeText={setCity}
            autoCorrect={false}
          />
          <S.Button onPress={handleNavigateToPoints}>
            <S.ButtonIcon>
              <Feather name="arrow-right" color="#fff" size={24} />
            </S.ButtonIcon>
            <S.ButtonText>Entrar</S.ButtonText>
          </S.Button>
        </S.Footer>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
