// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PostId } from './PostId';

export interface RemovePost {
  post_id: PostId;
  removed: boolean;
  reason?: string;
  auth: string;
}
