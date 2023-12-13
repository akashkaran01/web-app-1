import { Component, Input } from '@angular/core';
import { HeaderAndInfo } from '../../models/headerAndnfo';

@Component({
  selector: 'app-left-image-right-text',
  templateUrl: './left-image-right-text.component.html',
  styleUrls: ['./left-image-right-text.component.scss']
})
export class LeftImageRightTextComponent {
  @Input() bgImageClassName = '';
  @Input() headerAndInfo!: HeaderAndInfo;
}
