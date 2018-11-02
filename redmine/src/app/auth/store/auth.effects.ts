import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { map, switchMap, mergeMap } from "rxjs/operators";
import { fromPromise } from "rxjs/observable/fromPromise";
import * as firebase from "firebase";
import * as AuthActions from "./auth.actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  @Effect()
  authRegister = this.actions$.ofType(AuthActions.TRY_REGISTER).pipe(
    map((action: AuthActions.TryRegister) => {
      return action.payload;
    }),
    switchMap((authData: { username: string; password: string }) => {
      return fromPromise(
        firebase
          .auth()
          .createUserWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      this.router.navigate(["/"]);
      return [
        {
          type: AuthActions.REGISTER
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect()
  authLogin = this.actions$.ofType(AuthActions.TRY_LOGIN).pipe(
    map((action: AuthActions.TryLogin) => {
      return action.payload;
    }),
    switchMap((authData: { username: string; password: string }) => {
      return fromPromise(
        firebase
          .auth()
          .signInWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      return [
        {
          type: AuthActions.LOGIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );
  constructor(private actions$: Actions, private router: Router) {}
}
