import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      cardBackground: string;
      title: string;
      text: string;
      placeholder: string;
      green: string;
      gray: string;
      darkenGray: string;
      invertText: string;
      theme: string;
      dropzone: {
        background: string;
        text: string;
        primary: string;
      },
    };
  }
}