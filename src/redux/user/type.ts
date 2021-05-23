import { UserActionType } from "./action-type";

export interface IUserState {
  user: any[];
  isLoad: boolean;
  error: null | string;
}

export interface IUserSuccessAction {
  type: UserActionType.SUCCESS_FETCH;
  payload: any[];
}

export interface IUserFetchErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}

export interface IUserFetchAction {
  type: UserActionType.FETCH_USERS;
}

export type UserAction = IUserSuccessAction | IUserFetchAction | IUserFetchErrorAction;