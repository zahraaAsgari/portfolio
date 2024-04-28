import './globals.css'
import {Poppins} from "next/font/google"
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeBtn from '@/components/ThemeBtn'
import ThemeContextProvider from '@/context/Theme-context';

const poppin = Poppins({
  weight: ['400','500', '700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Personal Portfolio',
  description: 'created by ZahraAsgari (frontend developer)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppin.className} bg-gray-50 dark:bg-gray-950 dark:text-gray-50  text-gray-950 pt-[9rem] sm:pt-[10rem]relative `}>
        <div className="bg-gradiant absolute blur-[10rem] w-full h-[31.25rem] top-0 -z-10 "></div>
        
        <ThemeContextProvider>
        <ActiveSectionContextProvider>
        <Header/>
        {children}
        <ThemeBtn/>
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
     
        </body>
    </html>
  )
}

