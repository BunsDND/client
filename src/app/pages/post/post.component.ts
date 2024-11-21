import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PostService } from './post.service';
import { Post_i } from './post.interface';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog/post-dialog.component';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule,MatButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  constructor(private postService: PostService, 
    private matDialog: MatDialog){}

  posts : Post_i[] =  [];
  

  ngOnInit(){
    this.postService.getAll().subscribe((data) => { this.posts = data; }) ;
  }

onFormAction(){
  //console.log('onFormAction');
  this.matDialog.open(PostDialogComponent);
}

}
