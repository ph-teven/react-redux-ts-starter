import * as React from "react";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/session/actions";

export const SessionRoute: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        dispatch(loginUser({email: "mail@example.com", token: "jwt-goes-here"}))
    }, [dispatch]);

    return (
        <div>
            Session Route
            <button onClick={onClick}>Login User</button>
        </div>
    )
};
