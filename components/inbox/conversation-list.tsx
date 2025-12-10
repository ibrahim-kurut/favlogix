"use client"

import { Search, SlidersHorizontal, ChevronDown, Edit } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { Conversation } from "@/lib/data"

interface ConversationListProps {
  conversations: Conversation[]
  selectedId: string
  onSelect: (conversation: Conversation) => void
}

export function ConversationList({ conversations, selectedId, onSelect }: ConversationListProps) {
  return (
    <div className="flex w-full md:w-80 flex-col border-r border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded border border-border">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </div>
          <span className="font-medium text-sm sm:text-base">Michael Johnson</span>
        </div>
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </div>

      {/* Search */}
      <div className="p-2 sm:p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search Chat" className="pl-9 pr-9 bg-muted border-0 text-sm" />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between px-3 sm:px-4 pb-2">
        <Button variant="ghost" size="sm" className="gap-1 text-xs sm:text-sm">
          Open <ChevronDown className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="sm" className="gap-1 text-xs sm:text-sm">
          Newest <ChevronDown className="h-3 w-3" />
        </Button>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelect(conversation)}
            className={cn(
              "flex w-full items-start gap-3 p-3 sm:p-4 text-left transition-colors hover:bg-muted",
              selectedId === conversation.id && "bg-accent",
            )}
          >
            <Avatar className={cn("h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0", conversation.avatarColor)}>
              <AvatarFallback className={cn("text-white text-xs sm:text-sm", conversation.avatarColor)}>
                {conversation.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-sm truncate">{conversation.name}</span>
                <span className="text-xs text-muted-foreground flex-shrink-0">{conversation.time}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
