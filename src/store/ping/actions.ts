import {createAction} from "typesafe-actions";

export const ping = createAction("@@ping/PING")();
export const pong = createAction("@@ping/PONG")();
