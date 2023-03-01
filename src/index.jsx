
import { Header } from './Components/ProductPage/Product'
import { MyContext } from './Context/MainContext/MainContext'
import './GlobalStyles/GlobalStyles.css'

export function Home() {
  return (
    <div className="App">
      <MyContext.Provider>
        <Header />
      </MyContext.Provider>
      
    </div>
  )
}

