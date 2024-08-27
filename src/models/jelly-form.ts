import { FormControl } from "@angular/forms";

export interface JellyForm {
    numberOfTenticles: FormControl<number | null>;
    breed: FormControl<string | null>;
    isSalty: FormControl<string | null>
};