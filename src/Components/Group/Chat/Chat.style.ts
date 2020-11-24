import styled from "styled-components/native";
import { ScrollView } from "../../../Shared/StyledComponents";

export const ChatLog = styled.ScrollView<any>`
  align-self: center;
  padding: 20px;
  width: 340px;
  padding-top: 0px;
  margin-top: 32px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: ${props => props.theme.quarternary + "cc"};
`;
