'use client'

import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from 'recharts'

type ChartPieDataProps = {
  name: string
  value: number
}
type ChartPieProps = {
  data: ChartPieDataProps[]
  cartesian?: boolean
  tooltip?: boolean
  legend?: boolean
}

export function ChartPie(props: ChartPieProps) {
  const { data, tooltip = false, legend = false } = props
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={data[0]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data[1]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        {legend ? <Legend /> : null}
        {tooltip ? <Tooltip /> : null}
      </PieChart>
    </ResponsiveContainer>
  )
}
