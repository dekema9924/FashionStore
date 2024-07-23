import Arrivals from "./components/Arrivals"
import Email from "./components/Email"
import Favourite from "./components/Favourite"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Mobile from "./components/Mobile"
import Payday from "./components/Payday"

function App() {

  return (
    <>
      <Header/>
      <LandingPage/>
      <Arrivals/>
      <Payday/>
      <Favourite/>
      <Mobile/>
      <Email/>
      <Footer/>
    </>
  )
}

export default App
