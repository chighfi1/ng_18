import { FormControl } from "@angular/forms";

export interface AdventureForm {
    explorerName: FormControl<string | null>;
    destination: FormControl<string | null>;
    maxWeight: FormControl<number | null>;
    maxDistance: FormControl<number | null>;
}