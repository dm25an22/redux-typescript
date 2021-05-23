import { UserActionType } from "./action-type";
import { IUserFetchAction, IUserFetchErrorAction, IUserSuccessAction } from "./type";

export const UserActionCreator = {
  successFetch: (data: any): IUserSuccessAction => ({
    type: UserActionType.SUCCESS_FETCH,
    payload: data,
  }),
  fetchUsers: (): IUserFetchAction => ({
    type: UserActionType.FETCH_USERS,
  }),
  usersFetchError: (error: string): IUserFetchErrorAction => ({
    type: UserActionType.FETCH_USERS_ERROR,
    payload: error,
  }),
};