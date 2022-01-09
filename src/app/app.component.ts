import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { HttpService } from './http.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public post: Post;

    constructor(public httpService: HttpService) { }

    doSearch(id: number): void {
        this.httpService.fetchPost(id).subscribe((post) => {
            this.post = post;
        });
    }
}
