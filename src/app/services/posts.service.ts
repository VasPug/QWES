import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../Modal/Post';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Observable<Post[]>;
  private postCollection: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) {
    this.postCollection = this.afs.collection<Post>('posts');
    this.posts = this.postCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }

  getPosts(): Observable<Post[]> {
    return this.posts;
  }

  getPost(id: string): Observable<Post> {
    return this.postCollection.doc<Post>(id).valueChanges().pipe(
        take(1),
        map(post => {
          post.id = id;
          return post;
        })
    );
  }

  addPost(post: Post): Promise<DocumentReference> {
    return this.postCollection.add(post);
  }

  updatePost(post: Post): Promise<void> {
    return this.postCollection.doc(post.id).update({ title: post.title, content: post.content });
  }

  deletePost(id: string): Promise<void> {
    return this.postCollection.doc(id).delete();
  }
}
