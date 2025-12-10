"use client"

import { useState } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { ConversationList } from "./conversation-list"
import { ChatArea } from "./chat-area"
import { DetailsPanel } from "./details-panel"
import { conversations, type Conversation } from "@/lib/data"

export function InboxLayout() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(conversations[0])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileView, setMobileView] = useState<"list" | "chat" | "details">("list")
  const [showSidebar, setShowSidebar] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleSelectConversation = (conv: Conversation) => {
    setSelectedConversation(conv)
    setMobileView("chat")
  }

  return (
    <div className="flex h-screen flex-col bg-background">
      <Header onMenuClick={() => setShowSidebar(!showSidebar)} onDetailsClick={() => setShowDetails(!showDetails)} />
      <div className="flex flex-1 overflow-hidden relative">
        <div
          className={`
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
          absolute inset-y-0 left-0 z-40
          transition-transform duration-300 ease-in-out
        `}
        >
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            onClose={() => setShowSidebar(false)}
          />
        </div>

        {showSidebar && (
          <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setShowSidebar(false)} />
        )}

        <div
          className={`
          ${mobileView === "list" ? "flex" : "hidden"}
          md:flex
          w-full md:w-80 flex-shrink-0
        `}
        >
          <ConversationList
            conversations={conversations}
            selectedId={selectedConversation.id}
            onSelect={handleSelectConversation}
          />
        </div>

        <div
          className={`
          ${mobileView === "chat" || mobileView === "details" ? "flex" : "hidden"}
          md:flex
          flex-1 min-w-0
        `}
        >
          <ChatArea
            conversation={selectedConversation}
            onBack={() => setMobileView("list")}
            onDetailsClick={() => {
              setMobileView("details")
              setShowDetails(true)
            }}
          />
        </div>

        <div
          className={`
          ${showDetails ? "translate-x-0" : "translate-x-full"}
          xl:translate-x-0 xl:static
          fixed inset-y-0 right-0 z-40
          transition-transform duration-300 ease-in-out
          top-14
        `}
        >
          <DetailsPanel
            conversation={selectedConversation}
            onClose={() => {
              setShowDetails(false)
              setMobileView("chat")
            }}
          />
        </div>

        {showDetails && (
          <div
            className="fixed inset-0 bg-black/50 z-30 xl:hidden top-14"
            onClick={() => {
              setShowDetails(false)
              setMobileView("chat")
            }}
          />
        )}
      </div>
    </div>
  )
}
