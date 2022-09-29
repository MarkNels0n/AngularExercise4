import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {

  blogsReceived: Blog[] = [];

  constructor(private bservice: BlogService) { }

  getBlogsFromService() {
    this.blogsReceived = this.bservice.getBlogs();
  }

  ngOnInit(): void {
  }

  blogAction(blogsReceived:Blog) {
    console.log(blogsReceived);
  }

}
