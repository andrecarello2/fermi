'use client'

import {
  RadialBarChart,
  RadialBar as Rb,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
}

type RadialBarProps = {
  data: any
  cartesian?: boolean
  tooltip?: boolean
  legend?: boolean
}

export function ChartRadial(props: RadialBarProps) {
  const { data, cartesian = false, tooltip = false, legend = false } = props

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <Rb
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}
