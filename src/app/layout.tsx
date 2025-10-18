import type { Metadata } from 'next'
import { ThemeProvider } from '@/shared/components/themeProvider'
import { Prompt } from 'next/font/google'
import './globals.css'
import { description, title } from '@/shared/constants/descriptionCodeCamp'

const promptFont = Prompt({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
   title: {
      default: title,
      template: `%s | ${title}`,
   },
   description: description,
   icons: {
      icon: '/images/logo-web-1.png',
   },
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={`${promptFont.className} antialiased`}>
            <ThemeProvider>{children}</ThemeProvider>
         </body>
      </html>
   )
}
