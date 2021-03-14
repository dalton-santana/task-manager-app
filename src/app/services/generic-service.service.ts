import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private baseUrlApi = 'http://localhost:8080/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json', 'Authorization': `sLHBz9Zc8oMUiBtEhWpE` })
  };

  constructor(private http: HttpClient) { }


  login(item: any): Observable<any>{
    return this.http.post<any>(this.baseUrlApi  + 'api-token-auth/', item);
  }
  
  getAll(res): Observable<any>{
      return this.http.get<any>(this.baseUrlApi + res + "/", this.httpOptions);
  }


  getItem(res, pk: number,): Observable<any>{

      return this.http.get<any>(this.baseUrlApi + res + "/" + pk + "/", this.httpOptions);
  
  }


  updateItem (res, pk: any, item): Observable<any> {
      return this.http.patch(this.baseUrlApi + res + "/" + pk + "/", item, this.httpOptions);
  }


  additem (res, item: any): Observable<any> {
      return this.http.post<any>(this.baseUrlApi + res + "/", item, this.httpOptions);
  }
  

  deleteitem ( res, item: any | number): Observable<any> {
    const pk = typeof item === 'number' ? item : item.pk;
    const url = this.baseUrlApi + res + "/" + pk + "/";

    return this.http.delete<any>(String(url), this.httpOptions);
  }

}
