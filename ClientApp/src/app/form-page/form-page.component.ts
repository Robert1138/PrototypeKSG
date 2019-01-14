import { Component, OnInit } from '@angular/core';
import * as  jspdf from 'jspdf';
import { stringify } from '@angular/core/src/util';
import { text } from '@angular/core/src/render3';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  
  test: string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });



  }


showOutput(): void {
console.log(this.firstFormGroup.get('firstCtrl').value);
console.log(this.secondFormGroup.get('secondCtrl').value);
}





createPDF(): void {
console.log("got here ");
let name: string;
let address: string;  
name = this.firstFormGroup.get('firstCtrl').value
address = this.secondFormGroup.get('secondCtrl').value

var doc = new jspdf();

  let baseText: string;

  baseText = 'I, Awesome Mom, make this Declaration to appoint the guardian for my children, listed as \n' + 
  'follows, in the event of my death or incapacity:\n' ;

 // console.log(doc.getFontList);
doc.setFontStyle("bold");
doc.setFontSize(18);
doc.setFont("arial");  
doc.text('       Declaration of Appointment of Guardian for My', 20, 20);
doc.text('    My Children in the Event of My Death or Incapacity', 20, 30);
doc.setFontSize(12);
doc.setFont("times new roman");  

doc.text(baseText, 20, 40);
doc.text(name + "\n" + address, 20, 50);


doc.save('a4.pdf');

}




}
