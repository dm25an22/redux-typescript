import { UserActionType } from "./action-type";
import { UserAction, IUserState } from "./type";

const initialState: IUserState = {
  user: [],
  isLoad: false,
  error: null,
};

export const userReducer = (
  state: IUserState = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case UserActionType.SUCCESS_FETCH:
      return { ...state, isLoad: false, user: action.payload };

    case UserActionType.FETCH_USERS:
      return { ...state, isLoad: true };

    case UserActionType.FETCH_USERS_ERROR:
      return { ...state, isLoad: false, error: action.payload };

    default:
      return state;
  }
};
