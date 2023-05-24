import '@/styles/globals.css'
import Nav from '@/components/Nav'
import { FC, PropsWithChildren } from 'react'
import Provider from '@/components/Provider'

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
        <Provider>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
