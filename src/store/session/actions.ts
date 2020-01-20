import {createAction} from "typesafe-actions";
import {UserToken} from "../../session";

export const loginUser = createAction("@@counter/LOGIN_USER")<UserToken>();
export const logoutUser = createAction("@@counter/LOGOUT_USER")();
