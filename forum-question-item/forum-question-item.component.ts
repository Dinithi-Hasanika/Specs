import { Component, OnInit, Input } from "@angular/core";
import { Questions } from "../questions.model";
import { AuthService } from "../auth.service";
import { Answers } from "../answers.model";
import { AnswersService } from "../answers.service";

@Component({
  selector: "app-forum-question-item",
  templateUrl: "./forum-question-item.component.html",
  styleUrls: ["./forum-question-item.component.css"]
})
export class ForumQuestionItemComponent implements OnInit {
  @Input() newQuestion: Questions;
  act: any;
  ans: string;
  topic: string;
  questionID: string;
  date: Date;
  question: string;
  answerBy: string;
  user: firebase.User;
  answers: Answers[];
  constructor(
    private auth: AuthService,
    private answerService: AnswersService
  ) {}

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
    });
  }

  ngOnChanges() {
    this.setAnswers();
  }

  onAnswer() {
    this.act = !this.act;
  }

  setAnswers() {
    this.answerService.getAnswers().subscribe(data => {
      this.answers = data.map(e => {
        if (e.payload.doc.get("questionID") === this.newQuestion.id) {
          return {
            id: e.payload.doc.id,
            topic: e.payload.doc.get("topic"),
            answerBy: e.payload.doc.get("answerBy"),
            answer: e.payload.doc.get("answer"),
            date: e.payload.doc.get("date"),
            question: e.payload.doc.get("question"),
            questionID: e.payload.doc.get("questionID")
          } as Answers;
        } else {
          return null;
        }
      });

      for (var i = 0; i < this.answers.length; i++) {
        if (this.answers[i] === null) {
          this.answers.splice(i, 1);
          i--;
        }
      }
    });
  }

  addAnswer(frm) {
    this.ans = frm.value.answer;
    this.topic = this.newQuestion.topic;
    this.questionID = this.newQuestion.id;
    this.date = new Date();
    this.question = this.newQuestion.question;
    this.answerBy = this.user.displayName;

    const newAnswer = new Answers(
      "",
      this.topic,
      this.questionID,
      this.question,
      this.date,
      this.ans,
      this.answerBy
    );
    this.answerService.addAnswers(newAnswer);
    this.act = !this.act;
  }
}
