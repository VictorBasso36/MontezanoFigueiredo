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
  },
  icons: {
    icon: '/next.svg',
  },
}

export default function RootLayout({
  children,
 }: {
  children: React.ReactNode;
 }) {
  return (
   <html lang="pt-Br">
    <link rel="icon" href="/next.svg" sizes="any" />
    <meta name="robots" content="index, follow"></meta>
    <meta name="revisit-after" content="5 days"></meta>
    <meta name="author" content="Victor Basso Dev - Programador FullStack"></meta>
    <meta name="language" content="Portuguese"></meta>
    <meta name="keywords" content="Advocacia Empresarial, Contabilidade Estratégica, Planejamento Patrimonial, Reestruturação Financeira, Consultoria Financeira, Assessoria Empresarial, Gestão Patrimonial, Recuperação de Ativos, Planejamento Tributário, Estratégias Fiscais, Compliance Empresarial, Assessoria Fiscal, Planejamento Estratégico Empresarial, Gestão Financeira Estratégica, Recuperação de Créditos, Soluções Contenciosas, Consultoria em Conformidade Fiscal, Assessoria Legal Tributária, Análise Fiscal Estratégica, Gestão de Riscos Tributários"></meta>
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
