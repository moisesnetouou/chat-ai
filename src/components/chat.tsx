'use client'

import { useChat } from '@ai-sdk/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Usando Vercel SDK para criar um chatbot.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map(message => {
            return (
              <div
                key={message.id}
                className="mb-4 flex gap-3 text-slate-600 text-sm"
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>MN</AvatarFallback>
                    <AvatarImage src="https://github.com/moisesnetouou.png" />
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>MN</AvatarFallback>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuário:' : 'AI:'}
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Como posso ajudar você?"
            value={input}
            onChange={handleInputChange}
          />

          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
