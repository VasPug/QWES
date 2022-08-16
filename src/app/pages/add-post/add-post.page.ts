import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Modal/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  post: Post = {
    title: '',
    content: '',
    createdAt: new Date().getTime()
  };

  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private toastCtrl: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  addPost() {
    this.postService.addPost(this.post).then(() => {
      this.router.navigateByUrl('/tabs');
    }, err => {
    });
  }
  close(){
    this.router.navigateByUrl('/tabs');
  }

}
