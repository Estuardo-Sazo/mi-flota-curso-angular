import { Component, signal, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header-nav',
  imports: [],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.css',
})
export class HeaderNav implements OnInit {
  private router = inject(Router);

  currentTitle = signal('Dashboard');

  private routeTitles: { [key: string]: string } = {
    '': 'Dashboard',
    dashboard: 'Dashboard',
    vehicles: 'Vehículos',
    transactions: 'Movimientos',
  };

  ngOnInit() {
    this.updateTitle(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateTitle(event.urlAfterRedirects);
      });
  }

  private updateTitle(url: string) {
    const route = url.split('/')[1] || '';

    const title = this.routeTitles[route] || 'Mi Flota';
    this.currentTitle.set(title);
  }
}
