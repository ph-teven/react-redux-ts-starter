import * as React from "react";
import {Redirect, Route, RouteComponentProps, RouteProps} from "react-router-dom";

type Props = {
    component: any,
    isLoggedIn: boolean,
} & RouteProps;

export const PrivateRoute = ({component: Component, isLoggedIn, ...rest}: Props) => {
    const privateRender = (props: RouteComponentProps<any>) => {
        const redirectProps = {
            pathname: "/",
            state: {from: props.location},
        };

        return isLoggedIn
            ? (<Component {...props} />)
            : (<Redirect to={redirectProps} />);
    };

    return <Route{...rest} render={privateRender} />;
};
