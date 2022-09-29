import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup
  authorz: FormArray

  constructor(fb:FormBuilder) {
    this.bookForm = fb.group({
      name: [''],
      isbn: [''],
      authors:fb.array([])
    })
    this.authorz = this.bookForm.get('authors') as FormArray

  }

  ngOnInit(): void {
    this.bookForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

  submit() {
    console.log(this.bookForm.getRawValue)
  }

  addComment() {
    this.authorz .push(new FormControl())
  }

  deleteComment(i:number) {
    this.authorz.removeAt(i)
  }

  reset() {
    this.bookForm.reset()
  }

}
