import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { homePathForRole, useAuth } from '../auth/AuthContext'

export default function Signup() {
  const { signup, isAuthenticated, homePath } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (isAuthenticated) {
    return <Navigate to={homePath} replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!agreed) {
      setError('Please agree to the Terms & Conditions')
      return
    }

    setSubmitting(true)
    const result = await signup({ name, username, email, password })
    setSubmitting(false)

    if (result.ok) {
      navigate(homePathForRole(result.user.role), { replace: true })
      return
    }

    setError(result.error)
  }

  return (
    <div className="login-page d-flex align-items-center vh-100">
      <div className="login-form">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="login-social-icon">
              <h2>Signup</h2>
              <p className="login-demo-hint">Create a customer account, then you will land on the dashboard.</p>
            </div>

            {error ? <div className="login-error">{error}</div> : null}

            <div className="input-group">
              <span className="login-form-icon">
                <i className="uil uil-user" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
            </div>

            <div className="input-group">
              <span className="login-form-icon">
                <i className="uil uil-user" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="input-group">
              <span className="login-form-icon">
                <i className="uil uil-envelope" />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                minLength={6}
                required
              />
            </div>

            <div className="input-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeTerms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label className="form-check-label form-check-box" htmlFor="agreeTerms">
                  I agree to the <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </label>
              </div>
            </div>

            <div className="row justify-content-center mb-md-3">
              <div className="col-sm-6 mb-md-3 mb-sm-0">
                <button type="submit" className="btn theme-btn-1" disabled={submitting}>
                  {submitting ? 'Creating account…' : 'Sign Up'}
                </button>
              </div>
            </div>

            <div className="login-footer">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
