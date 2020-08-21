import { Component, OnInit } from "@angular/core";
import { TopicsService } from "src/app/topics.service";
import { Topics } from "src/app/topics.model";

@Component({
  selector: "app-approve-topics-list",
  templateUrl: "./approve-topics-list.component.html",
  styleUrls: ["./approve-topics-list.component.css"]
})
export class ApproveTopicsListComponent implements OnInit {
  topics: Topics[];
  constructor(private topicService: TopicsService) {}

  ngOnInit() {
    this.topicService.getTopics().subscribe(data => {
      this.topics = data.map(e => {
        if (!e.payload.doc.get("Approved")) {
          return {
            id: e.payload.doc.id,
            topic: e.payload.doc.get("topic"),
            createdBy: e.payload.doc.get("createdBy"),
            approved: e.payload.doc.get("Approved"),
            date: e.payload.doc.get("date")
          } as Topics;
        } else {
          return null;
        }
      });

      for (var i = 0; i < this.topics.length; i++) {
        if (this.topics[i] === null) {
          this.topics.splice(i, 1);
          i--;
        }
      }
    });
  }

  approveSelect(newTopic: Topics) {
    this.topicService.updateTopics(newTopic);
  }

  removeSelect(newTopic: Topics) {
    this.topicService.removeTopics(newTopic);
  }
}
