import { combineReducers } from "redux";
import { NameSpace } from "./name-space";
import {userReducer} from "./user/reducer";

export const rootTeducer = combineReducers({
  [NameSpace.USERS]: userReducer,
});

export type RootStateType = ReturnType<typeof rootTeducer>;
