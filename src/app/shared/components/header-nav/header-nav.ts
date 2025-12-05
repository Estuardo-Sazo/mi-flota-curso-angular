import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header-nav',
  imports: [],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.css',
})
export class HeaderNav implements OnInit {
  private router = inject(Router);

  currentTitle = signal('Dashboard');

  private routerTitles: { [key: string]: string } = {
    '': 'Dashboard',
    dashboard: 'Dashboard',
    vehicles: 'Vehículos',
    records: 'Transacciones',
  };

  ngOnInit() {
    this.updateTitle(this.router.url);

    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.updateTitle(e.urlAfterRedirects);
    });
  }

  private updateTitle(url: string) {
    const route = url.split('/')[1];

    const title = this.routerTitles[route] || 'Flota';
    this.currentTitle.set(title);
  }
}
