import { cva } from 'class-variance-authority';

export { default as Button } from './Button.svelte';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-posta-red text-white hover:bg-posta-red/80',
        destructive: 'bg-red-400 text-red-100 hover:bg-red-400/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-blue-400 text-blue-100 hover:bg-blue-400/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        subscribe: 'bg-chill-army-green text-white hover:bg-chill-army-green/80',
        copy: 'bg-chill-army-green/30 text-chill-army-green border-chill-army-green border hover:bg-chill-army-green/10',
        icon: 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600',
        active: 'bg-posta-red text-white hover:bg-posta-red/40',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 py-2 px-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
