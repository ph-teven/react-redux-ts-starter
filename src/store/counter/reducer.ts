import {createReducer} from "typesafe-actions";
import {RootAction} from "../helper";
import {decrementCounter, incrementCounter,} from "./actions";

export type CounterState = {
    readonly value: number,
};

export const defaultCounterState: CounterState = {
    value: 0
};

export const counterReducer = createReducer<CounterState, RootAction>(defaultCounterState)
    .handleAction(incrementCounter, (state, _) => ({
        ...state,
        value: state.value + 1,
    }))
    .handleAction(decrementCounter, (state, _) => ({
        ...state,
        value: state.value - 1,
    }))
;
