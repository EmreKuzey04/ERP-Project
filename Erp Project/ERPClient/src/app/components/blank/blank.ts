import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blank',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './blank.html',
  styleUrl: './blank.css'
})
export class Blank {

  @Input() pageName: string = "";
  @Input() routes: string[] = [];
}