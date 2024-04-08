import { ReactNode } from 'react'
import { Button, Ui, Icons } from '..'
import { ChevronLeftIcon, User2Icon } from 'lucide-react'

interface RootLayoutProps {
  children: ReactNode
  title: string
  onPopState?: string
}

export function RootLayout(props: RootLayoutProps) {
  const { children, title, onPopState } = props

  return (
    <div className="h-screen pt-24">
      <nav className="fixed top-0 left-0 right-0 z-10 h-20 flex items-stretch border-b justify-start pr-5 backdrop-blur-xl">
        <div className="grid place-items-center h-20 py-4 px-6">
          <h1 className="text-sm">
            <Icons.Oston csx="h-6" />
          </h1>
        </div>
        <div className="w-full flex items-center justify-end gap-x-2">
          <div className="text-right leading-4">
            André Carello De Lellis
            <small className="block">andre@oston.io</small>
          </div>
          <Button size="icon" variant="ghost">
            <User2Icon />
          </Button>
        </div>
      </nav>

      <div className="flex pl-[250px]">
        <Ui.Menu />

        <div className="flex-1 px-4 pb-2">
          <header className="flex items-center justify-start gap-x-2 mb-8 h-14">
            {onPopState ? (
              <Button size="icon" variant="outline" href={onPopState}>
                <ChevronLeftIcon />
              </Button>
            ) : null}
            <div>
              <h1 className="font-extralight text-3xl">{title}</h1>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  )
}
