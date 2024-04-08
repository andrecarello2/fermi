import { z } from 'zod'

const Schema = z.object({
  NEXT_PUBLIC_CLARO_GO_API: z.string().url(),
  NEXT_PUBLIC_ORCHESTRATOR_API: z.string().url(),
})

export const env = Schema.parse(process.env)
