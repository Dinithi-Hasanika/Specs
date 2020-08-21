import { Component, OnInit } from "@angular/core";
import { TopicsService } from "src/app/topics.service";
import { Topics } from "src/app/topics.model";
import { AuthService } from "../auth.service";
import { QuestionsService } from "../questions.service";
import { Questions } from "../questions.model";

@Component({
  selector: "app-add-new-question",
  templateUrl: "./add-new-question.component.html",
  styleUrls: ["./add-new-question.component.css"]
})
export class AddNewQuestionComponent implements OnInit {
  act: any;
  topics: Topics[];
  user: firebase.User;
  baseTopic: any;
  bdate: Date;
  bquestion: string;
  bquestionBy: string;
  bquestionApproved: boolean;
  successMessage: any;
  questionIDs: string[];
  answerApproved: boolean;
  oldQuestion: Questions;

  constructor(
    private topicService: TopicsService,
    private auth: AuthService,
    private questionService: QuestionsService
  ) {}

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
    });

    this.topicService.getTopics().subscribe(data => {
      this.topics = data.map(e => {
        if (e.payload.doc.get("Approved")) {
          return {
            id: e.payload.doc.id,
            topic: e.payload.doc.get("topic"),
            createdBy: e.payload.doc.get("createdBy"),
            approved: e.payload.doc.get("Approved"),
            date: e.payload.doc.get("date")
          } as Topics;
        } else {
          return null;
        }
      });

      for (var i = 0; i < this.topics.length; i++) {
        if (this.topics[i] === null) {
          this.topics.splice(i, 1);
          i--;
        }
      }
    });
  }

  setTopic(btopic: any) {
    if (btopic != null) {
      this.baseTopic = btopic;
    }
  }

  addNewQuestion(frm) {
    this.act = true;
    this.bquestion = frm.value.question;

    this.bquestionBy = this.user.displayName;
    if (this.user.displayName === "Admin") {
      this.bquestionApproved = true;
    } else {
      this.bquestionApproved = false;
    }

    this.bdate = new Date();
    const newQuestion = new Questions(
      "",
      this.baseTopic,
      this.bquestion,
      this.bquestionBy,
      this.bquestionApproved,
      this.bdate
    );
    this.questionService.addQuestions(newQuestion);
  }
}
