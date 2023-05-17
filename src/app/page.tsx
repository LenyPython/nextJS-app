import Feed from '@/components/Feed'

export const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br />
        <span className='orange_gradient text-center'>
          AI powered something
        </span>
      </h1>
      <p className='desc text-center'>
        Some other description. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Pariatur ad esse debitis animi, modi quasi aliquid
        reiciendis dolore natus illo laborum illum vel! Incidunt debitis aliquam
        odio soluta! Accusamus, placeat.
      </p>

      <Feed />
    </section>
  )
}

export default Home
