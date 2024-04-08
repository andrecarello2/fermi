'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

import { Button } from '..'
import {
  HomeIcon,
  Tv2Icon,
  HandshakeIcon,
  LogOutIcon,
  KeySquareIcon,
} from 'lucide-react'

export function Menu() {
  const [active, setActive] = useState<string>('dashboard')

  return (
    <div className="fixed top-20 left-0 bottom-0 w-[250px] flex flex-col flex-1">
      <div className="flex-1 flex justify-center">
        <nav className="flex flex-col items-start gap-y-2 px-4 pb-6 border-r">
          <Button
            size="icon"
            variant="ghost"
            onMouseEnter={() => setActive('dashboard')}
          >
            <HomeIcon className="h-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onMouseEnter={() => setActive('airvent')}
          >
            <Tv2Icon className="h-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onMouseEnter={() => setActive('gallery')}
          >
            <KeySquareIcon className="h-5" />
          </Button>

          <Button size="icon" variant="ghost">
            <HandshakeIcon className="h-5" />
          </Button>

          <div className="mt-auto">
            <Button size="icon" variant="ghost">
              <LogOutIcon className="h-5" />
            </Button>
          </div>
        </nav>
        <div className="relative flex-1 overflow-hidden">
          <div
            className={cn(
              'absolute top-0 w-full transition-all',
              active === 'dashboard'
                ? 'right-0 opacity-100 visible'
                : 'right-10 opacity-0 invisible',
            )}
          >
            <div className="px-3 py-2">
              <div className="flex items-center lg:text-xl lg:leading-6 mb-4 font-semibold">
                Dashboard
              </div>
              <div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  item 1
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  item 2
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              'absolute top-0 w-full transition-all',
              active === 'airvent'
                ? 'right-0 opacity-100 visible'
                : 'right-10 opacity-0 invisible',
            )}
          >
            <div className="px-3 py-2">
              <div className="flex items-center lg:text-xl lg:leading-6 mb-4 font-semibold">
                Resources
              </div>
              <div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Banners
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Billing Addresses
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Cart Requests
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Carts
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Crossing Plans
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Customers
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Logs
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Orders
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Plans
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Prospects
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Redirections
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Users
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              'absolute top-0 w-full transition-all',
              active === 'gallery'
                ? 'right-0 opacity-100 visible'
                : 'right-10 opacity-0 invisible',
            )}
          >
            <div className="px-3 py-2">
              <div className="flex items-center lg:text-xl lg:leading-6 mb-4 font-semibold">
                Access
              </div>
              <div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Roles
                </div>
                <div className="flex items-center lg:text-sm lg:leading-6 font-semibold">
                  Permissions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
