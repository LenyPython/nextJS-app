import Prompt from '@/models/propmt'
import { connectToDB } from '@/utils/db'

export const POST = async (req: Request) => {
  const { userId, prompt, tag } = await req.json()
  try {
    await connectToDB()
    const newPrompt = new Prompt({
      creator: userId,
      tag,
      prompt
    })
    await newPrompt.save()
    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    console.error('Error connecting to database', error)
    return new Response('Failed to create new prompt', { status: 500 })
  }
}
