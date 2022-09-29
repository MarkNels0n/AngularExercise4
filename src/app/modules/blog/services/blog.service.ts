import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [
  {
    id:123,
    title:'Ako muna',
    description:'me first',
    author: 'Ai Koo',
    comments: ['ikaw na']
  },
  {
    id:234,
    title:'Bahala ka',
    description:'up to you',
    author: 'Bat Man',
    comments: ['si batman na bahala']
  },
  {
    id:345,
    title:'Kayo na',
    description:'its you',
    author: 'Kaye Yu',
    comments: ['edi kayo na']
  },
  {
    id:456,
    title:'Dahil sayo',
    description:'because of you',
    author: 'Daniel Saiyu',
    comments: ['sayo na']
  },
  {
    id:567,
    title:'Ewan ko lang',
    description:'i dont know',
    author: 'Ean Koo',
    comments: ['di mo alam']
  }
  ]

  getBlogs() {
    return this.blogs
  }
  
  constructor() { }
}
