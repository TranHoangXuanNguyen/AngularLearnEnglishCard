import { Injectable } from '@angular/core';
import { EnglishCard } from './english-card';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root',
})
export class EnglishCardService {
  private apiUrl = 'https://67c15d3761d8935867e2b20b.mockapi.io/cardItem';
  // protected englishCardList: EnglishCard[] = [];

  constructor(private http: HttpClient) {}
  getData(): Observable<EnglishCard[]> {
    return this.http.get<EnglishCard[]>(this.apiUrl);
  }
  addCard(card: EnglishCard): Observable<EnglishCard> {
    return this.http.post<EnglishCard>(this.apiUrl, card);
  }

  getById(id: number): Observable<EnglishCard> {
    return this.http.get<EnglishCard>(`${this.apiUrl}/${id}`);
  }

  updateCard(card: EnglishCard): Observable<EnglishCard> {
    return this.http.put<EnglishCard>(`${this.apiUrl}/${card.id}`, card);
  }

  deleteCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
