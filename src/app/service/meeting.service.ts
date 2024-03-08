import { Meeting } from './../models/meeting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  url_api: string = 'http://localhost:3000/meeting';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  criaMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(`${this.url_api}/Meeting`, meeting);
  }

  listaDeMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.url_api}`);
  }

  deletaMeeting(id: number) {
    return this.http.delete(`${this.url_api}/${id}`);
  }

  pegaMeeting(id: number): Observable<Meeting> {
    return this.http.get<Meeting>(`${this.url_api}/${id}`);
  }

// atualizarMeeting(meeting: Meeting): Observable<Meeting> {
//    return this.http.put<Meeting>(`${this.url_api}/${meeting.Id}`);
//  }
}
