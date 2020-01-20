import {Observable} from "rxjs";
import {delay, filter, map} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {RootAction} from "../helper";
import {ping, pong} from "./actions";

const pingEpic = (action$: Observable<RootAction>) => action$.pipe(
    filter(isActionOf(ping)),
    delay(1000),
    map(pong),
);

export const pingEpics = [
    pingEpic,
];
