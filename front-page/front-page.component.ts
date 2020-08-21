import { Component, OnInit } from "@angular/core";
import { TopicsService } from "src/app/topics.service";
import { Topics } from "src/app/topics.model";

@Component({
  selector: "app-front-page",
  templateUrl: "./front-page.component.html",
  styleUrls: ["./front-page.component.css"]
})
export class FrontPageComponent implements OnInit {
  topics: Topics[];
  act: any;
  constructor(private topicService: TopicsService) {}

  ngOnInit() {
    this.topicService.getTopics().subscribe(data => {
      this.topics = data.map(e => {
        if (e.payload.doc.get("Approved")) {
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

  onAct() {
    this.act = true;
  }
}
