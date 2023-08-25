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
import Faculty from './FacultyPages/Faculty';
import AddTimeTable from './FacultyPages/AddTimeTable';
import ViewTimeTable from './FacultyPages/ViewTimeTable';
import AddNoticeBoard from './FacultyPages/AddNoticeBoard';
import ViewNoticeBoard from './FacultyPages/ViewNoticeBoard';
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
      <Route exact path="/faculty" element={<Faculty/>}></Route>
      <Route exact path="/faculty/addtimetable/" element={<AddTimeTable/>}></Route>
      <Route exact path="/faculty/viewtimetable" element={<ViewTimeTable/>}></Route>
      <Route exact path="/faculty/addnoticeboard/" element={<AddNoticeBoard/>}></Route>
      <Route exact path="/faculty/viewnoticeboard" element={<ViewNoticeBoard/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
