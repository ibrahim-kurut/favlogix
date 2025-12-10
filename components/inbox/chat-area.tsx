"use client"

import { useState } from "react"
import {
  MoreVertical,
  Moon,
  Calendar,
  ImageIcon,
  Video,
  FileText,
  Smile,
  Undo,
  Sparkles,
  Mic,
  CheckCheck,
  ArrowLeft,
  PanelRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { Conversation } from "@/lib/data"

interface ChatAreaProps {
  conversation: Conversation
  onBack?: () => void
  onDetailsClick?: () => void
}

export function ChatArea({ conversation, onBack, onDetailsClick }: ChatAreaProps) {
  const [message, setMessage] = useState("")

  return (
    <div className="flex flex-1 flex-col bg-background w-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b border-border bg-card px-2 sm:px-4 py-3">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="font-semibold text-sm sm:text-base truncate">{conversation.name}</h2>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
            <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 hidden sm:flex">
            <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 bg-transparent">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 xl:hidden" onClick={onDetailsClick}>
            <PanelRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-4">
        {/* Date Separator */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <span className="rounded-full bg-muted px-3 sm:px-4 py-1 text-xs sm:text-sm text-muted-foreground">
            28 August 2025
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {conversation.messages.map((msg, index) => (
            <div key={index} className={cn("flex", msg.sender === "customer" ? "justify-start" : "justify-end")}>
              <div className="flex flex-col max-w-[85%] sm:max-w-md">
                <div
                  className={cn(
                    "rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm",
                    msg.sender === "customer"
                      ? "bg-muted text-foreground rounded-tl-none"
                      : "bg-accent text-accent-foreground rounded-tr-none",
                  )}
                >
                  {msg.text}
                  {msg.link && (
                    <a href={msg.link} className="text-primary underline block mt-1 text-xs sm:text-sm break-all">
                      {msg.link}
                    </a>
                  )}
                </div>
                <div
                  className={cn(
                    "flex items-center gap-1 mt-1 text-[10px] sm:text-xs text-muted-foreground",
                    msg.sender === "customer" ? "justify-start" : "justify-end",
                  )}
                >
                  <span>{msg.time}</span>
                  {msg.sender === "agent" && <CheckCheck className="h-3 w-3 text-blue-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t border-border bg-card p-2 sm:p-4">
        <div className="rounded-lg border border-border bg-background">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type something...."
            className="border-0 focus-visible:ring-0 text-sm"
          />
          <div className="flex items-center justify-between px-2 sm:px-3 py-2">
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 hidden sm:flex">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                <FileText className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                <Smile className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 hidden sm:flex">
                <Undo className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                <Sparkles className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
