export interface LoginForm {
  email?: string;
  password?: string;
  isLoading?: boolean;
  scope?: string;
  callback?: Function;
}
