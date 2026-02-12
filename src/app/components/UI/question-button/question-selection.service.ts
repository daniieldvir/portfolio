import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuestionSelectionService {
  public selectedTitle = signal<string | null>(null);

  select(title: string) {
    this.selectedTitle.set(title);
  }
}
