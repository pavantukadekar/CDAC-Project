import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Signin from './Components/Signin'
function App() {
  return (
    <div className="App">
     <Routes>
      

     <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/signin" element={<Signin />}></Route>
     </Routes>
    </div>
  );
}

export default App;
