import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ping} from "../../store/ping/actions";
import {ApplicationState} from "../../store/reducer";

export const PingRoute: React.FunctionComponent = () => {
    const value = useSelector((state: ApplicationState) => state.ping.value);

    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        dispatch(ping());
    }, [dispatch]);

    return (
        <div>
            <p>
                <button onClick={onClick}>PING</button>
            </p>
            <p>{value}</p>
        </div>
    )
};
