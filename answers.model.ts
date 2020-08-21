export class Answers {
  public id: string;
  public topic: string;
  public questionID: string;
  public question: string;
  public date: Date;
  public answer: string;
  public answerBy: string;

  constructor(
    id: string,
    topic: string,
    questionID: string,
    question: string,
    date: Date,
    answer: string,
    answerBy: string
  ) {
    this.id = id;
    this.topic = topic;
    this.questionID = questionID;
    this.question = question;
    this.date = date;
    this.answer = answer;
    this.answerBy = answerBy;
  }
}
