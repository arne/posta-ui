// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from './CommunityId';
import type { PersonId } from './PersonId';

export interface BanFromCommunity {
  community_id: CommunityId;
  person_id: PersonId;
  ban: boolean;
  remove_data?: boolean;
  reason?: string;
  expires?: number;
  auth: string;
}
