import { AppProps } from "next/app"
import { StoreProvider } from "easy-peasy"

import withStore from "../hocs/withStore"

import "../styles/globals.css"

export interface IMyAppProps extends AppProps {
  reduxStore: any
}

function MyApp({ Component, pageProps, reduxStore }: IMyAppProps) {
  return (
    <StoreProvider store={reduxStore}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default withStore(MyApp)
