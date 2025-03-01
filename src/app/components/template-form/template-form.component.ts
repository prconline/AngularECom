import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  topics= ['Angualr', 'Java', 'Spring', 'Maven'];

  checklength1Flag= true;

  isOptionDisabled = true;

  isSelectDisabled =true;

  isValid=false;

  checklength1(){
    if(this.topics.length!==1)
      this.checklength1Flag=false;
    
  }

}
