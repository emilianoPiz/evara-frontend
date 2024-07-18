// search-bar.component.ts
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() ParentComponent: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: any) {
    this.searchEvent.emit(event.target.value);
  }
}
