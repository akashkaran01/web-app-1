import { Component, Input } from '@angular/core';
import { HeaderAndInfo } from '../../models/headerAndnfo';

@Component({
  selector: 'app-header-and-text',
  templateUrl: './header-and-text.component.html',
  styleUrls: ['./header-and-text.component.scss']
})
export class HeaderAndTextComponent {
  @Input() headerAndInfo!: HeaderAndInfo;
}
