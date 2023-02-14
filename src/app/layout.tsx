import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Menu from './components/Menu'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Menu/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
