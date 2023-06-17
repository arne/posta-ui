export type FormColorType =
  | 'blue'
  | 'red'
  | 'green'
  | 'purple'
  | 'teal'
  | 'yellow'
  | 'orange'
  | 'primary'
  | 'secondary';

export declare type FormSizeType = typeof sm | typeof md | typeof lg;

export type InputType =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'reset'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'search';

export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
}

export type SelectOptionType = {
  name: string | number;
  value: string | number;
};

export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;
