import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import OurCars from "./views/OurCars";
import CarDetails from "./views/CarDetails";
import { Checkout } from "./views/Checkout";
import Login from "./views/user-portal/auth/Login";
import { Signup } from "./views/user-portal/auth/Signup";
import { Bookings } from "./views/user-portal/Bookings";
import { SettingsPage } from "./views/user-portal/SettingsPage";
import { AdminBookings } from "./views/admin-portal/AdminBookings";
import { AdminCars } from "./views/admin-portal/AdminCars";
import { AdminDrivers } from "./views/admin-portal/AdminDrivers";
import AdminLogin from "./views/admin-portal/auth/AdminLogin";
import EnterPasswordRecoveryCode from "./views/user-portal/auth/EnterPasswordRecoveryCode";
import RecoverPassword from "./views/user-portal/auth/RecoverPassword";
import ChangePassword from "./views/user-portal/auth/ChangePassword";
import { AdminDashboard } from "./views/admin-portal/AdminDashboard";
import { UserDashboard } from "./views/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/our-cars">
          <Route path="/our-cars" element={<OurCars />} />
          <Route path="/our-cars/:carId">
            <Route path="/our-cars/:carId" element={<CarDetails />} />
          </Route>
        </Route>
        <Route path="/contact-us" element={<Contact />} />

        {/** Users  Section */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route
          path="/enter-recovery-code"
          element={<EnterPasswordRecoveryCode />}
        />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route path="/dashboard" element={<Bookings />} />
          <Route path="/dashboard/bookings" element={<Bookings />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
        </Route>

        {/** Admin Section */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="/admin-dashboard" element={<AdminBookings />} />
          <Route
            path="/admin-dashboard/admin-bookings"
            element={<AdminBookings />}
          />
          <Route path="/admin-dashboard/admin-cars" element={<AdminCars />} />
          <Route
            path="/admin-dashboard/admin-drivers"
            element={<AdminDrivers />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
