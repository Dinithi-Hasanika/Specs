import { Component, OnInit, Input } from "@angular/core";
import { Messages } from "../messages.model";

@Component({
  selector: "app-message-by-member-item",
  templateUrl: "./message-by-member-item.component.html",
  styleUrls: ["./message-by-member-item.component.css"]
})
export class MessageByMemberItemComponent implements OnInit {
  @Input() msg: Messages;
  constructor() {}

  ngOnInit() {}
}
