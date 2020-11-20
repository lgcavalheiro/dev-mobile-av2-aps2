import styled from "styled-components/native";
import { TouchableOpacity } from "../../Shared/StyledComponents";
import { MainTheme } from "../../Shared/ColorPalette";

export const UserButton = styled(TouchableOpacity)`
  border-bottom-width: 4px;
  border-bottom-color: ${props => (props.lastClick ? MainTheme.primary : MainTheme.background)};
  height: 60px;
  margin: 0px 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(TouchableOpacity)`
  height: 60px;
  margin: 0px 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid ${MainTheme.primary};
`;
