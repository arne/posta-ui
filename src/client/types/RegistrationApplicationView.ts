// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { LocalUser } from './LocalUser';
import type { Person } from './Person';
import type { RegistrationApplication } from './RegistrationApplication';

export interface RegistrationApplicationView {
  registration_application: RegistrationApplication;
  creator_local_user: LocalUser;
  creator: Person;
  admin?: Person;
}