import { DataInfo } from "../enum/server/data-state.enum";

export interface UserState<U>{
    dataState: DataInfo;
    error?: string | null,
    userData?:U;
}