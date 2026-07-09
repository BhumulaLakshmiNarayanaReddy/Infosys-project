import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import Loader from '../common/Loader/index.jsx';

function ProtectedRoute({ roles = [] }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader text="Checking session..." />;

  if (!user) return <Navigate to="/login" replace />;

  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
