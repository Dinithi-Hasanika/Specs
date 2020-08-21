import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Questions } from "src/app/questions.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  private eventAddQuestion = new BehaviorSubject<string>("");
  eventAddQuestion$ = this.eventAddQuestion.asObservable();

  constructor(private firestore: AngularFirestore) {}

  addQuestions(newQuestion: Questions) {
    this.firestore
      .collection("Questions")
      .add({
        topic: newQuestion.topic,
        date: newQuestion.date,
        question: newQuestion.question,
        questionBy: newQuestion.questionBy,
        questionApproved: newQuestion.questionApproved
      })
      .catch(error => {
        this.eventAddQuestion.next(error);
      });

    this.updateTimeofTopics(newQuestion.topic);
  }

  getQuestions() {
    return this.firestore
      .collection("Questions", ref => ref.orderBy("date", "desc"))
      .snapshotChanges();
  }

  updateQuestions(newQuestion: Questions) {
    this.firestore.doc("Questions/" + newQuestion.id).update({
      questionApproved: true,
      date: new Date()
    });

    this.updateTimeofTopics(newQuestion.topic);
  }

  removeQuestions(newQuestion: Questions) {
    this.firestore.doc("Questions/" + newQuestion.id).delete();
  }

  updateTimeofTopics(topic: string) {
    this.firestore
      .collection("Topics", ref => ref.where("topic", "==", topic))
      .snapshotChanges()
      .subscribe(data =>
        data.map(e => {
          this.firestore.doc("Topics/" + e.payload.doc.id).update({
            date: new Date()
          });
        })
      );
  }
}
