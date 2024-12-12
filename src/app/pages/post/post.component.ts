import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PostService } from './post.service';
import { Post_i } from './post.interface';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { PostDeleteComponent } from './post-delete/post-delete.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule,MatButtonModule, MatIconModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(private postService: PostService, 
    private matDialog: MatDialog){}

  posts : Post_i[] =  [];

  ngOnInit(): void {
    this.postService.getAll().subscribe((data) => { this.posts = data; }) ;
  }

  onFormAction(){
    this.matDialog.open(PostDialogComponent);
  }

  onUpdate(post: Post_i){
    this.matDialog.open(PostUpdateComponent, {
      data: post
    });
  }
  onDelete(post: Post_i){
    const dialogRef = this.matDialog.open(PostDeleteComponent, {
      data: post
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}