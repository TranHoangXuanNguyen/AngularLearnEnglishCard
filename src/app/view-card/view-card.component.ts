import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishCardService } from '../english-card.service';
import { EnglishCard } from '../english-card';
import { CardItemComponent } from '../card-item/card-item.component';
@Component({
  standalone: true,
  providers: [EnglishCardService],
  selector: 'app-view-card',
  imports: [CardItemComponent,CommonModule],
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.css',
})
export class ViewCardComponent {
  englishCardList: EnglishCard[] = [];
  englishCardService: EnglishCardService = inject(EnglishCardService);
  constructor() {
    this.englishCardService.getData().subscribe((data) => {
      this.englishCardList = data;
    });
  }
}
