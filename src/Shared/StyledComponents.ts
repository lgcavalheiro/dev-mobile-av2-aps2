import styled, { DefaultTheme } from "styled-components/native";
import { MainTheme } from "./ColorPalette";

interface Props {
  theme: {
    primary: string;
    darkText: string;
    lightText: string;
    background: string;
  };
  color: string;
  customColor: string;
  dark: boolean;
  rightAligned: boolean;
  bold: boolean;
}

export const BGI = styled.ImageBackground<any>`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const View = styled.View<any>`
  flex: 1;
  align-items: center;
  ${props => (props.jc ? `justify-content: ${props.jc};` : "")}
  background-color: ${props => props.color || props.theme.primary};
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
`;

export const Text = styled.Text<any>`
  ${props => {
    if (props.customColor) return `color: ${props.customColor};`;
    else if (props.dark) return `color: ${props.theme.darkText}`;
    else return `color: ${props.theme.lightText}`;
  }}
  ${props => (props.rightAligned ? "text-align: right;" : "")}
  ${props => (props.bold ? "font-weight: bold;" : "")}
  ${props => (props.fontSize ? `font-size: ${props.fontSize}px;` : "")}
  ${props => (props.alignSelf ? `align-self: ${props.alignSelf};` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
`;

export const TouchableOpacity = styled.TouchableOpacity<any>`
  background-color: ${props => props.color || props.theme.primary};
  padding: 16px;
  margin: 8px;
  border-radius: 4px;
  ${props => (props.hasBorder ? `border: 1px solid ${props.theme.primary};` : "")}
  ${props => (props.alignSelf ? `align-self: ${props.alignSelf};` : "")}
`;

export const GenericBox = styled.View<any>`
  height: 65%;
  width: 92%;
  margin-top: 16px;
  background-color: ${props => props.theme.background};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 20px;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0);
`;

export const TextInput = styled.TextInput<any>`
  border: 1px solid ${MainTheme.grey};
  height: 65px;
  margin-top: 5px;
  border-radius: 5px;
  padding: 0 20px;
  ${props => (props.width ? `width: ${props.width}%;` : "")}
  ${props => (props.height ? `height: ${props.height}%;` : "")}
  background-color: ${props => (props.opaque ? props.theme.background : "rgba(0, 0, 0, 0)")};
`;

export const TextButton = styled(TouchableOpacity)`
  background-color: rgba(0, 0, 0, 0);
`;
