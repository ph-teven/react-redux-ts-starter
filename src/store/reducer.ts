import {connectRouter} from "connected-react-router";
import {History, LocationState} from "history";
import {combineReducers} from "redux";
import {counterReducer, CounterState} from "./counter/reducer";
import {RootAction} from "./helper";
import {pingReducer, PingState} from "./ping/reducer";
import {sessionReducer, SessionState} from "./session/reducer";

export type ApplicationState = {
    readonly router: LocationState,
    readonly counter: CounterState,
    readonly session: SessionState,
    readonly ping: PingState,
};

export const createRootReducer = (history: History) => combineReducers<ApplicationState, RootAction>({
    router: (connectRouter(history) as any),
    counter: counterReducer,
    session: sessionReducer,
    ping: pingReducer,
});
