import { DataInfo } from "../../enum/server/data-state.enum";

export interface ServerSatate<T>{
    dataState: DataInfo;
    serverData?: T;
    error?: string;
}