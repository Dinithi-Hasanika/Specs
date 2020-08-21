import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { MessagesService } from "../messages.service";
import { Messages } from "../messages.model";

@Component({
  selector: "app-message-by-member",
  templateUrl: "./message-by-member.component.html",
  styleUrls: ["./message-by-member.component.css"]
})
export class MessageByMemberComponent implements OnInit {
  user: firebase.User;
  message: string;
  date: Date;
  messageBy: string;
  messages: Messages[];

  constructor(
    private auth: AuthService,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
    });

    this.messagesService.getMessages().subscribe(data => {
      this.messages = data.map(e => {
        if (e.payload.doc.get("messageBy") === this.user.displayName) {
          return {
            id: e.payload.doc.id,
            message: e.payload.doc.get("message"),
            messageBy: e.payload.doc.get("messageBy"),
            reply: e.payload.doc.get("reply"),
            date: e.payload.doc.get("date"),
            replied: e.payload.doc.get("replied")
          } as Messages;
        } else {
          return null;
        }
      });

      for (var i = 0; i < this.messages.length; i++) {
        if (this.messages[i] === null) {
          this.messages.splice(i, 1);
          i--;
        }
      }
    });
  }

  sendMessage(frm) {
    this.message = frm.value.message;
    this.date = new Date();
    this.messageBy = this.user.displayName;
    const newMessage = new Messages(
      "",
      this.message,
      this.messageBy,
      "",
      false,
      this.date
    );
    this.messagesService.addMessages(newMessage);
  }

  onRefresh() {
    window.location.reload();
  }
}
