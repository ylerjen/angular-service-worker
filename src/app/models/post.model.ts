import { User } from './user.model';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    user: User;
}
