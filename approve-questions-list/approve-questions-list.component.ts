import { Component, OnInit } from "@angular/core";
import { Questions } from "../questions.model";
import { QuestionsService } from "../questions.service";

@Component({
  selector: "app-approve-questions-list",
  templateUrl: "./approve-questions-list.component.html",
  styleUrls: ["./approve-questions-list.component.css"]
})
export class ApproveQuestionsListComponent implements OnInit {
  questions: Questions[];
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(data => {
      this.questions = data.map(e => {
        if (!e.payload.doc.get("questionApproved")) {
          return {
            id: e.payload.doc.id,
            topic: e.payload.doc.get("topic"),
            questionBy: e.payload.doc.get("questionBy"),
            questionApproved: e.payload.doc.get("questionApproved"),
            date: e.payload.doc.get("date"),
            question: e.payload.doc.get("question")
          } as Questions;
        } else {
          return null;
        }
      });

      for (var i = 0; i < this.questions.length; i++) {
        if (this.questions[i] === null) {
          this.questions.splice(i, 1);
          i--;
        }
      }
    });
  }
}
