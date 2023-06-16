import { cva } from 'class-variance-authority';

export { default as Button } from './Button.svelte';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-black text-white hover:bg-black/80',
        destructive: 'bg-red-400 text-red-100 hover:bg-red-400/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-blue-400 text-blue-100 hover:bg-blue-400/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        subscribe: 'bg-[#697B6F] text-white',
        copy: 'bg-[#697B6F]/30 text-[#4b5259] border-[#4b5259] border',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
