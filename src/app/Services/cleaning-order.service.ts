import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CleaningOrder } from '../models/cleaning-order';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CleaningOrderServiceService {

  private cleaningOrdersUrl: string;
 
  constructor(private http: HttpClient) {
    this.cleaningOrdersUrl = 'http://localhost:8080/cleaningorders';
  }
 
  public findAll(): Observable<CleaningOrder[]> {
    return this.http.get<CleaningOrder[]>(this.cleaningOrdersUrl);
  }
 
  public save(cleaningOrder: CleaningOrder) {
    return this.http.post<CleaningOrder>(this.cleaningOrdersUrl, cleaningOrder);
  }
  public deleteCleaningOrder(id: number): Observable<any> {
    return this.http.delete(`${this.cleaningOrdersUrl}/${id}`, { responseType: 'text' });
  }
  public getCleaningOrder(id: number): Observable<CleaningOrder> {
    return this.http.get<CleaningOrder>(this.cleaningOrdersUrl+"/"+id);

  }

}
