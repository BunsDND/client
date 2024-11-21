import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButton, MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule],
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.css'
})
export class PostDialogComponent {
  postForm: FormGroup;

  constructor (private fb: FormBuilder, 
    private ps: PostService,
  ){
    this.postForm = this.fb.group({
      title:['', Validators.required], 
      content: ['', Validators.required]
    });
  }

onSubmit(){
  console.log(this.postForm.value,'form value');
  this.ps.create(this.postForm.value).subscribe((data) => {
    console.log('from server');
    location.reload();
  })
}


}
