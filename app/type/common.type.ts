import {Dispatch} from "react";
import {SetStateAction} from "react";

export type TypeSetState<T>=Dispatch<SetStateAction<T>>