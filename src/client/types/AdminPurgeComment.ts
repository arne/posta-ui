// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PersonId } from './PersonId';
import type { PostId } from './PostId';

export interface AdminPurgeComment {
  id: number;
  admin_person_id: PersonId;
  post_id: PostId;
  reason?: string;
  when_: string;
}
