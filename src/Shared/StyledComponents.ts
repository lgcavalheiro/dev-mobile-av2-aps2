import styled from "styled-components/native";

export const View = styled.View<any>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
`;

export const Text = styled.Text<any>`
  color: ${props => props.color || props.theme.text};
`;

export const TouchableOpacity = styled.TouchableOpacity<any>`
  background-color: ${props => props.theme.primary};
  padding: 16px;
  margin: 8px;
  border-radius: 4px;
`;
