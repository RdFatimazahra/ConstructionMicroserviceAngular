import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { projet } from '../interfaces/projet';

const BASE_URL = 'http://localhost:8087/api/v1/auth';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {

  constructor(private http: HttpClient) { }

  createProjet(projet: projet): Observable<projet> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<projet>(BASE_URL, projet, { headers });
  }

   deleteProjet(id: number): Observable<void> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete<void>(`${BASE_URL}/${id}`, { headers });
  }

 



  updateProjet(projet: projet, idProjet: number): Observable<projet> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<projet>(`${BASE_URL}/${idProjet}`, projet, { headers });
  }

  getProjetById(idProjet: number): Observable<projet> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<projet>(`${BASE_URL}/${idProjet}`, { headers });
  }

  getProjetList(): Observable<projet[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<projet[]>(`${BASE_URL}`, { headers });
  }

  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }
  }
}
