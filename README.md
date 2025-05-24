# Chat AI with Next.js and OpenAI

This is a chat project that uses Next.js 15 (App Router), Vercel AI SDK, and OpenAI to create an interactive chat interface.

## Prerequisites

- Node.js 18+ installed
- An OpenAI account with API access
- An OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone [REPOSITORY_URL]
cd chat-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the project root and add your OpenAI key:
```env
OPENAI_API_KEY=your_api_key_here
```

## Running the Project

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- Next.js 15 (App Router)
- Vercel AI SDK
- OpenAI API
- Tailwind CSS
- Shadcn/ui

## Important Notes

- Make sure to keep your API key secure and never share it
- The project uses OpenAI's GPT model to generate responses
- The interface is built with Shadcn/ui components for a modern experience
