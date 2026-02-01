import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { Header } from './components/frame-components/header/header';
import { ProjectsActions } from './state/projects/projects.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  private readonly store = inject(Store);

  ngOnInit() {
    this.store.dispatch(new ProjectsActions.GetProjects());
  }
}
