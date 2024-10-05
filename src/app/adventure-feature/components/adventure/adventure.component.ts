import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdventureForm } from '../../../core/models/adventurer-form';
import { debounceTime, switchMap } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { RideResponse } from '../../../core/models/rider';
import { CortPipe } from '../../../core/pipes/cort.pipe';

@Component({
  selector: 'app-adventure',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CortPipe],
  templateUrl: './adventure.component.html',
  styleUrl: './adventure.component.sass'
})
export class AdventureComponent {

  form: FormGroup<AdventureForm>;
  riders: RideResponse = {
    riders: []
  };

  twoWayBinding: string = '';

  constructor(private service: ApiService) {
    this.form = new FormGroup<AdventureForm>({
      explorerName: new FormControl<string | null>(null, {nonNullable: true}),
      maxDistance: new FormControl<number | null>(null, {nonNullable: true}),
      maxWeight: new FormControl<number | null>(null, {nonNullable: true}),
      destination: new FormControl<string | null>(null, {nonNullable: true})
    })

    this.form.get('explorerName')?.valueChanges.pipe(
      debounceTime(3000),
      switchMap((value) => {
        console.log(value);
        return this.service.getRiders()
      })
    ).subscribe((payload) => {
      this.riders = payload
    })    

  }

  showChange(change: string) {
      console.log('change: ', change);
  }


}
