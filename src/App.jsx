import { Router } from "./routes/Router"
import { GlobalStyle } from "../styles/global"

import {register} from 'swiper/element/bundle'

register()
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/controller'


function App() {
  

  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  )
}

export default App
