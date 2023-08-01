import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  public yesNoAnswer: string = 'no';
  public form: FormGroup = null;
  public test: string = null

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      yesNoAnswer: ['no']
    })
  }

  public submit() {
    console.log(this.form.value)
  }
}
