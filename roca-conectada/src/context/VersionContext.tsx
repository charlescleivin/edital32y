'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { computeDiffs, type SectionDiffMap } from '@/lib/diffEngine'

export interface VersionMeta {
  id: string
  commit: string
  date: string
  label: string
  description: string
}

interface VersionState {
  versions: VersionMeta[]
  fromId: string
  toId: string
  panelOpen: boolean
  activeSectionId: string | null
  diff: SectionDiffMap | null
  loading: boolean
  setFromId: (id: string) => void
  setToId: (id: string) => void
  openPanel: (sectionId?: string) => void
  closePanel: () => void
  setActiveSectionId: (id: string | null) => void
}

const Ctx = createContext<VersionState | null>(null)

export function useVersion() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useVersion must be used inside VersionProvider')
  return ctx
}

async function fetchVersion(id: string): Promise<Record<string, unknown>> {
  const res = await fetch(`/versions/${id}.json`)
  return res.json()
}

async function fetchChangelog(): Promise<VersionMeta[]> {
  const res = await fetch('/versions/changelog.json')
  return res.json()
}

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [versions, setVersions] = useState<VersionMeta[]>([])
  const [fromId, setFromId] = useState('v4')
  const [toId, setToId] = useState('v5')
  const [panelOpen, setPanelOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)
  const [diff, setDiff] = useState<SectionDiffMap | null>(null)
  const [loading, setLoading] = useState(false)
  const [cache, setCache] = useState<Record<string, Record<string, unknown>>>({})

  useEffect(() => {
    fetchChangelog().then(setVersions).catch(console.error)
  }, [])

  const loadDiff = useCallback(
    async (from: string, to: string) => {
      setLoading(true)
      try {
        const [fromData, toData] = await Promise.all([
          cache[from] ?? fetchVersion(from),
          cache[to] ?? fetchVersion(to),
        ])
        setCache((prev) => ({ ...prev, [from]: fromData, [to]: toData }))
        setDiff(computeDiffs(fromData, toData))
      } catch (e) {
        console.error('diff load error', e)
      } finally {
        setLoading(false)
      }
    },
    [cache],
  )

  useEffect(() => {
    if (panelOpen) loadDiff(fromId, toId)
  }, [panelOpen, fromId, toId]) // eslint-disable-line react-hooks/exhaustive-deps

  const openPanel = useCallback((sectionId?: string) => {
    setPanelOpen(true)
    if (sectionId) setActiveSectionId(sectionId)
  }, [])

  const closePanel = useCallback(() => {
    setPanelOpen(false)
    setActiveSectionId(null)
  }, [])

  return (
    <Ctx.Provider
      value={{
        versions,
        fromId,
        toId,
        panelOpen,
        activeSectionId,
        diff,
        loading,
        setFromId,
        setToId,
        openPanel,
        closePanel,
        setActiveSectionId,
      }}
    >
      {children}
    </Ctx.Provider>
  )
}
