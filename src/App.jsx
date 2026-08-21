import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './auth/ProtectedRoute'
import Home from './pages/Home'
import Utility from './pages/Utility'
import Education from './pages/Education'
import Parking from './pages/Parking'
import SaleServices from './pages/SaleServices'
import Travel from './pages/Travel'
import Manpower from './pages/Manpower'
import Communities from './pages/Communities'
import Healthcare from './pages/Healthcare'
import Contact from './pages/Contact'
import B2B from './pages/B2B'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Recover from './pages/Recover'
import Payment1 from './pages/Payment1'
import Payment2 from './pages/Payment2'
import PayNow from './pages/PayNow'
import PayNow2 from './pages/PayNow2'
import PayNow3 from './pages/PayNow3'
import Thanks from './pages/Thanks'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import Grievance from './pages/Grievance'
import Dashboard from './pages/Dashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import DashboardRedirect from './auth/DashboardRedirect'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/education" element={<Education />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/sale-services" element={<SaleServices />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/manpower" element={<Manpower />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/payment1" element={<Payment1 />} />
        <Route path="/payment2" element={<Payment2 />} />
        <Route path="/paynow" element={<PayNow />} />
        <Route path="/paynow2" element={<PayNow2 />} />
        <Route path="/paynow3" element={<PayNow3 />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/grievance-redressal" element={<Grievance />} />
      </Route>

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute role="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/dashboard" element={<DashboardRedirect />} />
    </Routes>
  )
}
