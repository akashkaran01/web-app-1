import { Component, Input } from '@angular/core';
import { HeaderAndInfo } from '../../models/headerAndnfo';

@Component({
  selector: 'app-right-image-left-text',
  templateUrl: './right-image-left-text.component.html',
  styleUrls: ['./right-image-left-text.component.scss']
})
export class RightImageLeftTextComponent {
  @Input() bgImageClassName = '';
  @Input() headerAndInfo!: HeaderAndInfo;
}
