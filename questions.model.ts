export class Questions {
  public id: string;
  public topic: string;
  public question: string;
  public questionBy: string;
  public questionApproved: boolean;
  public date: Date;

  constructor(
    id: string,
    topic: string,
    question: string,
    questionBy: string,
    questionApproved: boolean,
    date: Date
  ) {
    this.id = id;
    this.topic = topic;
    this.question = question;
    this.questionBy = questionBy;
    this.questionApproved = questionApproved;
    this.date = date;
  }
}
