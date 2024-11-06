import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'; // Import Routes
import './App.css';
import ForgetPassword from './Pages/Forget Password/ForgetPassword.jsx';
import Login from './Pages/Login/Login.jsx';
import ResetPassword from './Pages/ResetPassword/ResetPassword.jsx';
import SignUp from './Pages/Sign up/signUp.jsx';
import ChangeLog from './Pages/ChangeLog/ChangeLog.jsx';
import ChangeLogNew from './Pages/ChangeLog/ChangeLogNew.jsx';
import ChangeLogEmpty from './Pages/ChangeLog/ChangeLogEmpty.jsx';
import ProfileGeneral from './Pages/Setting/ProfileGeneral.jsx';
import GeneralSetting from './Pages/GeneralSetting/GeneralSetting.jsx';
import ChangeLogList from './Pages/ChangeLogList/ChangeLogList.jsx';
import { useState } from 'react';
// import Formsik from "./component/Formsik/signUpForms.jsx"



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/change-log" element={<ChangeLog isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/change-log/new" element={<ChangeLogNew />} />
        <Route path="/change-log/empty" element={<ChangeLogEmpty />} />
        <Route path="/change-log/setting/profile-setting" element={<ProfileGeneral />} />
        <Route path="/change-log/setting/account-setting" element={<GeneralSetting />} />
        <Route path="/change-log/changeLogList" element={<ChangeLogList/>} />
        {/* <Route  path='/signUpForm' element={<Formsik/>}/> */}
        {/* <Route path='/change-log/setting/general/create' element={<ProfileRightCreate/>}/> */}
       
        <Route path="/" element={<Home />} /> {/* Assuming you have a Home component */}
        
      </Routes>
    </BrowserRouter>
  );
}

// Define a placeholder Home component for the home route
function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

export default App;
