import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}
export function Heading({
  size = 'md',
  children,
  asChild,
  className
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans font-black',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
