import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent implements OnInit {
  @Input() label = '';
  @Input() control!: FormControl;
  @Input() placeholder = '';

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { errors, dirty, touched } = this.control;
    return errors && dirty && touched;
  }
}
