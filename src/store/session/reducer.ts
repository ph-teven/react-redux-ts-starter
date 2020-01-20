import {createReducer} from "typesafe-actions";
import {UserToken} from "../../session";
import {RootAction} from "../helper";
import {loginUser, logoutUser} from "./actions";

export type SessionState = {
    readonly user?: UserToken,
};

export const defaultSessionState = (user?: UserToken): SessionState => ({
    user: user,
});

export const sessionReducer = createReducer<SessionState, RootAction>(defaultSessionState())
    .handleAction(loginUser, (state, {payload}) => ({
        ...state,
        user: payload,
    }))
    .handleAction(logoutUser, (state, _) => ({
        ...state,
        user: undefined,
    }));
