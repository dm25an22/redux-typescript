import { NameSpace } from "../name-space";
import { RootStateType } from "../root-reducer";
import { IUserState } from "./type";

export const getUser = (state: RootStateType): IUserState => {
  return state[NameSpace.USERS];
};
