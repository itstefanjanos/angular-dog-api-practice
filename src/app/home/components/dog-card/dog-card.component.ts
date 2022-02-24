import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {
  dogUrl$?: Observable<string | null>;

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogUrl$ = this.dogService.getDog();
  }

  refreshDog(): void {
    this.dogService.refreshDog();
  }
}
