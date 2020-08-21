import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { MembershipComponent } from "./membership/membership.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FrontPageComponent } from "./front-page/front-page.component";
import { AddNewTopicComponent } from './add-new-topic/add-new-topic.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';
import { AddTopicsAndQuestionsComponent } from './add-topics-and-questions/add-topics-and-questions.component';
import { ApproveTopicsListComponent } from './approve-topics-list/approve-topics-list.component';
import { ApproveTopicsItemComponent } from './approve-topics-item/approve-topics-item.component';
import { ApproveQuestionsListComponent } from './approve-questions-list/approve-questions-list.component';
import { ApproveQuestionsItemComponent } from './approve-questions-item/approve-questions-item.component';
import { ApproveQuestionsAndTopicsComponent } from './approve-questions-and-topics/approve-questions-and-topics.component';
import { ForumQuestionListComponent } from './forum-question-list/forum-question-list.component';
import { ForumQuestionItemComponent } from './forum-question-item/forum-question-item.component';
import { ForumAnswerListComponent } from './forum-answer-list/forum-answer-list.component';
import { ForumAnswerItemComponent } from './forum-answer-item/forum-answer-item.component';
import { MessageByAdminComponent } from './message-by-admin/message-by-admin.component';
import { MessageByMemberComponent } from './message-by-member/message-by-member.component';
import { MessageByMemberItemComponent } from './message-by-member-item/message-by-member-item.component';
import { MessageByAdminItemComponent } from './message-by-admin-item/message-by-admin-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    MembershipComponent,
    HomeComponent,
    FrontPageComponent,
    AddNewTopicComponent,
    AddNewQuestionComponent,
    AddTopicsAndQuestionsComponent,
    ApproveTopicsListComponent,
    ApproveTopicsItemComponent,
    ApproveQuestionsListComponent,
    ApproveQuestionsItemComponent,
    ApproveQuestionsAndTopicsComponent,
    ForumQuestionListComponent,
    ForumQuestionItemComponent,
    ForumAnswerListComponent,
    ForumAnswerItemComponent,
    MessageByAdminComponent,
    MessageByMemberComponent,
    MessageByMemberItemComponent,
    MessageByAdminItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
