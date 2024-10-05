import { Injectable } from '@angular/core';
import { JellyForm } from '../../core/models/jelly-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JellyFormService {

  constructor() { }

  initializeForm() {
    return new FormGroup<JellyForm>({
      numberOfTenticles: new FormControl<number | null>(null, { nonNullable: true }),
      isSalty: new FormControl<string | null>(null, { nonNullable: true }),
      breed: new FormControl<string | null>(null, { nonNullable: true })
    })
  }

  numberOfTenticlesListener(control: FormControl<number | null>, form: FormGroup<JellyForm>) {
    control?.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      form.get('numberOfTenticles')?.removeValidators(Validators.required);
      form.get('numberOfTenticles')?.updateValueAndValidity();
    })
  }

  isSaltyListener(control: FormControl<string | null>, form: FormGroup<JellyForm>) {
    control?.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      form.get('isSalty')?.removeValidators(Validators.required);
      form.get('isSalty')?.updateValueAndValidity();
    })
  }

  breedListener(control: FormControl<string | null>, form: FormGroup<JellyForm>) {
    control?.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      form.get('breed')?.removeValidators(Validators.required);
      form.get('breed')?.updateValueAndValidity();
    })
  }


  removeValidators(form: FormGroup<JellyForm>) {
    form.get('numberOfTenticles')?.removeValidators(Validators.required)
    form.get('numberOfTenticles')?.updateValueAndValidity();
    form.get('isSalty')?.removeValidators(Validators.required)
    form.get('isSalty')?.updateValueAndValidity()
    form.get('breed')?.removeValidators(Validators.required)
    form.get('breed')?.updateValueAndValidity()
  }

  setNumberOfTenticlesFormErrors(form: FormGroup<JellyForm>): void {
    form.get('numberOfTenticles')?.setValidators(Validators.required)
    form.get('numberOfTenticles')?.updateValueAndValidity();
    form.get('isSalty')?.setValidators(Validators.required)
    form.get('isSalty')?.updateValueAndValidity()
    form.get('breed')?.setValidators(Validators.required)
    form.get('breed')?.updateValueAndValidity()
  }

}
