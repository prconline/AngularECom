import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  topics= ['Angualr'];
  myForm!: FormGroup;

  unty!: UntypedFormGroup;

  constructor(private fb : UntypedFormBuilder){

  }

  ngOnInit() {
    // Create a FormGroup with FormControls
    this.myForm = new FormGroup({
      name: new FormControl(this.de(), [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.unty=this.fb.group({
      namesqsq: new FormControl(this.de(), [Validators.required])
    });
  }

  // Handle form submission
  onSubmit() {
    
    if (this.myForm.valid) {
      console.log('Form Value:', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  de() : string{
    if(this.topics.length===1)
        return this.topics[0];
    else
      return "";
  }

}
