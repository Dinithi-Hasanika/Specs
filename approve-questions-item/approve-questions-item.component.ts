import { Component, OnInit, Input } from "@angular/core";
import { Questions } from "../questions.model";
import { QuestionsService } from "../questions.service";
import { AuthService } from "../auth.service";
import { Answers } from "../answers.model";
import { AnswersService } from "../answers.service";

@Component({
  selector: "app-approve-questions-item",
  templateUrl: "./approve-questions-item.component.html",
  styleUrls: ["./approve-questions-item.component.css"]
})
export class ApproveQuestionsItemComponent implements OnInit {
  @Input() newQuestion: Questions;
  act: any;
  ans: string;
  topic: string;
  questionID: string;
  date: Date;
  question: string;
  answerBy: string;
  user: firebase.User;
  constructor(
    private questionsService: QuestionsService,
    private auth: AuthService,
    private answerService: AnswersService
  ) {}

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
    });
  }

  onApprove() {
    this.questionsService.updateQuestions(this.newQuestion);
  }

  onRemove() {
    this.questionsService.removeQuestions(this.newQuestion);
  }

  onAnswer() {
    this.act = !this.act;
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
    this.questionsService.updateQuestions(this.newQuestion);
  }
}
