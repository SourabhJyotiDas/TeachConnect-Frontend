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
import Lectures from './components/Admin/Lectures.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadUser } from './redux/actions/user';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';


function App() {
  const dispatch = useDispatch()
  const { user, isAuthenticated, message, error } = useSelector((state) => state.user);

  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  })

  const isAdmin = user && user.role === "admin"
  const isSubscription = user && user.subscription && user.subscription.status === "active"

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      })
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      })
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])



  return (
    <>
      <Router>
        <Navbar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/course/:id"} element={<CourseDetails />} />
          <Route path={"/request"} element={<Request />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/request"} element={<Request />} />
          <Route path={"/register"} element={!isAuthenticated ? <Register /> : <Profile />} />
          <Route path={"/login"} element={!isAuthenticated ? <Login /> : <Profile />} />
          <Route path={"/forgotpassword"} element={!isAuthenticated ? <ForgotPassword /> : <Profile />} />
          <Route path={"/resetpassword/:token"} element={!isAuthenticated ? <ResetPassword /> : <Profile />} />


          <Route path={"/subscribe"} element={isAuthenticated ? <Subscribe /> : <Login />} />
          <Route path={"/paymentsuccess"} element={isAuthenticated ? <PaymentSuccess /> : <Login />} />
          <Route path={"/paymentfail"} element={isAuthenticated ? <PaymentFail /> : <Login />} />


          <Route path={"/profile"} element={isAuthenticated ? <Profile /> : <Login />} />
          <Route path={"/editprofile"} element={isAuthenticated ? <Editprofile /> : <Login />} />
          <Route path={"/settings"} element={isAuthenticated ? <ProfileSetting /> : < Login />} />
          <Route path={"/changepassword"} element={isAuthenticated ? <ChangePassword /> : < Login />} />

          {/* Admin Routes */}
          <Route path={"/admin/dashboard"} element={isAdmin ? <Dashboard /> : <Profile />} />
          <Route path={"/admin/createcourse"} element={isAdmin ? <Create /> : <Profile />} />
          <Route path={"/admin/courses"} element={isAdmin ? <AllCourses /> : <Profile />} />
          <Route path={"/admin/users"} element={isAdmin ? <AllUsers /> : <Profile />} />
          <Route path={"/admin/lecture/:id"} element={isAdmin ? <Lectures /> : <Profile />} />



          <Route path={"*"} element={< NotFound />} />

        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
