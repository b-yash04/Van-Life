import { Routes, Route} from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import VanList from "./pages/VanList.jsx"
import IndividualVan from "./pages/IndividualVan.jsx"
import Dashboard from "./Host/Dashboard.jsx"
function App() {
  return (
    <>
     
      <Routes>
        <Route element = {<Layout/>}>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/VanList" element = {<VanList/>}/>
          <Route path = "/VanList/:id" element = {<IndividualVan/>}/>
          <Route path = "/host" element = {<Dashboard/>}/>
        </Route>
      </Routes>
  
    </>
    
  )
}

export default App
