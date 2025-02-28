import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormAddComponent } from './formAdd/form-add.component';
import { ViewCardComponent } from './view-card/view-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormAddComponent, ViewCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyAngularApp';
}
