import {routerMiddleware} from "connected-react-router";
import {History} from "history";
import {applyMiddleware, compose, createStore, Middleware, Store} from "redux";
import {createEpicMiddleware} from "redux-observable";
import {ActionType} from "typesafe-actions";
import {ApiClientInterface} from "../api/Client";
import {TokenStorageInterface} from "../session";
import * as actions from "./actions";
import {rootEpic} from "./epics";
import {ApplicationState, createRootReducer} from "./reducer";

export type Services = {
    readonly apiClient: ApiClientInterface,
    readonly tokenStorage: TokenStorageInterface
};

export type RootAction = ActionType<typeof actions>;

const logger: Middleware = () => (next) => (action) => {
    console.log(action);

    return next(action);
};

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (something: any) => any;
    }
}

export const configureStore = (initialState: ApplicationState, services: Services, history: History): Store<ApplicationState> => {
    const composeEnhancers = (window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const epicMiddleware = createEpicMiddleware({
        dependencies: services,
    });

    // configure middlewares
    const middlewares = [
        routerMiddleware(history),
        epicMiddleware,
        logger,
    ];

    // compose enhancers
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
    );

    // create store
    const store = createStore(createRootReducer(history), initialState, enhancer);

    if ((module as any).hot) {
        (module as any).hot.accept("./reducer", () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    epicMiddleware.run(rootEpic as any);

    return store;
};
