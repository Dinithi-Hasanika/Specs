import { Component, OnInit } from "@angular/core";
import { Topics } from "src/app/topics.model";
import { TopicsService } from "src/app/topics.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-add-new-topic",
  templateUrl: "./add-new-topic.component.html",
  styleUrls: ["./add-new-topic.component.css"]
})
export class AddNewTopicComponent implements OnInit {
  user: firebase.User;

  topic: string;
  createdBy: string;
  approved: boolean;
  date: Date;
  successMessage: any;
  act: any;

  constructor(private topicService: TopicsService, private auth: AuthService) {}

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
    });
    this.topicService.eventAddTopic$.subscribe(data => {
      this.successMessage = data;
    });
  }

  addTopic(frm) {
    this.act = true;
    this.topic = frm.value.newtopic;
    this.createdBy = this.user.displayName;

    if (this.user.displayName === "Admin") {
      this.approved = true;
    } else {
      this.approved = false;
    }
    this.date = new Date();
    const addnewtopic = new Topics(
      "",
      this.topic,
      this.createdBy,
      this.approved,
      this.date
    );
    this.topicService.addTopics(addnewtopic);
  }
}
