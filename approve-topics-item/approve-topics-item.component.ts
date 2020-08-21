import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Topics } from "../topics.model";

@Component({
  selector: "app-approve-topics-item",
  templateUrl: "./approve-topics-item.component.html",
  styleUrls: ["./approve-topics-item.component.css"]
})
export class ApproveTopicsItemComponent implements OnInit {
  @Input() newTopic: Topics;
  @Output() approveSelected = new EventEmitter<void>();
  @Output() removeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onApprove() {
    this.approveSelected.emit();
  }

  onRemove() {
    this.removeSelected.emit();
  }
}
