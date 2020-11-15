import styled from "styled-components/native";

export const View = styled.View<any>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color || props.theme.primary};
`;

export const Text = styled.Text<any>`
  ${props => {
    if (props.customColor) return `color: ${props.customColor};`;
    else if (props.dark) return `color: ${props.theme.darkText}`;
    else return `color: ${props.theme.lightText}`;
  }}
  ${props => (props.rightAligned ? "text-align: right;" : "")}
  ${props => (props.bold ? "font-weight: bold;" : "")}
`;

export const TouchableOpacity = styled.TouchableOpacity<any>`
  background-color: ${props => props.color || props.theme.primary};
  padding: 16px;
  margin: 8px;
  border-radius: 4px;
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

export const ButtonGroup = styled.View<any>`
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0);
`;

export const TextInput = styled.TextInput<any>`
  border: 1px solid #ccc;
  height: 65px;
  margin-top: 5px;
  border-radius: 5px;
  padding: 0 20px;
`;

export const TextButton = styled(TouchableOpacity)<any>`
  background-color: rgba(0, 0, 0, 0);
`;
