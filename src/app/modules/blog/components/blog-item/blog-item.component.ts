import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export default class BlogItemComponent implements OnInit {
  //parent to child
  @Input() blog:Blog | undefined

  //child to parent
  @Output() blogEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  sendBlog() {
    this.blogEmitter.emit(this.blog)
  }

  editBlog() {

  }

  deleteBlog() {}

}
