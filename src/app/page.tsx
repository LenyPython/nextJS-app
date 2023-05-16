import Feed from '@/components/Feed'

export const Home = () => {
  return (
    <section className='w-full flex flex-center flex-col'>
      <h1 className='head_text text-center'>Discover & Share</h1>
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>AI powered</span>
      <p className='desc text-center'>Some other description</p>

      <Feed />
    </section>
  )
}

export default Home
