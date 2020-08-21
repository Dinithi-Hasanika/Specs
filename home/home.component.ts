import { Component, OnInit } from "@angular/core";
import { TopicsService } from "src/app/topics.service";
import { Topics } from "src/app/topics.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  topics: Topics[];
  baseTopic: string;
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
  setTopic(btopic: any) {
    if (btopic != null) {
      this.baseTopic = btopic;
    }
  }
}
