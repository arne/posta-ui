// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ModBan } from './ModBan';
import type { Person } from './Person';

export interface ModBanView {
  mod_ban: ModBan;
  moderator?: Person;
  banned_person: Person;
}
