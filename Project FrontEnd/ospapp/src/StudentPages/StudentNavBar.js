
import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function StudentNavBar() {
 
  const navigate = useNavigate()
  const handleLogout = function () {
    // Clear session storage (or perform your logout logic)
    sessionStorage.clear();
  
    // Broadcast a message to other tabs/windows
    const logoutChannel = new BroadcastChannel('logout-channel');
    logoutChannel.postMessage({ type: 'logout' });
  
    // Navigate to the sign-in page
    navigate('/signin');
  
    // Display a sign-out success message
    alert("Signed Out Successfully !!!");
    toast.info('Signed Out Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
    // Close the broadcast channel
    logoutChannel.close();
  }
  
  // Listen for messages from other tabs/windows
  const logoutChannel = new BroadcastChannel('logout-channel');
  logoutChannel.addEventListener('message', (event) => {
    if (event.data.type === 'logout') {
      // Perform logout logic here (e.g., redirect to the sign-in page)
      navigate('/signin');
    }
  });
  
  return (
    <div className='navbar bg-dark px-5' >
      <div className='flex-grow'><img className='img' src="/image/images_low.png"></img> </div>
      <a href="#" style={{ textDecoration: 'none' }}><span className='fs-3 text-white fw-semibold' style={{ fontFamily: 'cursive' }} >E-Vidyalaya</span></a>
      <NavLink to="/student" style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Dashboard</span></NavLink>
      {/* <NavLink to="/student/timetable" style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Timetable </span></NavLink>
      <NavLink to="/student/noticeboard" style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Noticeboard </span></NavLink>
      <NavLink to="/student/faculty" style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Faculty </span></NavLink>
      <NavLink to="/student/assignment" style={{ textDecoration: 'none' }}><span className='fs-5 text-white fw-semibold'>Assignment</span></NavLink> */}
      <div className='badge '><span><h3 className='text-white'><i class="bi bi-person-circle"></i> {sessionStorage.getItem("userName")}</h3></span></div>
      <button className='btn btn-primary' onClick={handleLogout}><span className='fs-6'><i class="bi bi-box-arrow-right"></i>Logout</span></button>
    </div>
  )
}

export default StudentNavBar;

