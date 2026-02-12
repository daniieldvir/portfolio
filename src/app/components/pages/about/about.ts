import { Component, output, signal } from '@angular/core';
import { FrameComponent } from '../../UI/frame/frame';
import { NgIconComponent } from '@ng-icons/core';
import { CONTACT, HIGHLIGHTS } from '../../../constants/data.constants';
import { Highlight } from '../../../models/variable-models.model';


@Component({
  selector: 'app-about',
  imports: [FrameComponent, NgIconComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  goBackClick = output<void>();

  public readonly highlight = signal<Highlight[]>(HIGHLIGHTS);
  public contact = signal(CONTACT);


  public goBack(): void {
    this.goBackClick.emit();
  }
}