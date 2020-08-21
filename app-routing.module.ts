import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { RegistrationComponent } from "./registration/registration.component";
import { MembershipComponent } from "./membership/membership.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { FrontPageComponent } from "./front-page/front-page.component";
import { AddTopicsAndQuestionsComponent } from "./add-topics-and-questions/add-topics-and-questions.component";
import { ApproveQuestionsAndTopicsComponent } from "./approve-questions-and-topics/approve-questions-and-topics.component";
import { MessageByAdminComponent } from "./message-by-admin/message-by-admin.component";
import { MessageByMemberComponent } from "./message-by-member/message-by-member.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "membership", component: MembershipComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "frontpage", component: FrontPageComponent },
  { path: "approve", component: ApproveQuestionsAndTopicsComponent },
  { path: "addnewtopic", component: AddTopicsAndQuestionsComponent },
  { path: "messagebyadmin", component: MessageByAdminComponent },
  { path: "messagebymember", component: MessageByMemberComponent },
  { path: "", redirectTo: "/frontpage", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  AboutComponent,
  RegistrationComponent,
  MembershipComponent
];
