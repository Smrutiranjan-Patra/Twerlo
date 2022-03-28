import { Routes, Route } from "react-router-dom";
import Admindashboard from "../components/Admindashboard";
import Userdashboard from "../components/Userdashboard";
import Adminlogin from "../components/Adminlogin";
import Userlogin from "../components/Userlogin";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Userlogin />} />
        <Route path="/dashboard" element={<Userdashboard />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/admin." element={<Admindashboard />} />
      </Routes>
    </div>
  );
}

export default Router;
