import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";

export const Container = styled.ImageBackground.attrs(({ theme }) => ({
  source:
    theme.title === "light"
      ? require("../../assets/home-background.png")
      : require("../../assets/home-background-dark.png"),
  imageStyle: {
    width: 274,
    height: 368,
  },
}))`
  flex: 1;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  position: absolute;
  right: 32px;
  top: 64px;
  z-index: 5;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 32px;
  font-family: "Ubuntu_700Bold";
  max-width: 260px;
  margin-top: 64px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-top: 16px;
  font-family: "Roboto_400Regular";
  max-width: 260px;
  line-height: 24px;
`;

export const Footer = styled.View``;

export const Select = styled.View``;

export const Input = styled(RNPickerSelect)`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.invertText};
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 24px;
  font-size: 16px;
`;

export const Button = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.green};
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.invertText};
  font-family: "Roboto_500Medium";
  font-size: 16px;
`;
