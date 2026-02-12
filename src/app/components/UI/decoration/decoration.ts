import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-decoration',
  imports: [],
  templateUrl: './decoration.html',
  styleUrl: './decoration.scss',
})
export class DecorationComponent {
public amount = input<number>(3);
stars = computed(() => Array(this.amount()).fill('✧'));
}
