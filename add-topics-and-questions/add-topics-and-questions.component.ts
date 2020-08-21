import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-topics-and-questions",
  templateUrl: "./add-topics-and-questions.component.html",
  styleUrls: ["./add-topics-and-questions.component.css"]
})
export class AddTopicsAndQuestionsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onRefresh() {
    window.location.reload();
  }
}
