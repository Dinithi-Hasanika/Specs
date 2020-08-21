import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
  actionCodeSettings: any = {
    url: "http://localhost:4200/login",
    handleCodeInApp: false
  };
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {}

  getUserState() {
    return this.afAuth.authState;
  }

  createUser(user) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;

        userCredential.user.updateProfile({
          displayName: user.username
        });
        this.insertUserData(userCredential).then(() => {
          this.router.navigate(["/home"]);
        });
      })
      .catch(error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      username: this.newUser.username
    });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  login(user) {
    this.afAuth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        if (userCredential) {
          this.router.navigate(["/home"]);
        }
      })
      .catch(error => {
        this.eventAuthError.next(error);
      });
  }

  passwordReset(email: string) {
    this.afAuth.auth
      .sendPasswordResetEmail(email, this.actionCodeSettings)
      .then()
      .catch(error => {
        this.eventAuthError.next(error);
      });
  }
}
