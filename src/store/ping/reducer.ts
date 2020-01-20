import {createReducer} from "typesafe-actions";
import {RootAction} from "../helper";
import {ping, pong,} from "./actions";

export type PingState = {
    readonly value: string,
};

export const defaultPingState: PingState = {
    value: ""
};

export const pingReducer = createReducer<PingState, RootAction>(defaultPingState)
    .handleAction(ping, (state, _) => ({
        ...state,
        value: "PING",
    }))
    .handleAction(pong, (state, _) => ({
        ...state,
        value: "PONG",
    }));
