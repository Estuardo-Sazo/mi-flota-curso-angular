import { Component } from '@angular/core';
import { AppHeader } from "../../components/app-header/app-header";
import { BottomNav } from "../../components/bottom-nav/bottom-nav";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-app-layout',
  imports: [AppHeader, BottomNav, RouterOutlet],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css'
})
export class AppLayout {

}
