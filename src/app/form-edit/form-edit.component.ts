import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EnglishCard } from '../english-card';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { EnglishCardService } from '../english-card.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-form-edit',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css',
})
export class FormEditComponent {
  router: Router = inject(Router);
  englishCardService: EnglishCardService = inject(EnglishCardService);
  form!: FormGroup;
  types = ['Noun', 'Verb', 'Adj', 'Adverb', 'Phrase'];
  categories = ['It English', 'TOEIC', 'English Speaking'];
  cardId!: number; // Lưu ID của card cần chỉnh sửa

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    // Khởi tạo form với các trường trống
    this.form = this.fb.group({
      word: ['', Validators.required],
      meaning: ['', Validators.required],
      example: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
    });

    // Lấy ID từ URL và tải dữ liệu thẻ
    const idParam = this.route.snapshot.paramMap.get('id');
    this.cardId = idParam ? parseInt(idParam, 10) : NaN;

    if (!isNaN(this.cardId)) {
      this.englishCardService.getById(this.cardId).subscribe({
        next: (data) => {
          this.form.patchValue(data); // Cập nhật dữ liệu vào form
        },
        error: (err) => {
          console.error('Error fetching card:', err);
          alert('Failed to load card details.');
        },
      });
    } else {
      console.error('Invalid ID in route');
      alert('Invalid card ID.');
      this.router.navigate(['/view-card']);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const updatedCard: EnglishCard = { id: this.cardId, ...this.form.value }; // Giữ lại ID
      console.log('Form Submitted:', updatedCard);

      this.englishCardService.updateCard(updatedCard).subscribe({
        next: () => {
          alert('Card updated successfully!');
          this.router.navigate(['/view-card']);
        },
        error: (err) => {
          console.error('Update failed:', err);
          alert('Failed to update card.');
        },
      });
    }
  }

  onReset() {
    this.form.reset();
  }
}
