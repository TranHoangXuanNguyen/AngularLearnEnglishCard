import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EnglishCard } from '../english-card';
import { EnglishCardService } from '../english-card.service';



@Component({
  standalone: true,
  selector: 'app-form-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css',
})
export class FormAddComponent {
  private card!: EnglishCard;
  form: FormGroup;
  types = ['Noun', 'Verb', 'Adj', 'Adverb', 'Phrase'];
  categories = ['It English', 'TOEIC', 'English Speaking'];
  englishCardService: EnglishCardService = inject(EnglishCardService);
  

  constructor(private fb: FormBuilder) {
 
    // Define form fields with validation rules
    this.form = this.fb.group({
      word: ['', Validators.required],
      meaning: ['', Validators.required],
      example: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
    });
  }
  // constructor() {
  //   this.form = new FormGroup({
  //     word: new FormControl('', [Validators.required]),
  //     meaning: new FormControl('', [Validators.required]),
  //     example: new FormControl('', Validators.required),
  //     image: new FormControl('', Validators.required),
  //     type: new FormControl('', Validators.required),
  //     category: new FormControl('', Validators.required),
  //   });
  // }

  onSubmit() {
    if (this.form.valid) {
      this.card = {...this.form.value};
      console.log('Form Submitted:', this.form.value);
      this.englishCardService.addCard(this.card).subscribe(() => {
        this.form.reset();
      });
    }
  }

  onReset() {
    this.form.reset();
  }
}
