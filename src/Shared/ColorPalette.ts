import bgi from "../../assets/bgi.jpg";

export interface Palette {
  primary: string;
  secondary: string;
  tertiary: string;
  quarternary: string;
  warning: string;
  danger: string;
  background: string;
  lightText: string;
  darkText: string;
  grey: string;
  transparent: string;
  bgi: URL;
}

export const MainTheme: Palette = {
  primary: "#AE1B73",
  secondary: "#688bf4",
  tertiary: "#be9e08",
  quarternary: "#42182e",
  warning: "#f3ff66",
  danger: "#ff0040",
  background: "#f5f5f5",
  lightText: "#f5f5f5",
  darkText: "#131313",
  grey: "#ccc",
  transparent: "rgba(0,0,0,0)",
  bgi: bgi,
};
