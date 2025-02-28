import { EnglishCardService } from './../english-card.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { EnglishCard } from '../english-card';

@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  router: Router = inject(Router);
  englishCard!: EnglishCard;
  englishCardService: EnglishCardService = inject(EnglishCardService);
  constructor(private route: ActivatedRoute) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.englishCardService.getById(id).subscribe((data) => {
      this.englishCard = data;
    });
  }
  deleteCard(id: number) {
    if (confirm('Are you sure you want to delete this card?')) {
      this.englishCardService.deleteCard(id).subscribe(() => {
        this.router.navigate(['/view-card']);
      });
    }
  }
}
