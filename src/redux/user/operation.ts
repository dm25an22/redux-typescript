import { Dispatch } from "redux";
import { UserActionCreator } from "./action-creator";
import { UserAction } from "./type";

export const UserOperation = {
  fetchUsers: () => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(UserActionCreator.fetchUsers());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.status < 200 || response.status > 300) {
        throw new Error();
      }
      const json = await response.json();
      setTimeout(() => {
        dispatch(UserActionCreator.successFetch(json));
      }, 1000);
    } catch (error) {
      dispatch(UserActionCreator.usersFetchError("Error fetch users"));
    }
  },
};
