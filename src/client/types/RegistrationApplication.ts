// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { LocalUserId } from './LocalUserId';
import type { PersonId } from './PersonId';

export interface RegistrationApplication {
  id: number;
  local_user_id: LocalUserId;
  answer: string;
  admin_id?: PersonId;
  deny_reason?: string;
  published: string;
}
