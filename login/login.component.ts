import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  act: any;
  authError: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  login(frm) {
    this.auth.login(frm.value);
  }

  sendLink(frm) {
    this.auth.passwordReset(frm.value.resetemail);
  }

  onAct() {
    this.act = true;
  }
}
