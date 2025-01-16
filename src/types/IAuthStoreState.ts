import { IAuth } from "./IAuth";

export interface IAuthStoreState {
  user: IAuth;
  isAuth: boolean;
}
