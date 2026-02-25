import { Component, output, signal } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { DecorationComponent } from '../../UI/decoration/decoration';
import { FrameComponent } from '../../UI/frame/frame';
import { QuestionButton } from '../../UI/question-button/question-button';
import { QUESTIONS } from '../../../constants/data.constants';
import { Question } from '../../../models/variable-models.model';


@Component({
  selector: 'app-more-info',
  imports: [FrameComponent, NgIconComponent, QuestionButton, DecorationComponent],
  templateUrl: './more-info.html',
  styleUrl: './more-info.scss',
})
export class MoreInfoComponent {
  goBackClick = output<void>();

  public questions = signal<Question[]>(QUESTIONS);
  public selectedAnswer = signal<string>('');
  public displayedText = signal<string>('');
  public date = new Date().getFullYear();

  public selectQuestion(answer: string): void {
    this.selectedAnswer.set(answer);
    this.typeText(answer);
  }

  private typeText(text: string): void {
    this.displayedText.set('');
    let i = 0;
    const interval = setInterval(() => {
      this.displayedText.update(val => val + text.charAt(i));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 30);
  }

  public goBack(): void {
    this.goBackClick.emit();
  }
}
