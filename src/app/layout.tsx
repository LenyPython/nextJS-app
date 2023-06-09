import '@/styles/globals.css'
import Nav from '@/components/Nav'
import { FC, PropsWithChildren } from 'react'

export const metadata = {
  title: 'Training with Next',
  description: 'Some AI Prompts'
}
const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
