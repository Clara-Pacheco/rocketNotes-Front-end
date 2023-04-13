import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Home } from './pages/Home/Home'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { SignIn } from './pages/SignIn/SignIn'
import { SignUp } from './pages/SignUp/SignUp'
import { Profile } from './pages/Profile/Profile'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
       <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
