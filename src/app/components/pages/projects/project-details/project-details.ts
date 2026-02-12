import { Component, input } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { Project } from '../../../../models/project.model';
import { ProjectTagComponent } from '../../../UI/project-tag/project-tag';

@Component({
  selector: 'app-project-details',
  imports: [ NgIconsModule, ProjectTagComponent],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  readonly project = input<Project | null>(null);

}
