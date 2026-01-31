import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Cooperatives from './pages/Cooperatives';
import Products from './pages/Products';
import CooperativeDetails from './pages/CooperativeDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import RegisterCoop from './pages/RegisterCoop';
import AdminDashboard from './pages/admin/AdminDashboard';
import CoopDashboard from './pages/coop/CoopDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path="cooperatives" element={<Cooperatives />} />
        <Route path="cooperatives/:id" element={<CooperativeDetails />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />

        {/* Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register-coop" element={<RegisterCoop />} />

        {/* Dashboards (In real app, these would be protected and layout might differ) */}
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="dashboard" element={<CoopDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
