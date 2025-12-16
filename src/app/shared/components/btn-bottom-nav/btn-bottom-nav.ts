import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-btn-bottom-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './btn-bottom-nav.html',
  styleUrl: './btn-bottom-nav.css',
})
export class BtnBottomNav {
  label = input.required<string>();
  route = input.required<string>();
  exactMatch = input<boolean>(false);
}
