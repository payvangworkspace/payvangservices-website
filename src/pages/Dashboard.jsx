import { Link } from 'react-router-dom'
import DashboardShell from '../components/DashboardShell'
import { useAuth } from '../auth/AuthContext'

const navItems = [
  { href: '#overview', label: 'Overview', icon: 'ri-dashboard-line' },
  { href: '#payments', label: 'Payments', icon: 'ri-exchange-funds-line' },
  { href: '#merchants', label: 'Merchants', icon: 'ri-store-2-line' },
  { href: '#reports', label: 'Reports', icon: 'ri-bar-chart-box-line' },
]

const stats = [
  { label: 'Today’s Collections', value: '₹1,24,850', hint: '+12% vs yesterday', icon: 'ri-money-rupee-circle-line' },
  { label: 'Successful Payments', value: '348', hint: 'Last 24 hours', icon: 'ri-checkbox-circle-line' },
  { label: 'Pending Settlements', value: '₹42,600', hint: '3 batches open', icon: 'ri-time-line' },
  { label: 'Active Merchants', value: '86', hint: 'Across all verticals', icon: 'ri-store-2-line' },
]

const recentPayments = [
  { id: 'PVG-88421', merchant: 'Green Valley School', amount: '₹12,500', status: 'Success', time: '10:24 AM' },
  { id: 'PVG-88418', merchant: 'City Parking Hub', amount: '₹320', status: 'Success', time: '10:11 AM' },
  { id: 'PVG-88412', merchant: 'Aqua Utility Board', amount: '₹2,180', status: 'Pending', time: '09:58 AM' },
  { id: 'PVG-88405', merchant: 'CarePlus Clinic', amount: '₹4,900', status: 'Success', time: '09:41 AM' },
  { id: 'PVG-88397', merchant: 'Metro Community', amount: '₹8,750', status: 'Failed', time: '09:22 AM' },
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <DashboardShell
      eyebrow="Admin Panel"
      title={`Welcome back, ${user?.name || 'Admin'}`}
      navItems={navItems}
    >
      <section className="portal-stats" id="overview">
        {stats.map((stat) => (
          <article key={stat.label} className="portal-stat-card">
            <div className="portal-stat-icon">
              <i className={stat.icon} />
            </div>
            <div>
              <p>{stat.label}</p>
              <h2>{stat.value}</h2>
              <span>{stat.hint}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="portal-panel" id="payments">
        <div className="portal-panel-head">
          <h3>Recent Payments</h3>
          <span>Dummy data for demo</span>
        </div>
        <div className="portal-table-wrap">
          <table className="portal-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Merchant</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.merchant}</td>
                  <td>{row.amount}</td>
                  <td>
                    <span className={`portal-status status-${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="portal-panel" id="merchants">
        <div className="portal-panel-head">
          <h3>Quick Actions</h3>
        </div>
        <div className="portal-actions" id="reports">
          <Link to="/payment1" className="portal-action-btn">
            Create Payment Link
          </Link>
          <Link to="/b2b" className="portal-action-btn outline">
            View B2B Solutions
          </Link>
          <Link to="/" className="portal-action-btn outline">
            Back to Website
          </Link>
        </div>
      </section>
    </DashboardShell>
  )
}
