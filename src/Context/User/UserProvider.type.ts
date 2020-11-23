export interface IUserContext {
  name: string;
  isAuth: boolean;
  email: string;
  user?: any;
  actions?: Object;
}
