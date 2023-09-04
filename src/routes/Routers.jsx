import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import FreelancerRegister from "../pages/Register/freelancerRegister";
import ClientRegister from "../pages/Register/clientRegister";
import Dashboard from "../pages/Dashboard/dashboard";
import Register from "../pages/Register/Register";
import Reset from "../pages/Reset";
import Password from "../pages/Password";
import PostJob from "../pages/Dashboard/Client/postProject";
import BookConsultation from "../pages/Dashboard/Client/bookConsultation";
import Call from "../pages/Dashboard/Client/call";
import Details from "../pages/Dashboard/Client/details";
import OnboardingSteps from "../pages/Dashboard/Freelancer/onboarding";

function Routers() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/client" element={<ClientRegister />} />
      <Route path="/register/freelancer" element={<FreelancerRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/post" element={<PostJob />} />
      <Route path="/dashboard/consultation" element={<BookConsultation />} />
      <Route path="/dashboard/consultation/details" element={<Details />} />
      <Route path="/dashboard/consultation/call" element={<Call />} />
      <Route
        path="/dashboard/freelancer/onboarding"
        element={<OnboardingSteps />}
      />
      <Route path="/reset" element={<Reset />} />
      <Route path="/password/:token" element={<Password />} />
    </Routes>
  );
}

export default Routers;
