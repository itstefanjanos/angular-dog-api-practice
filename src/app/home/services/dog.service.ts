import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DogApiResponse } from '../models/dog-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  dogUrl$ = new BehaviorSubject<string | null>(null);

  constructor(private httpClient: HttpClient) { }

  async refreshDog(): Promise<void> {
    const dog$ = this.httpClient.get<DogApiResponse>(environment.dogApi);
    const dog = await firstValueFrom(dog$);
    this.dogUrl$.next(dog.message);
  }

  getDog(): Observable<string | null> {
    return this.dogUrl$.asObservable();
  }
}
