import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[tmFavorite]'
})
export class TaskFavoriteDirective {

  constructor() { }

  @HostBinding('class.is-favorite') isFavorite = true;

  @Input() set tmFavorite(value: boolean) {
    this.isFavorite = value;
  }
}