import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Struct } from '../struct';
import { BCheckboxComponent } from '../b-checkbox/b-checkbox.component';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit, AfterViewInit {

  indeterminate: boolean = false;
  @Input() checked: boolean = false;

  @Input() item: Struct;
  @Output() changeEventEmitter: EventEmitter<{ "id": string, "checked": boolean }> = new EventEmitter()

  @ViewChild(BCheckboxComponent) bbox;
  @ViewChildren(NestedComponent) nested: QueryList<NestedComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }



  onCbChange(e) {
    this.checked = e.checked
    this.changeEventEmitter.next(e)
  }
  onChildChange(e) {
    this.nested.forEach((v) => console.log(v.item.name, v.checked, v.bbox.checked))
    let hasChildChecked = this.nested.some((value) => value.checked);
    let hasChildUnchecked = this.nested.some((value) => !value.checked);

    this.indeterminate = hasChildChecked && hasChildUnchecked;
    if (!this.indeterminate) {
      this.indeterminate = undefined;
      this.checked = hasChildChecked;
      this.changeEventEmitter.next(e)
    }

    console.log(this.indeterminate, this.checked, hasChildChecked, hasChildUnchecked,  this.bbox)
  }

}
