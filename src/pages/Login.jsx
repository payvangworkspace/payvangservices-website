import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { demoCredentials, homePathForRole, useAuth } from '../auth/AuthContext'

export default function Login() {
  const { login, isAuthenticated, homePath } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (isAuthenticated) {
    return <Navigate to={homePath} replace />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const result = login(username, password)
    setSubmitting(false)

    if (result.ok) {
      navigate(homePathForRole(result.user.role), { replace: true })
      return
    }

    setError(result.error)
  }

  const fillDemo = (demo) => {
    setUsername(demo.username)
    setPassword(demo.password)
    setError('')
  }

  return (
    <div className="login-page d-flex align-items-center vh-100">
      <div className="login-form">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="login-social-icon">
              <h2>Login</h2>
              <p className="login-demo-hint">Try a demo account:</p>
              <div className="login-demo-buttons">
                {demoCredentials.map((demo) => (
                  <button
                    key={demo.username}
                    type="button"
                    className="login-demo-btn"
                    onClick={() => fillDemo(demo)}
                  >
                    {demo.roleLabel}
                    <small>
                      {demo.username} / {demo.password}
                    </small>
                  </button>
                ))}
              </div>
            </div>

            {error ? <div className="login-error">{error}</div> : null}

            <div className="input-group">
              <span className="login-form-icon">
                <i className="uil uil-user" />
              </span>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                tabIndex={1}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="input-group">
              <span className="login-form-icon">
                <i className="uil uil-lock" />
              </span>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                tabIndex={2}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <div className="input-group">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label form-check-box" htmlFor="rememberMe">
                  Keep me logged in
                </label>
              </div>
            </div>

            <div className="row justify-content-center mb-md-3">
              <div className="col-sm-6 mb-md-3 mb-sm-0">
                <button type="submit" className="btn theme-btn-1" disabled={submitting}>
                  {submitting ? 'Signing in…' : 'Log In'}
                </button>
              </div>
              <div className="col-sm-6 text-sm-end">
                <Link to="/recover">Forgot Password?</Link>
              </div>
            </div>

            <div className="login-footer">
              Don&apos;t have an account? <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
