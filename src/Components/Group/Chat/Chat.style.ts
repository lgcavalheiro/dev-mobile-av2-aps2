import styled from "styled-components/native";

export const ChatLog = styled.ScrollView<any>`
  height: 84%;
  width: 90%;
  padding: 20px;
  margin-top: 32px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: ${props => props.theme.quarternary + "cc"};
`;
