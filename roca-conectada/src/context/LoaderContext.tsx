'use client'

import { createContext, useContext, useState } from 'react'

interface LoaderCtx { done: boolean; markDone: () => void }

const Ctx = createContext<LoaderCtx>({ done: false, markDone: () => {} })

export const useLoaderDone    = () => useContext(Ctx).done
export const useMarkLoaderDone = () => useContext(Ctx).markDone

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false)
  return (
    <Ctx.Provider value={{ done, markDone: () => setDone(true) }}>
      {children}
    </Ctx.Provider>
  )
}
