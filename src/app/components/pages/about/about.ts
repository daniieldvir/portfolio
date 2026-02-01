import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';



interface Highlight {
  icon: string;
  title: string;
  description: string;
  stats?: string;
}

interface Volunteer {
  role: string;
  organization: string;
  description: string;
  period: string;
}



@Component({
  selector: 'app-about',
  imports: [Card],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  public readonly highlight = signal<Highlight[]>([
    {
      icon: '🐶',
      title: 'Dog Lover',
      description: 'Dogs make everything better. I’m a big dog person and love being around them whenever I can. I have a dog named Camel, he is a 12 year old mixed breed dog.',
    },
    {
      icon: '🧁',
      title: 'Pastry Chef',
      description: 'Im a trained pastry chef with a strong eye for detail, patience, and precision — skills I also bring into my frontend work.',
    },
    {
      icon: '🎬',
      title: 'Adventure Movies',
      description: 'I enjoy adventure and fantasy movies — stories that spark imagination and creativity. like the lord of the rings, the hobbit and the harry potter series.',
    },
    {
      icon: '🧱',
      title: 'LEGO & Building',
      description: 'I love building things, whether it’s UI components, LEGO sets, or anything that starts with pieces and becomes something bigger.',
    },
  ]);

  public readonly volunteering = signal<Volunteer[]>([
    {
      role: 'Frontend Mentor',
      organization: 'Tech CommunityIL',
      description: 'Mentoring junior developers and helping them land their first job in the industry. Conducting mock interviews and code reviews.',
      period: '2023 - Present'
    },
    {
      role: 'Open Source Contributor',
      organization: 'Angular Community',
      description: 'Contributing to documentation and bug fixes for various Angular ecosystem libraries.',
      period: '2022 - 2023'
    }
  ]);


  public readonly stats = signal([
    { label: 'Experience', value: '4+', unit: 'years', icon: '📅' },
    { label: 'Projects', value: '50+', unit: 'completed', icon: '✅' },
    { label: 'Code', value: '100K+', unit: 'lines', icon: '💻' },
    { label: 'Coffee', value: '∞', unit: 'cups', icon: '☕' }
  ]);

}