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

export const conversations: Conversation[] = [
  {
    id: "1",
    name: "Olivia Mckinsey",
    initials: "O",
    avatarColor: "bg-amber-500",
    lastMessage: "Oh my god I'll try it ASAP, thank you",
    time: "23:23",
    contact: {
      firstName: "Olivia",
      lastName: "Mckinsey",
      phone: "+1 (312) 555-0134",
      email: "olivia.Mckinsey@gmail.com",
    },
    messages: [
      {
        sender: "customer",
        text: "Hi, I recently joined Fit4Life and I'm trying to access my workout plan, but I can't login. Can you help?",
        time: "23:08",
      },
      {
        sender: "agent",
        text: "Hello Olivia 👋 I'm Michael, your AI customer support assistant. Let's fix this quickly. Could you confirm the email address?",
        time: "23:08",
      },
      {
        sender: "customer",
        text: "Yes, it's olivia.Mckinsey@gmail.com",
        time: "23:16",
      },
      {
        sender: "agent",
        text: "Thanks! Looks like your reset wasn't completed. I've sent a new link - please check your inbox.",
        time: "23:16",
      },
      {
        sender: "customer",
        text: "I see it. resetting now...",
        time: "23:17",
      },
      {
        sender: "customer",
        text: "Done! I'm logged in. Thanks!",
        time: "23:20",
      },
      {
        sender: "agent",
        text: 'Perfect 🎉 Your plan is ready under "My Programs". Since you\'re starting out, I suggest our Premium Guide - it boosts results and is 20% off here 👉',
        time: "23:20",
        link: "www.Fit4Life.com/Premium",
      },
      {
        sender: "customer",
        text: "Oh my god 😍 I'll try it ASAP, thank you so much!!",
        time: "23:23",
      },
    ],
  },
  {
    id: "2",
    name: "Sara Williams",
    initials: "E",
    avatarColor: "bg-emerald-500",
    lastMessage: "Good Evening, Emily! Hope you are..",
    time: "23:16",
    contact: {
      firstName: "Sara",
      lastName: "Williams",
      phone: "+1 (555) 123-4567",
      email: "sara.williams@email.com",
    },
    messages: [],
  },
  {
    id: "3",
    name: "Frank Thompson",
    initials: "F",
    avatarColor: "bg-violet-500",
    lastMessage: "Thank you for signing up Frank! If t..",
    time: "22:28",
    contact: {
      firstName: "Frank",
      lastName: "Thompson",
      phone: "+1 (555) 987-6543",
      email: "frank.thompson@email.com",
    },
    messages: [],
  },
  {
    id: "4",
    name: "Grace Lee",
    initials: "G",
    avatarColor: "bg-green-500",
    lastMessage: "I am sending you the report right a..",
    time: "20:43",
    contact: {
      firstName: "Grace",
      lastName: "Lee",
      phone: "+1 (555) 456-7890",
      email: "grace.lee@email.com",
    },
    messages: [],
  },
  {
    id: "5",
    name: "Henry Adams",
    initials: "H",
    avatarColor: "bg-yellow-500",
    lastMessage: "Thank you for filling out our survey!",
    time: "17:37",
    contact: {
      firstName: "Henry",
      lastName: "Adams",
      phone: "+1 (555) 321-0987",
      email: "henry.adams@email.com",
    },
    messages: [],
  },
  {
    id: "6",
    name: "Isabella Martinez",
    initials: "I",
    avatarColor: "bg-indigo-500",
    lastMessage: "I will update you soon Isabella!",
    time: "16:01",
    contact: {
      firstName: "Isabella",
      lastName: "Martinez",
      phone: "+1 (555) 654-3210",
      email: "isabella.martinez@email.com",
    },
    messages: [],
  },
  {
    id: "7",
    name: "James Brown",
    initials: "J",
    avatarColor: "bg-orange-500",
    lastMessage: "Hello James! Let's collaborate on...",
    time: "13:44",
    contact: {
      firstName: "James",
      lastName: "Brown",
      phone: "+1 (555) 789-0123",
      email: "james.brown@email.com",
    },
    messages: [],
  },
  {
    id: "8",
    name: "Katherine White",
    initials: "K",
    avatarColor: "bg-pink-500",
    lastMessage: "Hi Katherine, looking forward to our..",
    time: "09:02",
    contact: {
      firstName: "Katherine",
      lastName: "White",
      phone: "+1 (555) 012-3456",
      email: "katherine.white@email.com",
    },
    messages: [],
  },
  {
    id: "9",
    name: "Lucas Green",
    initials: "L",
    avatarColor: "bg-lime-500",
    lastMessage: "Hey Lucas! Ready for the holiday...",
    time: "Yesterday",
    contact: {
      firstName: "Lucas",
      lastName: "Green",
      phone: "+1 (555) 234-5678",
      email: "lucas.green@email.com",
    },
    messages: [],
  },
]
