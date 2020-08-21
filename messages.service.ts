import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Messages } from "./messages.model";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  constructor(private firestore: AngularFirestore) {}

  addMessages(newMessage: Messages) {
    this.firestore
      .collection("Messages")
      .add({
        message: newMessage.message,
        date: newMessage.date,
        messageBy: newMessage.messageBy,
        reply: newMessage.reply,
        replied: newMessage.replied
      })
      .catch();
  }

  getMessages() {
    return this.firestore
      .collection("Messages", ref => ref.orderBy("date", "desc"))
      .snapshotChanges();
  }

  updateMessages(newMessage: Messages) {
    this.firestore.doc("Messages/" + newMessage.id).update({
      reply: newMessage.reply,
      replied: true,
      date: new Date()
    });
  }
}
