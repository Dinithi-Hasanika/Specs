import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Topics } from "src/app/topics.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TopicsService {
  private eventAddTopic = new BehaviorSubject<string>("");
  eventAddTopic$ = this.eventAddTopic.asObservable();
  constructor(private firestore: AngularFirestore) {}
  inSuccess: string = "Your Topic has added to admin review";

  getTopics() {
    return this.firestore
      .collection("Topics", ref => ref.orderBy("date", "desc"))
      .snapshotChanges();
  }

  addTopics(newTopic: Topics) {
    this.firestore
      .collection("Topics")
      .add({
        topic: newTopic.topic,
        Approved: newTopic.approved,
        createdBy: newTopic.createdBy,
        date: newTopic.date
      })
      .catch(error => {
        this.eventAddTopic.next(error);
      });
  }

  updateTopics(newTopic: Topics) {
    this.firestore.doc("Topics/" + newTopic.id).update({
      Approved: true,
      date: new Date()
    });
  }

  removeTopics(newTopic: Topics) {
    this.firestore.doc("Topics/" + newTopic.id).delete();
  }
}
