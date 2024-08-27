import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JellyForm } from '../../models/jelly-form';

@Component({
  selector: 'app-jelly-form-container',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './jelly-form-container.component.html',
  styleUrl: './jelly-form-container.component.sass'
})
export class JellyFormContainerComponent {
  form: FormGroup<JellyForm>;

  constructor() {
    this.form = new FormGroup<JellyForm>({
      numberOfTenticles: new FormControl<number | null>(null, { nonNullable: true }),
      isSalty: new FormControl<string | null>(null, { nonNullable: true }),
      breed: new FormControl<string | null>(null, { nonNullable: true })
    })
  }
}
