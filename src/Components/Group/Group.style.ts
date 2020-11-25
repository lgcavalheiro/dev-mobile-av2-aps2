import styled from "styled-components/native";

export const CreateGroupButton = styled.TouchableOpacity<any>`
  width: 60px;
  height: 60px;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  background-color: ${props => props.theme.tertiary};
  position: absolute;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  left: 10px;
  z-index: 2;
`;
