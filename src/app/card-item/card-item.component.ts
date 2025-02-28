import { Component,Input } from '@angular/core';
import { EnglishCard } from '../english-card';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-card-item',
  imports: [RouterLink],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input() card!: EnglishCard;
}
