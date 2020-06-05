import React, { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import * as Location from "expo-location";
import { PROVIDER_GOOGLE,  } from "react-native-maps";

import useTheme from "../../hooks/theme";
import useCustomTheme from "../../hooks/customTheme";

import api from "../../services/api";

import { mapDarkStyle, mapStandardStyle } from "../../utils/mapStyle";

import * as S from "./styles";

interface Item {
  id: string;
  title: string;
  image_url: string;
}

interface Point {
  id: string;
  image: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface RouteParams {
  uf: string;
  city: string;
}

const Points: React.FC = () => {
  const themeContext = useTheme();
  const { handleChangeTheme } = useCustomTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as RouteParams;

  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const handleSelectItem = useCallback(
    (id: string) => {
      const alreadySelected = selectedItems.findIndex((item) => item === id);

      if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter((item) => item !== id);
        setSelectedItems(filteredItems);
      } else {
        setSelectedItems([...selectedItems, id]);
      }
    },
    [selectedItems]
  );

  useEffect(() => {
    api
      .get("points", {
        params: {
          city: routeParams.city === "0" ? null : routeParams.city,
          uf: routeParams.uf === "0" ? null : routeParams.uf,
          items: selectedItems,
        },
      })
      .then((res) => {
        setPoints(res.data);
      });
  }, [selectedItems]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Ops...",
          "Precisamos da permissão para obter sua localização"
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  useEffect(() => {
    api.get("items").then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleNavigateToDetail = useCallback((id: string) => {
    navigation.navigate("Detail", { point_id: id });
  }, []);

  return (
    <S.SafeArea>
      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon
              name="arrow-left"
              size={20}
              color={themeContext.colors.green}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleChangeTheme}>
            <Icon
              name={themeContext.title === "dark" ? "sun" : "moon"}
              size={20}
              color={themeContext.colors.theme}
            />
          </TouchableOpacity>
        </S.Header>

        <S.Title>😃 Bem vindo.</S.Title>
        <S.Description>Encontre no mapa um mapa de coleta.</S.Description>

        <S.MapContainer>
          {initialPosition[0] !== 0 && (
            <S.Map
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
              customMapStyle={
                themeContext.title === "dark" ? mapDarkStyle : mapStandardStyle
              }
              provider={PROVIDER_GOOGLE}
            >
              {points.map((point) => (
                <S.MapMarker
                  key={point.id}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                  onPress={() => handleNavigateToDetail(point.id)}
                >
                  <S.MapMarkerContainer>
                    <S.MapMarkerImage
                      source={{
                        uri: point.image,
                      }}
                    />
                    <S.MapMarkerTitle>{point.name}</S.MapMarkerTitle>
                  </S.MapMarkerContainer>
                </S.MapMarker>
              ))}
            </S.Map>
          )}
        </S.MapContainer>
      </S.Container>
      <S.ItemsContainer>
        <S.Scroll>
          {items.map((item) => (
            <S.Item
              key={item.id}
              onPress={() => handleSelectItem(item.id)}
              activeOpacity={0.6}
              selected={selectedItems.includes(item.id)}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <S.ItemTitle>{item.title}</S.ItemTitle>
            </S.Item>
          ))}
        </S.Scroll>
      </S.ItemsContainer>
    </S.SafeArea>
  );
};

export default Points;
