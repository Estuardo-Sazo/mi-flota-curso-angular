import { Component } from '@angular/core';
import { HeaderNav } from '../../components/header-nav/header-nav';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  imports: [HeaderNav, BottomNav, RouterOutlet],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {}
