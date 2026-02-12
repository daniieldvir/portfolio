import { Component, output } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { select } from '@ngxs/store';
import { ProjectsSelectors } from '../../../state/projects/projects.selectors';
import { FrameComponent } from '../../UI/frame/frame';
import { ProjectDetails } from './project-details/project-details';

@Component({
  selector: 'app-projects',
  imports: [FrameComponent, ProjectDetails, NgIconComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  goBackClick = output<void>();
  protected readonly projects = select(ProjectsSelectors.slices.projects);

  protected goBack(): void {
    this.goBackClick.emit();
  }
}
