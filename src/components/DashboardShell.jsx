import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export default function DashboardShell({ eyebrow, title, navItems, children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="portal">
      <aside className="portal-sidebar">
        <Link to="/" className="portal-brand">
          <img src="/images/logo.png" alt="PayVang" />
        </Link>

        <nav className="portal-nav">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              className={`portal-nav-item${index === 0 ? ' active' : ''}`}
              href={item.href}
            >
              <i className={item.icon} /> {item.label}
            </a>
          ))}
        </nav>

        <button type="button" className="portal-logout" onClick={handleLogout}>
          <i className="ri-logout-box-r-line" /> Logout
        </button>
      </aside>

      <div className="portal-main">
        <header className="portal-topbar">
          <div>
            <p className="portal-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <div className="portal-user-chip">
            <span className="portal-avatar">{(user?.name || 'U').charAt(0)}</span>
            <div>
              <strong>{user?.name}</strong>
              <small>{user?.roleLabel}</small>
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  )
}
