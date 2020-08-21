import { Component, OnInit, Input } from "@angular/core";
import { Answers } from "../answers.model";

@Component({
  selector: "app-forum-answer-item",
  templateUrl: "./forum-answer-item.component.html",
  styleUrls: ["./forum-answer-item.component.css"]
})
export class ForumAnswerItemComponent implements OnInit {
  @Input() newAnswer: Answers;
  constructor() {}

  ngOnInit() {}
}
