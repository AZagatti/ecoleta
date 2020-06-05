import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import Constants from "expo-constants";
import { RectButton } from "react-native-gesture-handler";

export const SafeArea = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  padding-top: ${Platform.OS === "android"
    ? 20 + Constants.statusBarHeight
    : 20}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PointImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 32px;
`;

export const PointName = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 28px;
  font-family: "Ubuntu_700Bold";
  margin-top: 24px;
`;

export const PointItems = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Address = styled.View`
  margin-top: 32px;
`;

export const AddressTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: "Roboto_500Medium";
  font-size: 16px;
`;

export const AddressContent = styled.Text`
  font-family: "Roboto_400Regular";
  line-height: 24px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${({ theme }) => theme.colors.darkenGray};
  padding: 20px 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  width: 48%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 10px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.invertText};
  font-size: 16px;
  font-family: "Roboto_500Medium";
`;
