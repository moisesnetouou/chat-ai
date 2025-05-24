import { openai } from '@ai-sdk/openai'
import { type Message, streamText } from 'ai'
import type { NextRequest } from 'next/server'

export const maxDuration = 30

export async function POST(request: NextRequest) {
  const {
    messages,
  }: {
    messages: Message[]
  } = await request.json()

  const systemMessage: Message = {
    id: crypto.randomUUID(),
    role: 'system',
    content: `
      Responda sempre em português brasileiro, a menos que o usuário peça claramente para usar outro idioma (ex: "responda em inglês").
      Priorize o português para todas as respostas, exceto quando houver uma solicitação explícita de idioma diferente.
    `.trim(),
  }

  const result = streamText({
    model: openai('gpt-4o'),
    messages: [systemMessage, ...messages],
  })

  return result.toDataStreamResponse()
}
