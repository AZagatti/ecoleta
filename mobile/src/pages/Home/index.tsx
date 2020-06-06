import React, { useCallback, useState, useEffect } from "react";
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";

import useTheme from "../../hooks/theme";
import useCustomTheme from "../../hooks/customTheme";

import * as S from "./styles";

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface Item {
  label: string;
  value: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const themeContext = useTheme();
  const { handleChangeTheme } = useCustomTheme();

  const [uf, setUf] = useState("0");
  const [city, setCity] = useState("0");
  const [ufs, setUfs] = useState<Item[]>([]);
  const [cities, setCities] = useState<Item[]>([]);

  const picker = StyleSheet.create({
    inputIOS: {
      height: 60,
      color: themeContext.colors.text,
      backgroundColor: themeContext.colors.invertText,
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
    inputAndroid: {
      height: 60,
      color: themeContext.colors.text,
      backgroundColor: themeContext.colors.invertText,
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  });

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      )
      .then((res) => {
        const ufInitials = res.data.map((uf) => ({
          label: uf.sigla,
          value: uf.sigla,
        }));
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (uf === "0") return;
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`
      )
      .then((res) => {
        const cityNames = res.data.map((city) => ({
          label: city.nome,
          value: city.nome,
        }));
        setCities(cityNames);
      });
  }, [uf]);

  const handleNavigateToPoints = useCallback(() => {
    navigation.navigate("Points", {
      uf,
      city,
    });
  }, [uf, city]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, position: "relative" }}
    >
      <S.Container>
        <S.Header>
          <TouchableOpacity
            onPress={() => {
              handleChangeTheme();
            }}
          >
            <Feather
              name={themeContext.title === "dark" ? "sun" : "moon"}
              size={20}
              color={themeContext.colors.theme}
            />
          </TouchableOpacity>
        </S.Header>

        <S.Main>
          <Image
            source={
              themeContext.title === "light"
                ? require("../../assets/logo.png")
                : require("../../assets/logo-dark.png")
            }
          />
          <View>
            <S.Title>Seu marketplace de coleta de resíduos</S.Title>
            <S.Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </S.Description>
          </View>
        </S.Main>

        <S.Footer>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={picker}
            placeholder={{
              label: "Selecione um UF",
              value: "0",
            }}
            value={uf}
            onValueChange={(v: string) => setUf(v)}
            items={ufs}
          />
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}          
            style={picker}
            placeholder={{
              label: "Selecione uma cidade",
              value: "0",
            }}
            value={city}
            onValueChange={(v: string) => setCity(v)}
            items={cities}
          />
          <S.Button onPress={handleNavigateToPoints}>
            <S.ButtonIcon>
              <Feather
                name="arrow-right"
                color={themeContext.colors.invertText}
                size={24}
              />
            </S.ButtonIcon>
            <S.ButtonText>Entrar</S.ButtonText>
          </S.Button>
        </S.Footer>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
