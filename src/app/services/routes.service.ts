import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http: HttpClient ) { }

  fetchRoutes(): Observable<any>{
    return this.http.get("../../assets/navRoutes.json");
  }

  
}
