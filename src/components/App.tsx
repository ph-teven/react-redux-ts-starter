import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Switch} from "react-router";
import {Route} from "react-router-dom";
import {PrivateRoute} from "../PrivateRoute";
import {pushLocation} from "../store/actions";
import {ApplicationState} from "../store/reducer";
import {CounterRoute} from "./routes/CounterRoute";
import {PingRoute} from "./routes/PingRoute";
import {SessionRoute} from "./routes/SessionRoute";

export const App: React.FunctionComponent = () => {
    const user = useSelector((state: ApplicationState) => state.session.user);

    const dispatch = useDispatch();

    const navigate = useCallback((path: string) => {
        dispatch(pushLocation(path))
    }, [dispatch]);

    return (
        <div>
            <p>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/ping")}>Ping</button>
                {user && <button onClick={() => navigate("/counter")}>Counter</button>}
            </p>

            <Switch>
                <Route exact path="/" component={SessionRoute} />
                <Route exact path="/ping" component={PingRoute} />
                <PrivateRoute exact path="/counter" isLoggedIn={user != null} component={CounterRoute} />
            </Switch>
        </div>
    )
};
