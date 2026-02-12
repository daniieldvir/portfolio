import { Component, computed, input } from '@angular/core';
import { DecorationComponent } from '../decoration/decoration';

@Component({
  selector: 'app-frame',
  imports: [DecorationComponent],
  templateUrl: './frame.html',
  styleUrl: './frame.scss',
})
export class FrameComponent {
  public decorationAmount = input<number>(1);
  public topDecoration = input<boolean>(false);
  public bottomDecoration = input<boolean>(false);
}
