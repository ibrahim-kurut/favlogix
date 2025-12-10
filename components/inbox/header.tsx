"use client"

import { Settings, Inbox, Users, Sparkles, GitBranch, Megaphone, Menu, PanelRight } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: Inbox, label: "Inbox", active: true },
  { icon: Users, label: "Contacts", active: false },
  { icon: Sparkles, label: "AI Employees", active: false },
  { icon: GitBranch, label: "Workflows", active: false },
  { icon: Megaphone, label: "Campaigns", active: false },
]

interface HeaderProps {
  onMenuClick?: () => void
  onDetailsClick?: () => void
}

export function Header({ onMenuClick, onDetailsClick }: HeaderProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-card px-2 sm:px-4">
      <div className="flex items-center gap-2 sm:gap-6">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">B</span>
          </div>
          <span className="text-lg font-bold text-primary hidden sm:inline">BOXpad</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              size="sm"
              className={`gap-2 ${item.active ? "bg-muted" : ""}`}
            >
              <item.icon className="h-4 w-4" />
              <span className="hidden lg:inline">{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={onDetailsClick}>
          <PanelRight className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:flex">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </Button>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 bg-primary">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">M</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden sm:inline">Michael Johnson</span>
        </div>
      </div>
    </header>
  )
}
