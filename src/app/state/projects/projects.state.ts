import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../service/projects.service';
import { ProjectsActions } from './projects.action';

export interface ProjectsStateModel {
  projects: Project[];
}

@Injectable()
@State<ProjectsStateModel>({
  name: 'projects',
  defaults: {
    projects: [],
  },
})
export class ProjectsState {
  private readonly projectService = inject(ProjectsService);

  @Action(ProjectsActions.GetProjects)
  getProjects(ctx: StateContext<ProjectsStateModel>) {
    return this.projectService.getProjects().pipe(
      tap((projects) => {
        ctx.patchState({ projects });
      })
    );
  }
}
