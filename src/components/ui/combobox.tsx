'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/lib/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/lib/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/lib/popover'

type ComboboxOptionProps = {
  id: string
  value: string
  label: string
}

type ComboboxProps = {
  options: ComboboxOptionProps[]
  placeholder?: string
  search?: boolean
}

export function Combobox(props: ComboboxProps) {
  const { options, placeholder = 'Selecione uma opção', search = true } = props

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
        >
          <span className="mr-auto">
            {value
              ? options.find(
                  (option: ComboboxOptionProps) => option.value === value,
                )?.label
              : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          {search ? <CommandInput placeholder="" /> : null}
          <CommandEmpty>Não encontrado</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.id}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
