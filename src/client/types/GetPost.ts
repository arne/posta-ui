// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from './CommentId';
import type { PostId } from './PostId';

export interface GetPost {
  id?: PostId;
  comment_id?: CommentId;
  auth?: string;
}