export class Messages {
  public id: string;
  public message: string;
  public messageBy: string;
  public reply: string;
  public replied: boolean;
  public date: Date;

  constructor(
    id: string,
    message: string,
    messageBy: string,
    reply: string,
    replied: boolean,
    date: Date
  ) {
    this.id = id;
    this.message = message;
    this.messageBy = messageBy;
    this.reply = reply;
    this.replied = replied;
    this.date = date;
  }
}
