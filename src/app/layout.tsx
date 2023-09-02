import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import GraphQLProvider from './lib/provider'
import { ConfigProvider } from 'antd'
const josefin_Sans = Josefin_Sans({ 
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700'],
})

export const metadata: Metadata = {
  title: 'Montezano Figueiredo - GESTÃO TRIBUTÁRIA & PLANEJAMENTO ESTRATÉGICO',
  description: 'A Montezano Figueiredo é um Hub de inteligência que alinha a Gestão Tributária e Planejamento Estratégico. ',
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: 'device-width'
}
}

export default function RootLayout({
  children,
 }: {
  children: React.ReactNode;
 }) {
  return (
   <html lang="pt-Br">
    <body className={josefin_Sans.className}>
     <GraphQLProvider>
      <ConfigProvider  theme={{
      token: {
        colorBorder: '#C09759', 
        colorPrimary: '#C09759',
      },
    }}>
        {children}
        </ConfigProvider>
      </GraphQLProvider>
    </body>
   </html>
  );
 }
