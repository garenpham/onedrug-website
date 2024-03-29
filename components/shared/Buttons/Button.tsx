import { cn } from '@/utils/styles'
import { cva, VariantProps } from 'class-variance-authority' //create css variants
import * as React from 'react'
import { ImSpinner8 } from 'react-icons/im'

const buttonVariants = cva(
  `shrink-0 rounded-[3px] inline-flex items-center justify-center border disabled:pointer-events-none disabled:text-gray_3 disabled:border-gray_2 disabled:bg-white disabled:border active:scale-95 transition-transform ease-in`, //these are the base styles
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white border-primary hover:border-black',
        alternate: 'text-primary border-primary',
      },
      size: {
        default: 'lg:h-[52px] lg:w-[190px]',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  error?: boolean
  errorMessage?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      error = false,
      errorMessage = 'There was an error, please try again.',
      size,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={isLoading}
          {...props}>
          {isLoading ? (
            <ImSpinner8 className='mr-2 h-4 w-4 animate-spin' />
          ) : null}
          {children}
        </button>

        {error && (
          <div className='text-red-700 text-[12px] m-1 w-full text-center'>
            {errorMessage}
          </div>
        )}
      </>
    )
  }
)
Button.displayName = 'Button'

export { Button }

