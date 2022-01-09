import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Post } from './models/post.model';
import { User } from './models/user.model';

const apiUrl = 'https://jsonplaceholder.typicode.com';

/**
 * Service related to the i18n translations
 */
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  fetchPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${apiUrl}/posts/${id}`).pipe(
      switchMap((post: Post) => {
        return this.fetchUser(post.userId).pipe(
          map((user) => {
            post.user = user;
            return post;
          })
        );
      })
    );
  }

  fetchUser(id: number): Observable<User> {
    return this.http.get<User>(`${apiUrl}/users/${id}`);
  }
}
