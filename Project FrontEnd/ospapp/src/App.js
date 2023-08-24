import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Signin from './Components/Signin'
import Admin from './AdminPages/Admin'
import AddStudent from './AdminPages/AddStudent';
import AddFaculty from './AdminPages/AddFaculty'
import AdminViewStudent from './AdminPages/AdminViewStudent'
import AdminViewFaculty from './AdminPages/AdminViewFaculty';
import EditStudent from './AdminPages/EditStudent';
import EditFaculty from './AdminPages/EditFaculty';
function App() {
  return (
    <div className="App">
     <Routes>
      

     <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/signin" element={<Signin />}></Route>
      <Route exact path="/admin" element={<Admin/>}></Route>
      <Route exact path="/admin/addstudent" element={<AddStudent/>}></Route>
      <Route exact path="/admin/addfaculty" element={<AddFaculty/>}></Route>
      <Route exact path="/admin/viewstudent" element={<AdminViewStudent/>}></Route>
      <Route exact path="/admin/viewfaculty" element={<AdminViewFaculty/>}></Route>
      <Route exact path="/admin/editstudent/:id" element={<EditStudent/>}></Route>
      <Route exact path="/admin/editfaculty/:id" element={<EditFaculty/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
