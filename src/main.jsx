import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./zustand/app"
// import App1 from './dashboard/App1.jsx'
import {BrowserRouter} from "react-router-dom"
// import All from './index.jsx'
// import { ThemeProvider } from '@emotion/react'

import {theme} from "./theme.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(
      <React.StrictMode>
          {/* <ThemeProvider theme={theme}> */}
          <BrowserRouter>
              <App/>
          </BrowserRouter>

          {/* </ThemeProvider>  */}
      </React.StrictMode>
  );
