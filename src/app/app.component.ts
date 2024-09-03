import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JellyFormContainerComponent } from "./jelly-feature/components/jelly-form-container/jelly-form-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JellyFormContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ng_18_app';
}
