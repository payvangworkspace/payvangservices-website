import { Navigate, useLocation } from 'react-router-dom'
import { homePathForRole, useAuth } from './AuthContext'

export default function ProtectedRoute({ role, children }) {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  if (role && user.role !== role) {
    return <Navigate to={homePathForRole(user.role)} replace />
  }

  return children
}
