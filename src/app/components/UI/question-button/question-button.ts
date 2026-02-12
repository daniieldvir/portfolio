import { Component, inject, input, output, signal } from '@angular/core';
import { QuestionSelectionService } from './question-selection.service';

@Component({
  selector: 'app-question-button',
  imports: [],
  templateUrl: './question-button.html',
  styleUrl: './question-button.scss',
})
export class QuestionButton {
  public title = input<string>('');
  public selectQuestionClick = output<string>();

  private readonly selection = inject(QuestionSelectionService);


  public selectQuestion(title: string): void {
    this.selection.select(title);
    this.selectQuestionClick.emit(title);
  }

  public get isSelected() {
    return this.selection.selectedTitle() === this.title();

  }
}
