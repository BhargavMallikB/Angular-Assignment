import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-from.component.html',
  styleUrl: './reactive-from.component.css'
})
export class ReactiveFromComponent {

  private fb = inject(FormBuilder);

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    age: [],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: []
    }),
    aliases: this.fb.array([this.fb.control('')])
  })

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases(){
    this.aliases.push(this.fb.control(''));
  }

  

  onSubmit(){
    console.log('Value: ', this.profileForm.value);
  }
}

