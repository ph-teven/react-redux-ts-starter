import {combineEpics} from "redux-observable";
import {pingEpics} from "./ping/epics";
import {sessionEpics} from "./session/epics";

export const rootEpic = combineEpics(
    ...sessionEpics,
    ...pingEpics,
);
