import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../component/header/Header'
import { AuthenticationContext, AuthenticationProvider } from '../context/Authentication'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthenticationProvider>
        <Header />
        <Component {...pageProps} />
      </AuthenticationProvider>
    </>
  )
}
// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
export default MyApp
