import { createContext, useContext, useMemo, useState } from 'react'

const AUTH_KEY = 'payvang_auth'

const DEMO_USERS = [
  {
    username: 'admin',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    roleLabel: 'Administrator',
  },
  {
    username: 'customer',
    password: 'customer123',
    name: 'Rahul Sharma',
    role: 'customer',
    roleLabel: 'Customer',
  },
]

const HOME_PATH_BY_ROLE = {
  admin: '/admin/dashboard',
  customer: '/customer/dashboard',
}

export function homePathForRole(role) {
  return HOME_PATH_BY_ROLE[role] || '/'
}

export const demoCredentials = DEMO_USERS.map(({ username, password, roleLabel }) => ({
  username,
  password,
  roleLabel,
}))

const AuthContext = createContext(null)

function readStoredAuth() {
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredAuth())

  const login = (username, password) => {
    const match = DEMO_USERS.find(
      (candidate) =>
        candidate.username === username.trim().toLowerCase() && candidate.password === password,
    )

    if (!match) {
      return { ok: false, error: 'Invalid username or password' }
    }

    const session = {
      username: match.username,
      name: match.name,
      role: match.role,
      roleLabel: match.roleLabel,
    }
    localStorage.setItem(AUTH_KEY, JSON.stringify(session))
    setUser(session)
    return { ok: true, user: session }
  }

  const logout = () => {
    localStorage.removeItem(AUTH_KEY)
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
      homePath: homePathForRole(user?.role),
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}
