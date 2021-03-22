import { AppProps } from "next/app"
import { StoreProvider } from "easy-peasy"
import { ThemeProvider } from "styled-components"

import withStore from "@hocs/withStore"
import themes from "@styles/themes"

import "./_app.css"

export interface IMyAppProps extends AppProps {
  reduxStore: any
}

function MyApp({ Component, pageProps, reduxStore }: IMyAppProps) {
  return (
    <StoreProvider store={reduxStore}>
      <ThemeProvider theme={themes[0]}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default withStore(MyApp)
