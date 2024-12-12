import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-update',
  standalone: true,
  imports: [[MatDialogModule, 
            MatButton, 
            MatFormFieldModule, 
            MatInputModule, 
            MatSelectModule,
            ReactiveFormsModule],],

  templateUrl: './post-update.component.html',
  styleUrl: './post-update.component.css'
})
export class PostUpdateComponent {
  
  postForm: FormGroup;

  constructor (private fb: FormBuilder, 
               private ps: PostService,
               @Inject(MAT_DIALOG_DATA) public data:any
  )
  {
    this.postForm = this.fb.group({
      title:[this.data.title, Validators.required], 
      content: [this.data.content, Validators.required]
    });
  }

onSubmit(){
  console.log(this.postForm.value,'form value');
  this.ps.update(this.data.id, this.postForm.value).subscribe((data) => {
    console.log('from server');
    location.reload();
  })
}



}
