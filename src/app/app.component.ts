import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  items = [{ value: 1, label: 'Option 1'}, { value: 2, label: 'Option 2'}, { value: 3, label: 'Option 3' }];
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first: [],
      second: []
    })
  }
}
