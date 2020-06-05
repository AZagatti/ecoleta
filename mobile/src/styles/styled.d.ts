import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      title: string;
      text: string;
      green: string;
      gray: string;
      darkenGray: string;
      invertText: string;
      theme: string;
    };
  }
}
