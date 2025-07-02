import { Component } from '@angular/core';
import { Menus } from '../../../menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuPipe } from '../../../pipes/menu-pipe';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-main-sidebar',
  imports: [RouterLink, RouterLinkActive, FormsModule, MenuPipe],
  standalone:true,
  templateUrl: './main-sidebar.html',
  styleUrl: './main-sidebar.css'
})
export class MainSidebar {
    search: string ="";
    menus = Menus;


    constructor(
      public auth: AuthService
    ){}
}