import styled from "styled-components";
import { View } from "../../../Shared/StyledComponents";

export const Message = styled(View)`
  background-color: ${props => (props.isOwner ? props.theme.secondary : props.theme.primary)};
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 4px;
  border-top-right-radius: ${props => (props.isOwner ? "0px" : "8px")};
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius:  ${props => (props.isOwner ? "8px" : "0px")};
  align-items: ${props => (props.isOwner ? "flex-end" : "flex-start")};
`;
