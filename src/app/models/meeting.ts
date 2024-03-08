import { Time } from "@angular/common";

export class Meeting {
  id: number = 0;
  meetingName: string = '';
  meetingSubject: string = '';
  meetingResponsible: string = '';
  meetingDate?: Date;
  meetingTime?: Time;
}
