import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginInfo } from "src/app/interface/user-store.interface";

export const selectLoginStatusState = createFeatureSelector<LoginInfo>("login")

export const isLoggedin = createSelector(
    selectLoginStatusState,
    (login)=> login.status
)

export const isLoggedOut = createSelector(
    isLoggedin,
    (login)=> !login
)