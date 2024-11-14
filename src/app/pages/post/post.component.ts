import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PostService } from './post.service';
import { Post_i } from './post.interface';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule,MatButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  constructor(private postService: PostService){

  }

  posts : Post_i[] =  [
  ];
  

  ngOnInit(){ //built-in method in angular, aka life 
    //  console.log("Testing OnInit")

    this.postService.getAll().subscribe((data) => {

      this.posts = data;
      

    }) ;

  }

}
