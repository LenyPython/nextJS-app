import { Post } from '@/app/create-prompt/page'
import { FC } from 'react'

type Props = {
  type: string
  post: Post
  setPost: React.Dispatch<React.SetStateAction<Post>>
  submitting: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
const Form: FC<Props> = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share prompts and ideas with the world.
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label htmlFor='prompt'>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI prompt
          </span>
          <textarea
            name='prompt'
            value={post.prompt}
            onChange={e => setPost({ ...post, prompt: e.target.value })}
            placeholder='Your prompt goes here...'
            required
            className='form_textarea'
          />
        </label>
        <label htmlFor='post'>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag
          </span>
          <span className='font-normal'> (#product, #webdev, #idea)</span>
          <textarea
            name='post'
            value={post.tag}
            onChange={e => setPost({ ...post, tag: e.target.value })}
            placeholder='Tag your prompt here...'
            required
            className='form_textarea'
          />
        </label>
      </form>
    </section>
  )
}

export default Form
