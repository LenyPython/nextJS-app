'use client'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

import Form from '@/components/Form'

export type Post = {
  prompt: string
  tag: string
}

const CreatePrompt = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const router = useRouter()
  const { data: session } = useSession()
  const [post, setPost] = useState<Post>({ prompt: '', tag: '' })
  const createPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsSubmitting(true)
      const res = await fetch('/api/prompt/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: post.prompt,
          //@ts-ignore
          userId: session?.user?.id,
          tag: post.tag
        })
      })
      if (res.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error('Error while creating prompt', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <Form
      type={'Create'}
      post={post}
      setPost={setPost}
      submitting={isSubmitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt
