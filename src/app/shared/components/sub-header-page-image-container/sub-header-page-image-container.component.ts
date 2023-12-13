import { Component, Input } from '@angular/core';
import { HeaderAndInfo } from '../../models/headerAndnfo';

@Component({
  selector: 'app-sub-header-page-image-container',
  templateUrl: './sub-header-page-image-container.component.html',
  styleUrls: ['./sub-header-page-image-container.component.scss']
})
export class SubHeaderPageImageContainerComponent {
  @Input() bgImageClassName = '';
  @Input() headerAndInfo!: HeaderAndInfo;
}
