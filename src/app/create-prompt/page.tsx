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
  const [post, setPost] = useState<Post>({ prompt: '', tag: '' })
  const createPrompt = async (e: React.FormEvent<HTMLFormElement>) => {}
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
