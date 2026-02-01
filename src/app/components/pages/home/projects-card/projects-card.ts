import { Component, signal } from '@angular/core';
import { ButtonArrow } from '../../../shared/button-arrow/button-arrow';
import { Card } from '../../../shared/card/card';

export interface MiniProject {
  name: string;
  description: string;
  image: string;
  tags: { label: string; full: string; link: string }[];
}


@Component({
  selector: 'app-projects-card',
  imports: [Card, ButtonArrow],
  templateUrl: './projects-card.html',
  styleUrl: './projects-card.scss',
})
export class ProjectsCard {

  public readonly projects = signal<MiniProject[]>([
    {
      name: 'DevForm',
      description: 'A form builder for creating custom forms.',
      image: 'https://res.cloudinary.com/disku3v4j/image/upload/v1769953732/daniiel/1766503849575_aaqulk.jpg',
      tags: [
        { label: 'Code', full: 'Source Code', link: 'https://github.com/daniieldvir/devblog' },
        { label: 'Website', full: 'Website', link: 'https://daniieldvir.github.io/devblog/' },
      ],
    },
    {
      name: 'TaskFlow - Desktop only',
      description: 'A task management app for organizing your tasks.',
      image: 'https://res.cloudinary.com/disku3v4j/image/upload/v1769953732/daniiel/1769431335079_wqvdtm.jpg',
      tags: [
        { label: 'Front', full: 'Frontend Source Code', link: 'https://github.com/daniieldvir/task-flow' },
        { label: 'Back', full: 'Backend Source Code', link: 'https://github.com/daniieldvir/task-flow-backend' },
        { label: 'Website', full: 'Website', link: 'https://daniieldvir.github.io/task-flow/' },
      ],
    },
  ]);

}
