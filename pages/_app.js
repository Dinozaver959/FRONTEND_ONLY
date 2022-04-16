import '../styles/globals.css';
import Layout from '../components/Layout';
import {MoralisProvider} from "react-moralis";

function MyApp({ Component, pageProps }) {

  return <MoralisProvider 
          appId="mCUbGlwPmuitdPxm5K3mtjhoGL1ENmyMIgffO5U7" 
          serverUrl="https://p2r5bzcvt2aq.usemoralis.com:2053/server">
            <Layout> 
              <Component {...pageProps} />
            </Layout>
        </MoralisProvider>
}

export default MyApp
