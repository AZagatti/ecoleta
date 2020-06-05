import React, { useCallback, useEffect, useState } from "react";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import * as MailCompose from "expo-mail-composer";

import useTheme from '../../hooks/theme';
import useCustomTheme from '../../hooks/customTheme';

import api from "../../services/api";

import * as S from "./styles";

interface RouteParams {
  point_id: string;
}

interface Data {
  point: {
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail: React.FC = () => {
  const themeContext = useTheme();
  const { handleChangeTheme } = useCustomTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as RouteParams;

  const [data, setData] = useState<Data>({} as Data);

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleComposeMail = useCallback(() => {
    if (data.point.email) {
      MailCompose.composeAsync({
        subject: "Interesse na coleta de resíduos",
        recipients: [data.point.email],
      });
    }
  }, []);

  const handleWhatsapp = useCallback(() => {
    if (data.point.whatsapp) {
      Linking.openURL(
        `whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse sobre a coleta de resíduos.`
      );
    }
  }, []);

  if (!data.point) {
    return null;
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="arrow-left" size={20} color={themeContext.colors.green} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleChangeTheme}>
            <Icon
              name={themeContext.title === "dark" ? "sun" : "moon"}
              size={20}
              color={themeContext.colors.theme}
            />
          </TouchableOpacity>
        </S.Header>

        <S.PointImage
          source={{
            uri: data.point.image_url,
          }}
        />

        <S.PointName>{data.point.name}</S.PointName>
        <S.PointItems>
          {data.items.map((item) => item.title).join(", ")}
        </S.PointItems>

        <S.Address>
          <S.AddressTitle>Endereço</S.AddressTitle>
          <S.AddressContent>
            {data.point.city}, {data.point.uf}
          </S.AddressContent>
        </S.Address>
      </S.Container>
      <S.Footer>
        <S.Button onPress={handleWhatsapp}>
          <FontAwesome
            name="whatsapp"
            size={20}
            color={themeContext.colors.invertText}
          />
          <S.ButtonText>Whatsapp</S.ButtonText>
        </S.Button>

        <S.Button onPress={handleComposeMail}>
          <Icon name="mail" size={20} color={themeContext.colors.invertText} />
          <S.ButtonText>E-mail</S.ButtonText>
        </S.Button>
      </S.Footer>
    </S.SafeArea>
  );
};

export default Detail;
