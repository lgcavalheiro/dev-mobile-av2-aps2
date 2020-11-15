import styled from "styled-components/native";
import { TouchableOpacity } from "../../Shared/StyledComponents";
import { MainTheme } from "../../Shared/ColorPalette";

//should use maintheme but it breaks because typescript sucks

export const UserButton = styled(TouchableOpacity)<any>`
  border-bottom-width: 4px;
  border-bottom-color: ${props => (props.lastClick ? "#AE1B73" : "#f5f5f5")};
  height: 60px;
  margin: 0px 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(TouchableOpacity)<any>`
  height: 60px;
  margin: 0px 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid #ae1b73;
`;
