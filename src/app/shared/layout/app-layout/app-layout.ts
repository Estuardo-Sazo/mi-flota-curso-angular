import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "../../components/app-header/app-header";
import { BottomNav } from "../../components/bottom-nav/bottom-nav";

@Component({
  selector: 'app-app-layout',
  imports: [AppHeader, RouterOutlet, BottomNav],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css'
})
export class AppLayout {

}
