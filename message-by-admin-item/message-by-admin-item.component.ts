import { Component, OnInit, Input } from "@angular/core";
import { Messages } from "../messages.model";
import { MessagesService } from "../messages.service";

@Component({
  selector: "app-message-by-admin-item",
  templateUrl: "./message-by-admin-item.component.html",
  styleUrls: ["./message-by-admin-item.component.css"]
})
export class MessageByAdminItemComponent implements OnInit {
  @Input() msg: Messages;
  act: any;
  constructor(private messagesService: MessagesService) {}

  ngOnInit() {}

  onMessage() {
    this.act = !this.act;
  }

  addReply(frm) {
    const newMessage = new Messages(
      this.msg.id,
      this.msg.message,
      this.msg.messageBy,
      frm.value.reply,
      true,
      new Date()
    );
    this.messagesService.updateMessages(newMessage);
  }
}
