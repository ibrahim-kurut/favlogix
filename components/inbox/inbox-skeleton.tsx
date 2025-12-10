"use client"

import { Skeleton } from "@/components/ui/skeleton"

// Skeleton for Sidebar
export function SidebarSkeleton() {
  return (
    <div className="flex h-full w-16 flex-col border-r border-border bg-card p-2">
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
      </div>
    </div>
  )
}

// Skeleton for Conversation List
export function ConversationListSkeleton() {
  return (
    <div className="flex w-full md:w-80 flex-col border-r border-border bg-card">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-8 w-8 rounded" />
      </div>

      {/* Search Skeleton */}
      <div className="p-3">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* Filters Skeleton */}
      <div className="flex items-center justify-between px-4 pb-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>

      {/* Conversation Items Skeleton */}
      <div className="flex-1 overflow-y-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="flex items-start gap-3 p-4 border-b border-border/50">
            <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-12" />
              </div>
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Skeleton For the chat area
export function ChatAreaSkeleton() {
  return (
    <div className="flex flex-1 flex-col bg-background w-full">
      {/* Chat Header Skeleton */}
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
        <Skeleton className="h-5 w-32" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded" />
          <Skeleton className="h-10 w-10 rounded" />
          <Skeleton className="h-10 w-10 rounded" />
        </div>
      </div>

      {/* Messages Skeleton */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-center mb-6">
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>

        <div className="space-y-4">
          {/* Customer message */}
          <div className="flex justify-start">
            <Skeleton className="h-16 w-64 rounded-2xl rounded-tl-none" />
          </div>
          {/* Agent message */}
          <div className="flex justify-end">
            <Skeleton className="h-20 w-72 rounded-2xl rounded-tr-none" />
          </div>
          {/* Customer message */}
          <div className="flex justify-start">
            <Skeleton className="h-12 w-48 rounded-2xl rounded-tl-none" />
          </div>
          {/* Agent message */}
          <div className="flex justify-end">
            <Skeleton className="h-16 w-64 rounded-2xl rounded-tr-none" />
          </div>
          {/* Customer message */}
          <div className="flex justify-start">
            <Skeleton className="h-10 w-40 rounded-2xl rounded-tl-none" />
          </div>
        </div>
      </div>

      {/* Input Skeleton */}
      <div className="border-t border-border bg-card p-4">
        <Skeleton className="h-24 w-full rounded-lg" />
      </div>
    </div>
  )
}

// Skeleton for Details Panel
export function DetailsPanelSkeleton() {
  return (
    <div className="flex h-full w-80 flex-col border-l border-border bg-card">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-8 w-8 rounded" />
      </div>

      {/* Avatar & Name Skeleton */}
      <div className="flex flex-col items-center p-6">
        <Skeleton className="h-20 w-20 rounded-full mb-4" />
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Contact Info Skeleton */}
      <div className="px-4 space-y-4">
        <div>
          <Skeleton className="h-3 w-16 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div>
          <Skeleton className="h-3 w-16 mb-2" />
          <Skeleton className="h-4 w-48" />
        </div>
        <div>
          <Skeleton className="h-3 w-16 mb-2" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      {/* Actions Skeleton */}
      <div className="mt-auto p-4 space-y-2">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  )
}

// Skeleton for Header
export function HeaderSkeleton() {
  return (
    <div className="flex h-14 items-center justify-between border-b border-border bg-card px-4">
      <div className="flex items-center gap-2">
        <Skeleton className="h-8 w-8 rounded" />
        <Skeleton className="h-5 w-24" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="h-8 w-8 rounded" />
        <Skeleton className="h-8 w-8 rounded" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  )
}

// Skeleton for the complete layout
export function InboxLayoutSkeleton() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <HeaderSkeleton />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden lg:block">
          <SidebarSkeleton />
        </div>
        <div className="hidden md:flex">
          <ConversationListSkeleton />
        </div>
        <ChatAreaSkeleton />
        <div className="hidden xl:block">
          <DetailsPanelSkeleton />
        </div>
      </div>
    </div>
  )
}
