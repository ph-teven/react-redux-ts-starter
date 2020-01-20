import {ConnectedRouter, RouterState} from "connected-react-router";
import {createHashHistory} from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import "reflect-metadata";
import {Client} from "./api/Client";
import "./assets/scss/app.scss";
import {App} from "./components/App";
import {TokenStorage} from "./session";
import {defaultCounterState} from "./store/counter/reducer";
import {configureStore, Services} from "./store/helper";
import {defaultPingState} from "./store/ping/reducer";
import {ApplicationState} from "./store/reducer";
import {defaultSessionState} from "./store/session/reducer";

const services: Services = {
    apiClient: new Client(""),
    tokenStorage: new TokenStorage(),
};

const history = createHashHistory();

const defaultState: ApplicationState = {
    router: (undefined as any) as RouterState,
    counter: defaultCounterState,
    session: defaultSessionState(services.tokenStorage.getUser()),
    ping: defaultPingState,
};

const store = configureStore(defaultState, services, history);

const render = (Component: React.FunctionComponent) => ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <HashRouter hashType="slash">
                <Component />
            </HashRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

if ((module as any).hot) {
    (module as any).hot.accept("./components/App", () => {
        render(require("./components/App").App);
    });
}

render(App);
