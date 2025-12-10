"use client"

import { useState, useEffect } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { ConversationList } from "./conversation-list"
import { ChatArea } from "./chat-area"
import { DetailsPanel } from "./details-panel"
import { InboxLayoutSkeleton } from "./inbox-skeleton"
import { fetchUsers } from "@/lib/api/users"
import type { Conversation } from "@/lib/data"

export function InboxLayout() {
  // State for API data
  const [conversations, setConversations] = useState<Conversation[]>([])
  
  // State for loading
  const [loading, setLoading] = useState(true)
  
  // State for errors
  const [error, setError] = useState<string | null>(null)
  
  // State for selected conversation
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  
  // Other states
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileView, setMobileView] = useState<"list" | "chat" | "details">("list")
  const [showSidebar, setShowSidebar] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  // Load data on page load
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const data = await fetchUsers()
        setConversations(data)
        
        if (data.length > 0) {
          setSelectedConversation(data[0])
        }
      } catch (err) {
        setError('A data fetching error occurred')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Displaying the loading status using Skeleton
  if (loading) {
    return <InboxLayoutSkeleton />
  }

  // Display error status
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  // Checking for selected conversation
  if (!selectedConversation) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <p className="text-muted-foreground">No conversations found</p>
      </div>
    )
  }

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
