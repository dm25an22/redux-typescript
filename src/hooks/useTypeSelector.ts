import { TypedUseSelectorHook, useSelector } from "react-redux";
import {RootStateType} from "../redux/root-reducer";

export const useTypeSelector: TypedUseSelectorHook<RootStateType> = useSelector;