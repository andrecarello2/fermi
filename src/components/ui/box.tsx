import { ReactNode } from 'react'

import { cn as Cn } from '@/lib/utils'

type BoxProps = {
  children: ReactNode
  cn?: string
}

export function Box(props: BoxProps) {
  const { children, cn } = props

  return <div className={Cn('border rounded-2xl', cn)}>{children}</div>
}
