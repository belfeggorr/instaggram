import { IAuth } from "../IAuth/IAuth";

export interface IAuthStoreState {
  user: IAuth;
  isAuth: boolean;
}
