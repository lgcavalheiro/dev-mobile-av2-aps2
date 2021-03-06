import styled from "styled-components/native";
import { MainTheme } from "./ColorPalette";

export const ScrollView = styled.ScrollView<any>`
  height: 100%;
  width: 90%;
  padding: 20px;
  padding-top: 0px;
  margin-top: 32px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: ${props => props.color || props.theme.secondary}cc;
`;

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
  ${props => (props.padding ? `padding: ${props.padding}px;` : "")}
`;

export const Text = styled.Text<any>`
  ${props => {
    if (props.customColor) return `color: ${props.customColor};`;
    else if (props.dark) return `color: ${props.theme.darkText}`;
    else return `color: ${props.theme.lightText}`;
  }}
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
  ${props => (props.rightAligned ? "text-align: right;" : "")}
  ${props => (props.bold ? "font-weight: bold;" : "")}
  ${props => (props.fontSize ? `font-size: ${props.fontSize}px;` : "")}
  ${props => (props.alignSelf ? `align-self: ${props.alignSelf};` : "")}
  ${props => (props.marginLeft ? `margin-left: ${props.marginLeft}px;` : "")}
  ${props => (props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : "")}
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
  height: 420px;
  width: 92%;
  margin-top: 16px;
  background-color: ${props => props.color || props.theme.background};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 20px;
`;

export const GenericCard = styled(GenericBox)`
  height: 156px;
  width: 100%;
  align-items: center;
  padding: 8px;
`;

export const ButtonGroup = styled.View<any>`
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0);
  ${props => (props.jc ? `justify-content: ${props.jc};` : "")}
`;

export const TextInput = styled.TextInput<any>`
  border: 1px solid ${MainTheme.grey};
  height: 65px;
  margin-top: 5px;
  border-radius: 5px;
  padding: 0 20px;
  ${props => (props.width ? `width: ${props.width}px;` : "")}
  ${props => (props.height ? `height: ${props.height}px;` : "")}
  background-color: ${props => (props.opaque ? props.theme.background : "rgba(0, 0, 0, 0)")};
  ${props => (props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : "")}
`;

export const TextButton = styled(TouchableOpacity)`
  background-color: rgba(0, 0, 0, 0);
`;
