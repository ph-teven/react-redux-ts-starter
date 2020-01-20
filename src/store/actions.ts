import {LocationChangePayload} from "connected-react-router";
import {createAction} from "typesafe-actions";

export * from "./counter/actions";
export * from "./session/actions";
export * from "./ping/actions";

// React-Router
export const locationCHanged = createAction("@@router/LOCATION_CHANGE")<LocationChangePayload>();
export const pushLocation = createAction("@@router/CALL_HISTORY_METHOD", (path: string) => ({
    method: "push",
    args: [path],
}))();
