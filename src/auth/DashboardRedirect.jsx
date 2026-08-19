import { Navigate } from 'react-router-dom'
import { homePathForRole, useAuth } from './AuthContext'

/** Sends /dashboard to the right portal for whoever is signed in. */
export default function DashboardRedirect() {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Navigate to={homePathForRole(user.role)} replace />
}
