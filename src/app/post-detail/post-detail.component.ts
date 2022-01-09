import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent {
    @Input()
    public post: Post;
}
