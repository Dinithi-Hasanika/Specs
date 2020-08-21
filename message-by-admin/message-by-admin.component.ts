import { Component, OnInit } from "@angular/core";
import { MessagesService } from "../messages.service";
import { Messages } from "../messages.model";

@Component({
  selector: "app-message-by-admin",
  templateUrl: "./message-by-admin.component.html",
  styleUrls: ["./message-by-admin.component.css"]
})
export class MessageByAdminComponent implements OnInit {
  messages: Messages[];
  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messagesService.getMessages().subscribe(data => {
      this.messages = data.map(e => {
        return {
          id: e.payload.doc.id,
          message: e.payload.doc.get("message"),
          messageBy: e.payload.doc.get("messageBy"),
          reply: e.payload.doc.get("reply"),
          date: e.payload.doc.get("date"),
          replied: e.payload.doc.get("replied")
        } as Messages;
      });

      for (var i = 0; i < this.messages.length; i++) {
        if (this.messages[i] === null) {
          this.messages.splice(i, 1);
          i--;
        }
      }
    });
  }
}
