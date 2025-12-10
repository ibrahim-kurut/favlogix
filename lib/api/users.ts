import type { Conversation, Message } from '@/lib/data'

// function to fetch comments and convert them into messages
async function fetchCommentsAsMessages(userId: number): Promise<Message[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
  
  if (!res.ok) {
    return []
  }
  
  const comments = await res.json()
  
  return comments.map((comment: any, index: number) => ({
    sender: index % 2 === 0 ? "customer" : "agent",
    text: comment.body,
    time: `${10 + index}:00`,
  }))
}

// function to fetch users
export async function fetchUsers(): Promise<Conversation[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  
  const users = await response.json()

  const conversationsWithMessages = await Promise.all(
    users.map(async (user: any) => {
      const messages = await fetchCommentsAsMessages(user.id)
      
      return {
        id: user.id.toString(),
        name: user.name,
        initials: user.name.charAt(0).toUpperCase(),
        avatarColor: getRandomColor(),
        lastMessage: messages.length > 0 
          ? messages[messages.length - 1].text.substring(0, 40) + "..."
          : user.company.catchPhrase,
        time: "Now",
        contact: {
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1] || '',
          phone: user.phone,
          email: user.email,
        },
        messages: messages
      }
    })
  )

  return conversationsWithMessages
}

// function to give a random color
function getRandomColor(): string {
  const colors = [
    'bg-amber-500',
    'bg-emerald-500', 
    'bg-violet-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-lime-500'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}