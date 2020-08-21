export class Topics {
  public id: string;
  public topic: string;
  public createdBy: string;
  public approved: boolean;
  public date: Date;

  constructor(
    id: string,
    topic: string,
    createdBy: string,
    approved: boolean,
    date: Date
  ) {
    this.id = id;
    this.topic = topic;
    this.approved = approved;
    this.createdBy = createdBy;
    this.date = date;
  }
}
