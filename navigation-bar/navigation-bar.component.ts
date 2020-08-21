import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {
  user: firebase.User;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.auth.logOut();
  }
}
