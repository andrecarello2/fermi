import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Ui,
} from '@/components'
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react'

import { DaysToSelect, E } from '@/mock'
import { Charts } from '@/components/ui/charts/charts'
import { RootLayout } from '@/components/layouts'

export default function Home() {
  return (
    <RootLayout title="Dashboard" onPopState="/">
      <Ui.Box cn="p-2">
        <Card>
          <CardHeader>
            <CardTitle>Ordens por tipo</CardTitle>
          </CardHeader>
          <Charts
            cn="h-80 w-full"
            type="bar"
            data={E}
            legend={{ X: 'country', Y: 'food' }}
            indexBy="country"
            mode="stacked"
            keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
          />
        </Card>

        <div className="grid grid-cols-2 gap-2 my-2">
          <Card>
            <CardHeader>
              <CardDescription>Ordens por tipo</CardDescription>
            </CardHeader>
            <CardContent>
              <Charts
                type="bar"
                cn="h-80 w-full"
                data={[
                  {
                    qtd: 'Migration',
                    Celular: 108,
                    Internet: 86,
                    Web: 90,
                  },
                ]}
                legend={{ X: 'type', Y: 'qtd' }}
                mode="grouped"
                indexBy="qtd"
                keys={['Celular', 'Internet', 'Web']}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Ordens</CardDescription>
            </CardHeader>
            <CardContent>
              <Charts
                type="bar"
                cn="h-80 w-full"
                data={[
                  {
                    qtd: 'Orders',
                    Success: 108,
                    Error: 86,
                  },
                ]}
                legend={{ X: 'type', Y: 'qtd' }}
                mode="grouped"
                indexBy="qtd"
                keys={['Success', 'Error']}
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-2">
          <Card>
            <CardHeader
              className="justify-between"
              actions={
                <Ui.Combobox
                  placeholder="Selecione"
                  options={DaysToSelect}
                  search={false}
                />
              }
            >
              <CardDescription>Pedidos por dia</CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">51</h1>
            </CardContent>
            <CardFooter className="gap-x-2">
              <TrendingUpIcon className="stroke-teal-500" />
              <CardDescription>Aumento de 0.06%</CardDescription>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader
              className="justify-between"
              actions={
                <Ui.Combobox
                  placeholder="Selecione"
                  options={DaysToSelect}
                  search={false}
                />
              }
            >
              <CardDescription>Novos pedidos</CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">455</h1>
            </CardContent>
            <CardFooter className="gap-x-2">
              <TrendingDownIcon className="stroke-rose-500" />
              <CardDescription>Redução de 34.06%</CardDescription>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader
              className="justify-between"
              actions={
                <Ui.Combobox
                  placeholder="Selecione"
                  options={DaysToSelect}
                  search={false}
                />
              }
            >
              <CardDescription>Novos redirecionamentos</CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">0</h1>
            </CardContent>
          </Card>
        </div>
      </Ui.Box>
    </RootLayout>
  )
}
