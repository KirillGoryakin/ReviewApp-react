import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { TypedUseSelectorHook } from "react-redux/es/types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;