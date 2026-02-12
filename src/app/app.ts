import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { AboutComponent } from './components/pages/about/about';
import { HomeComponent } from './components/pages/home/home';
import { MoreInfoComponent } from './components/pages/more-info/more-info';
import { ProjectsComponent } from './components/pages/projects/projects';
import { ProjectsActions } from './state/projects/projects.action';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, ProjectsComponent, AboutComponent, MoreInfoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly store = inject(Store);

  public pagesSections = [
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Resume', id: 'resume' },
    { label: 'More Info', id: 'more-info' },
  ];


  ngOnInit() {
    this.store.dispatch(new ProjectsActions.GetProjects());
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

}
