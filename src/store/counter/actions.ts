import {createAction} from "typesafe-actions";

export const incrementCounter = createAction("@@counter/INCREMENT_COUNTER")();
export const decrementCounter = createAction("@@counter/DECREMENT_COUNTER")();
