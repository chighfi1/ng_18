import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JellyForm } from '../../../core/models/jelly-form';
import { JellyFormService } from '../../services/jelly-form.service';

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

  constructor(private formService: JellyFormService) {
    this.form = this.formService.initializeForm();
    this.formService.breedListener(this.form.controls.breed, this.form)
    this.formService.isSaltyListener(this.form.controls.isSalty, this.form)
    this.formService.numberOfTenticlesListener(this.form.controls.numberOfTenticles, this.form)
  }

  submit(): void {
    this.formService.setNumberOfTenticlesFormErrors(this.form);
    if(this.form.valid) {
      console.log('submitted')
    }
  }

}


