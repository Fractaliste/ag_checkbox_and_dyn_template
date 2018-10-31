import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-b-checkbox',
  templateUrl: './b-checkbox.component.html',
  styleUrls: ['./b-checkbox.component.scss']
})
export class BCheckboxComponent implements OnInit {

  @Input() label: string;
  @Input() indeterminate: boolean;
  @Input() checked: boolean;
  @Output() changeEventEmitter: EventEmitter<{ "id": string, "checked": boolean }> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onChange(target: HTMLInputElement) {
    let value = { "id": this.label, "checked": target.checked }
    this.changeEventEmitter.next(value)
  }
}
