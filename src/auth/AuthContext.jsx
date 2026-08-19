import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { apiRequest, AUTH_KEY, homePathForRole, TOKEN_KEY } from './api'

export { homePathForRole }

export const demoCredentials = [
  { username: 'admin', password: 'admin123', roleLabel: 'Administrator' },
  { username: 'customer', password: 'customer123', roleLabel: 'Customer' },
]

const AuthContext = createContext(null)

function readStoredAuth() {
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function persistSession(user, token) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user))
  localStorage.setItem(TOKEN_KEY, token)
}

function clearSession() {
  localStorage.removeItem(AUTH_KEY)
  localStorage.removeItem(TOKEN_KEY)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredAuth())

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) return

    apiRequest('/api/auth/me')
      .then((data) => {
        setUser(data.user)
        localStorage.setItem(AUTH_KEY, JSON.stringify(data.user))
      })
      .catch((error) => {
        if (String(error.message).includes('Cannot reach the server')) return
        clearSession()
        setUser(null)
      })
  }, [])

  const login = async (username, password) => {
    try {
      const data = await apiRequest('/api/auth/login', {
        method: 'POST',
        body: { username, password },
      })
      persistSession(data.user, data.token)
      setUser(data.user)
      return { ok: true, user: data.user }
    } catch (error) {
      return { ok: false, error: error.message }
    }
  }

  const signup = async ({ name, username, email, password }) => {
    try {
      const data = await apiRequest('/api/auth/signup', {
        method: 'POST',
        body: { name, username, email, password },
      })
      persistSession(data.user, data.token)
      setUser(data.user)
      return { ok: true, user: data.user }
    } catch (error) {
      return { ok: false, error: error.message }
    }
  }

  const logout = () => {
    clearSession()
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      signup,
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
