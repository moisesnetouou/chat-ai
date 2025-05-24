import { openai } from '@ai-sdk/openai';
import { Message, streamText } from 'ai';
import { NextRequest } from 'next/server';

export const maxDuration = 30;

export async function POST(request: NextRequest) {
  const { messages }: {
    messages: Message[]
  } = await request.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages,
  });

  console.log("teste", result)

  return result.toDataStreamResponse();
}