import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header  from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import VanList from "./pages/VanList.jsx"
import IndividualVan from "./pages/IndividualVan.jsx"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/VanList" element = {<VanList/>}/>
        <Route path = "/VanList/:id" element = {<IndividualVan/>}/>
      </Routes>
      <Footer />
    </>
    
  )
}

export default App
