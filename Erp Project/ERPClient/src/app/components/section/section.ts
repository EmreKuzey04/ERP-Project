import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  standalone: true,
  templateUrl: './section.html',
  styleUrl: './section.css'
})
export class Section {

  @Input() sectionTitle: string = "";
}
