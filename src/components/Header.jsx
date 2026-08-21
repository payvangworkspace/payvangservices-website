import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { isAuthenticated, logout, homePath } = useAuth()
  const navigate = useNavigate()

  const close = () => setOpen(false)

  const handleLogout = () => {
    logout()
    close()
    navigate('/login')
  }

  return (
    <div className={`navbar-area${open ? ' mobile-open' : ''}`}>
      <div className="acavo-responsive-nav">
        <div className="container">
          <div className="acavo-responsive-menu position-relative">
            <div className="logo">
              <Link to="/" onClick={close}>
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <i className={open ? 'las la-times' : 'las la-bars'} />
            </button>
          </div>
        </div>
      </div>
      <div className="acavo-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/" onClick={close}>
              <img src="/images/logo.png" alt="PayVang Services" />
            </Link>
            <div className="collapse navbar-collapse mean-menu show">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" end className="nav-link" onClick={close}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/communities" className="nav-link" onClick={close}>
                    Communities
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/education" className="nav-link" onClick={close}>
                    Education
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/utility" className="nav-link" onClick={close}>
                    Essential Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/b2b" className="nav-link" onClick={close}>
                    B2B
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" onClick={close}>
                    Contact
                  </NavLink>
                </li>
                {isAuthenticated ? (
                  <>
                    <li className="nav-item nav-item-btn">
                      <NavLink to={homePath} className="nav-link nav-btn nav-btn-solid" onClick={close}>
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item nav-item-btn">
                      <button type="button" className="nav-link nav-btn nav-btn-outline" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item nav-item-btn">
                      <NavLink to="/login" className="nav-link nav-btn nav-btn-outline" onClick={close}>
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item nav-item-btn">
                      <NavLink to="/signup" className="nav-link nav-btn nav-btn-solid" onClick={close}>
                        Sign Up
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
