import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Profile from './components/User/Profile';
import ProfileSetting from './components/layouts/ProfileSetting';
import Dashboard from './components/Admin/Dashboard';
import Courses from './components/Courses/Courses';
import Request from './components/layouts/Request';
import Contact from './components/layouts/Contact';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ChangePassword from './components/Auth/ChangePassword';
import Subscribe from './components/Payments/Subscribe';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import NotFound from './components/layouts/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import CourseDetails from './components/Courses/CourseDetails';
import { useEffect } from 'react';
import Editprofile from './components/User/Editprofile';
import Create from './components/Admin/Create';
import AllCourses from './components/Admin/AllCourses';
import AllUsers from './components/Admin/AllUsers';


function App() {
  useEffect(() => {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    })
  }, [])


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/course/:id"} element={<CourseDetails />} />
          <Route path={"/request"} element={<Request />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/request"} element={<Request />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />


          <Route path={"/subscribe"} element={<Subscribe />} />
          <Route path={"/paymentsuccess"} element={<PaymentSuccess />} />
          <Route path={"/paymentfail"} element={<PaymentFail />} />


          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/editprofile"} element={<Editprofile />} />
          <Route path={"/settings"} element={<ProfileSetting />} />
          <Route path={"/changepassword"} element={<ChangePassword />} />

          {/* Admin Routes */}
          <Route path={"/admin/dashboard"} element={<Dashboard />} />
          <Route path={"/admin/createcourse"} element={<Create />} />
          <Route path={"/admin/courses"} element={<AllCourses />} />
          <Route path={"/admin/users"} element={<AllUsers />} />



          <Route path={"*"} element={< NotFound />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
