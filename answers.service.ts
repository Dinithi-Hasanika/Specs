import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Answers } from "./answers.model";
import { QuestionsService } from "./questions.service";

@Injectable({
  providedIn: "root"
})
export class AnswersService {
  constructor(
    private firestore: AngularFirestore,
    private questionService: QuestionsService
  ) {}

  addAnswers(newAnswer: Answers) {
    this.firestore
      .collection("Answers")
      .add({
        topic: newAnswer.topic,
        date: newAnswer.date,
        question: newAnswer.question,
        answerBy: newAnswer.answerBy,
        answer: newAnswer.answer,
        questionID: newAnswer.questionID
      })
      .catch(error => {});

    this.questionService.updateTimeofTopics(newAnswer.topic);
  }

  getAnswers() {
    return this.firestore
      .collection("Answers", ref => ref.orderBy("date", "desc"))
      .snapshotChanges();
  }
}
