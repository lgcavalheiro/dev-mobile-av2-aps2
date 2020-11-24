import styled from "styled-components/native";
import { ScrollView } from "../../../Shared/StyledComponents";

export const ChatLog = styled(ScrollView)`
  height: 34%;
  width: 90%;
  padding-top: 0px;
  margin-top: 32px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: ${props => props.theme.quarternary + "cc"};
`;
