import '@/styles/globals.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import {CrowdFundingProvider} from '@/context/CrowdFunding'

export default function App({ Component, pageProps }) {
  return(
  <>
    <CrowdFundingProvider>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </CrowdFundingProvider>
  </>
  )
}
