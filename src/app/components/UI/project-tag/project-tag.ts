import { Component, input } from '@angular/core';


@Component({
  selector: 'app-project-tag',
  imports: [],
  templateUrl: './project-tag.html',
  styleUrl: './project-tag.scss',
})
export class ProjectTagComponent {
  label = input.required<string>();
}