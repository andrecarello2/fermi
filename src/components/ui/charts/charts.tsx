'use client'

import { BarDatum } from '@nivo/bar'
import { ChartBar } from './chart-bar'
import { PropertyAccessor } from '@nivo/core'

export type ChartBarType = {
  data: BarDatum[]
  legend: {
    X: string
    Y: string
  }
  keys: string[]
  indexBy: PropertyAccessor<BarDatum, string>
  layout?: 'horizontal' | 'vertical'
  mode?: 'grouped' | 'stacked' | undefined
}

type ChartsProps = ChartBarType & {
  type: 'pie' | 'radial' | 'bar'
  cn?: string
}

export function Charts(props: ChartsProps) {
  const { type, cn } = props

  return (
    <div className={cn}>{type === 'bar' ? <ChartBar {...props} /> : <></>}</div>
  )
}
