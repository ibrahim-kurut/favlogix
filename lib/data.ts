export interface Message {
  sender: "customer" | "agent"
  text: string
  time: string
  link?: string
}

export interface Contact {
  firstName: string
  lastName: string
  phone: string
  email: string
}

export interface Conversation {
  id: string
  name: string
  initials: string
  avatarColor: string
  lastMessage: string
  time: string
  contact: Contact
  messages: Message[]
}
