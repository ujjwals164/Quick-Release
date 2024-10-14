import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import ForgetPassword from './Pages/Forget Password/ForgetPassword.jsx';
import Login from './Pages/Login/Login.jsx';
import ResetPassword from './Pages/ResetPassword/ResetPassword.jsx';
import SignUp from './Pages/Sign up/signUp.jsx';
import ChangeLog from './Pages/ChangeLog/ChangeLog.jsx';
import ChangeLogNew from './Pages/ChangeLog/ChangeLogNew.jsx';
import ChangeLogEmpty from './Pages/ChangeLog/ChangeLogEmpty.jsx';
import ProfileGeneral from './Pages/Setting/ProfileGeneral.jsx';
import ProfileLeft from './component/ProfileCreation/ProfileRightCreate.jsx';
import ProfileRightCreate from './component/ProfileCreation/ProfileRightCreate.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/change-log" element={<ChangeLog />} />
        <Route path="/change-log/new" element={<ChangeLogNew />} />
        <Route path="/change-log/empty" element={<ChangeLogEmpty />} />
        <Route path="/change-log/setting/general/" element={<ProfileGeneral />} />
        <Route path="//ProfileRightCreate" element={<ProfileRightCreate />} />
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
