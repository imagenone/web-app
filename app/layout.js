// import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Home from './page'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Magia | Estilos| tecnologia | viajes   ',
  description: 'Disfuta la vida Uniendo tecnologia, Etilos Y Magia',
}
const scriptContent = `
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-MNG85WPY8L');
`;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MNG85WPY8L"   />
    
    <script dangerouslySetInnerHTML={{ __html: scriptContent }} />

    </head>
    
      <body
       className={` ${inter.className}`}
       >
        <Navigation/>
       {children}

       
       </body>
    </html>
  )
}
