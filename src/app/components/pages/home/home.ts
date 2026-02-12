import { Component, input, output } from '@angular/core';
import { DecorationComponent } from '../../UI/decoration/decoration';
import { FrameComponent } from '../../UI/frame/frame';
import { PageSection } from '../../../models/variable-models.model';

@Component({
  selector: 'app-home',
  imports: [FrameComponent, DecorationComponent],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  public pagesSections = input<PageSection[]>([]);
  public sectionClicked = output<string>();


  handleSectionClick(section: PageSection) {
    if (section.id === 'resume') {
      this.downloadCV();
      return;
    } else {
      this.sectionClicked.emit(section.id);
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/assets/cv/Daniel_Dvir_CV.pdf';
    link.download = 'Daniel_Dvir_CV.pdf';
    link.click();
  }

}
