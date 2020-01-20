import {StateObservable} from "redux-observable";
import {Observable, Observer} from "rxjs";
import {filter, mergeMap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {pushLocation} from "../actions";
import {RootAction, Services} from "../helper";
import {ApplicationState} from "../reducer";
import {loginUser, logoutUser} from "./actions";

const loginUserEpic = (action$: Observable<RootAction>, state$: StateObservable<ApplicationState>, {tokenStorage}: Services) => action$.pipe(
    filter(isActionOf(loginUser)),
    mergeMap((action) => new Observable((observer: Observer<RootAction>) => {
        tokenStorage.login(action.payload);

        observer.next(pushLocation("/counter"));
        observer.complete();
    })),
);

const logoutUserEpic = (action$: Observable<RootAction>, state$: StateObservable<ApplicationState>, {tokenStorage}: Services) => action$.pipe(
    filter(isActionOf(logoutUser)),
    mergeMap(() => new Observable((observer: Observer<RootAction>) => {
        tokenStorage.logout();

        observer.complete();
    })),
);

export const sessionEpics = [
    loginUserEpic,
    logoutUserEpic,
];
