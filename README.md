# Inbox Dashboard

A modern inbox dashboard application built with Next.js, React, and TypeScript.

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://favlogix.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/ibrahim-kurut/favlogix)

🔗 **Live Demo:** [https://favlogix.vercel.app/](https://favlogix.vercel.app/)

📂 **GitHub:** [https://github.com/ibrahim-kurut/favlogix](https://github.com/ibrahim-kurut/favlogix)

![Inbox Dashboard](./public/placeholder.jpg)

## Author

**Ibrahim Kurut**

## Tech Stack

| Technology   | Purpose          |
|--------------|------------------|
| Next.js 16   | React Framework  |
| TypeScript   | Type Safety      |
| Tailwind CSS | Styling          |
| Radix UI     | UI Components    |
| Lucide React | Icons            |
| next-themes  | Dark/Light Mode  |

## Features

- 📬 **Conversation List** - Browse and select conversations
- 💬 **Chat Area** - View and send messages
- 👤 **Details Panel** - View contact information
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🌓 **Dark/Light Mode** - Toggle between themes
- ⏳ **Skeleton Loading** - Beautiful loading states
- 🔄 **API Integration** - Fetches data from external APIs

## APIs Used

| API             | Endpoint                    | Purpose                      |
|-----------------|-----------------------------|------------------------------|
| JSONPlaceholder | `/users`                    | Fetch user/conversation data |
| JSONPlaceholder | `/comments?postId={id}`     | Fetch messages for each user |

**Base URL:** `https://jsonplaceholder.typicode.com`

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ibrahim-kurut/favlogix.git
cd favlogix
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with ThemeProvider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
│
├── components/
│   ├── inbox/
│   │   ├── inbox-layout.tsx      # Main layout with API fetching
│   │   ├── conversation-list.tsx # Conversation sidebar
│   │   ├── chat-area.tsx         # Message display area
│   │   ├── details-panel.tsx     # Contact details
│   │   ├── header.tsx            # Top navigation
│   │   ├── sidebar.tsx           # Left navigation
│   │   └── inbox-skeleton.tsx    # Loading skeletons
│   ├── ui/                       # Reusable UI components
│   └── theme-provider.tsx        # Theme context
│
├── lib/
│   ├── api/
│   │   └── users.ts       # API fetching functions
│   ├── data.ts            # TypeScript interfaces
│   └── utils.ts           # Utility functions
```

## Assumptions Made

1. **API Data Mapping**: JSONPlaceholder `/users` data is mapped to conversation format
2. **Messages from Comments**: Comments API is used to simulate messages
3. **Sender Alternation**: Messages alternate between "customer" and "agent"
4. **Random Colors**: Avatar colors are randomly assigned from a predefined palette
5. **Static Time**: Message times are generated as placeholders

## Component Overview

| Component             | Description                                    |
|-----------------------|------------------------------------------------|
| `InboxLayout`         | Main container, handles API fetching and state |
| `ConversationList`    | Displays list of conversations                 |
| `ChatArea`            | Shows messages and input field                 |
| `DetailsPanel`        | Shows contact information                      |
| `Header`              | Top navigation bar                             |
| `Sidebar`             | Left navigation icons                          |
| `InboxLayoutSkeleton` | Loading state for entire layout                |

## State Management

- **useState** for local component state
- **useEffect** for API data fetching
- **useTheme** for dark/light mode

## Error Handling

- Loading state with skeleton loaders
- Error state with retry button
- Empty state for no conversations

## License

MIT License - Ibrahim Kurut © 2025
