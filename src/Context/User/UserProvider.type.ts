import { IGroup } from "../../Components/Group/Group.type";

export interface IUserContext {
  name: string;
  isAuth: boolean;
  email: string;
  user?: any;
  actions?: Object;
  groupList: IGroup[];
}
