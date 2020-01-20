import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrementCounter, incrementCounter} from "../../store/counter/actions";
import {ApplicationState} from "../../store/reducer";
import {logoutUser} from "../../store/session/actions";

export const CounterRoute: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: ApplicationState) => state.counter.value);

    const logout = useCallback(() => {
        dispatch(logoutUser())
    }, [dispatch]);

    const increment = useCallback(() => {
        dispatch(incrementCounter())
    }, [dispatch]);

    const decrement = useCallback(() => {
        dispatch(decrementCounter())
    }, [dispatch]);

    return (
        <div>
            <p>Counter value: {value}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={logout}>Logout User</button>
        </div>
    )
};
