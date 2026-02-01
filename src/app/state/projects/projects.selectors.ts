import { createPropertySelectors } from '@ngxs/store';
import { ProjectsState, ProjectsStateModel } from './projects.state';

export class ProjectsSelectors {
  static slices = createPropertySelectors<ProjectsStateModel>(ProjectsState);
}
