"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Plus, PanelRight, X } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Conversation } from "@/lib/data"

interface DetailsPanelProps {
  conversation: Conversation
  onClose?: () => void
}

export function DetailsPanel({ conversation, onClose }: DetailsPanelProps) {
  const [chatDataOpen, setChatDataOpen] = useState(true)
  const [contactDataOpen, setContactDataOpen] = useState(true)
  const [labelsOpen, setLabelsOpen] = useState(true)
  const [notesOpen, setNotesOpen] = useState(true)
  const [otherChatsOpen, setOtherChatsOpen] = useState(true)

  return (
    <aside className="flex w-80 sm:w-80 flex-col border-l border-border bg-card h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <h2 className="font-semibold">Details</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5 xl:hidden" />
          <PanelRight className="h-5 w-5 hidden xl:block" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Chat Data */}
        <div className="border-b border-border">
          <button
            onClick={() => setChatDataOpen(!chatDataOpen)}
            className="flex w-full items-center justify-between p-4"
          >
            <span className="font-medium text-sm sm:text-base">Chat Data</span>
            {chatDataOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {chatDataOpen && (
            <div className="space-y-4 px-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-muted-foreground">Assignee</span>
                <div className="flex items-center gap-2">
                  <Avatar className="h-5 w-5 sm:h-6 sm:w-6">
                    <AvatarFallback className="bg-muted text-[10px] sm:text-xs">JW</AvatarFallback>
                  </Avatar>
                  <span className="text-xs sm:text-sm">James West</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-muted-foreground">Team</span>
                <div className="flex items-center gap-2">
                  <Avatar className="h-5 w-5 sm:h-6 sm:w-6">
                    <AvatarFallback className="bg-muted text-[10px] sm:text-xs">ST</AvatarFallback>
                  </Avatar>
                  <span className="text-xs sm:text-sm">Sales Team</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Data */}
        <div className="border-b border-border">
          <button
            onClick={() => setContactDataOpen(!contactDataOpen)}
            className="flex w-full items-center justify-between p-4"
          >
            <span className="font-medium text-sm sm:text-base">Contact Data</span>
            {contactDataOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {contactDataOpen && (
            <div className="space-y-3 px-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-muted-foreground">First Name</span>
                <span className="text-xs sm:text-sm">{conversation.contact.firstName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-muted-foreground">Last Name</span>
                <span className="text-xs sm:text-sm">{conversation.contact.lastName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-muted-foreground">Phone number</span>
                <span className="text-xs sm:text-sm">{conversation.contact.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-muted-foreground">Email</span>
                <span className="text-xs sm:text-sm truncate max-w-[150px]">{conversation.contact.email}</span>
              </div>
              <button className="text-xs sm:text-sm font-medium text-foreground">See all</button>
            </div>
          )}
        </div>

        {/* Contact Labels */}
        <div className="border-b border-border">
          <button onClick={() => setLabelsOpen(!labelsOpen)} className="flex w-full items-center justify-between p-4">
            <span className="font-medium text-sm sm:text-base">Contact Labels</span>
            {labelsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {labelsOpen && (
            <div className="flex flex-wrap gap-2 px-4 pb-4">
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 text-xs">
                <span className="mr-1">●</span> Closed Won
              </Badge>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200 text-xs">
                <span className="mr-1">●</span> Chicago
              </Badge>
              <Button variant="outline" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-transparent">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="border-b border-border">
          <button onClick={() => setNotesOpen(!notesOpen)} className="flex w-full items-center justify-between p-4">
            <span className="font-medium text-sm sm:text-base">Notes</span>
            {notesOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {notesOpen && (
            <div className="space-y-3 px-4 pb-4">
              <div className="rounded-lg border border-border bg-background p-3">
                <p className="text-xs sm:text-sm text-muted-foreground">Add a note</p>
              </div>
              <div className="rounded-lg bg-accent p-3">
                <p className="text-xs sm:text-sm">Strong potential for future upgrades</p>
              </div>
            </div>
          )}
        </div>

        {/* Other Chats */}
        <div>
          <button
            onClick={() => setOtherChatsOpen(!otherChatsOpen)}
            className="flex w-full items-center justify-between p-4"
          >
            <span className="font-medium text-sm sm:text-base">Other Chats</span>
            {otherChatsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {otherChatsOpen && (
            <div className="px-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium">Fit4Life</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">On my way!</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs text-muted-foreground">08/08/25</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
