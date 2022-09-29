import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit{

  blogForm: FormGroup
  commentz: FormArray

  constructor(fb:FormBuilder) {
    this.blogForm = fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments:fb.array([])
    })
    this.commentz = this.blogForm.get('comments') as FormArray
  }
  ngOnInit(): void {
    this.blogForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

  submit() {
    console.log(this.blogForm.getRawValue)
  }

  addComment() {
    this.commentz.push(new FormControl())
  }

  deleteComment(i:number) {
    this.commentz.removeAt(i)
  }

  reset() {
    this.blogForm.reset()
  }

}
