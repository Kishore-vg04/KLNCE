import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Component/Footer";
import {Routes,Route,BrowserRouter} from  'react-router-dom';
const App = () => {
  return (
    <div className='bg-gray-200'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App