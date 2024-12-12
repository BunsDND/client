import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButton, MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule],
  templateUrl: './post-delete.component.html',
  styleUrl: './post-delete.component.css'
})
export class PostDeleteComponent {
  
  postForm: FormGroup;

  constructor ( private fb: FormBuilder, 
                private ps: PostService,
               @Inject(MAT_DIALOG_DATA) public data:any
  ){
    
    this.postForm = this.fb.group({
      title:[this.data.title, Validators.required], 
      content: [this.data.content, Validators.required]
    });
  }

onSubmit(){
  this.ps.delete(this.data.id).subscribe((data) => {
    console.log('Post deleted successfully');
    location.reload();
  })
}
}
