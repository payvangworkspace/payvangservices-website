import { Link } from 'react-router-dom'
import DashboardShell from '../components/DashboardShell'
import { useAuth } from '../auth/AuthContext'

const navItems = [
  { href: '#overview', label: 'Overview', icon: 'ri-home-4-line' },
  { href: '#bills', label: 'My Bills', icon: 'ri-bill-line' },
  { href: '#history', label: 'Payment History', icon: 'ri-history-line' },
  { href: '#quick-pay', label: 'Quick Pay', icon: 'ri-flashlight-line' },
]

const stats = [
  { label: 'Wallet Balance', value: '₹2,450', hint: 'Available to spend', icon: 'ri-wallet-3-line' },
  { label: 'Due This Month', value: '₹6,320', hint: '3 bills pending', icon: 'ri-calendar-event-line' },
  { label: 'Paid This Year', value: '₹48,900', hint: 'Across 34 payments', icon: 'ri-check-double-line' },
  { label: 'Reward Points', value: '1,180', hint: 'Redeem on any bill', icon: 'ri-gift-line' },
]

const upcomingBills = [
  { id: 'bill-electricity', name: 'Electricity Bill', provider: 'State Power Board', amount: '₹1,840', due: 'Due in 3 days', urgent: true, icon: 'ri-lightbulb-flash-line' },
  { id: 'bill-school', name: 'School Fee', provider: 'Green Valley School', amount: '₹3,500', due: 'Due in 9 days', urgent: false, icon: 'ri-graduation-cap-line' },
  { id: 'bill-broadband', name: 'Broadband', provider: 'FiberNet Plus', amount: '₹980', due: 'Due in 12 days', urgent: false, icon: 'ri-wifi-line' },
]

const paymentHistory = [
  { id: 'PVG-77120', service: 'Water Bill', amount: '₹640', status: 'Success', date: '12 Aug 2026' },
  { id: 'PVG-76988', service: 'Parking Pass', amount: '₹300', status: 'Success', date: '08 Aug 2026' },
  { id: 'PVG-76841', service: 'Electricity Bill', amount: '₹1,760', status: 'Success', date: '02 Aug 2026' },
  { id: 'PVG-76702', service: 'Clinic Payment', amount: '₹1,200', status: 'Pending', date: '29 Jul 2026' },
  { id: 'PVG-76510', service: 'Broadband', amount: '₹980', status: 'Failed', date: '24 Jul 2026' },
]

const quickPayServices = [
  { to: '/sale-services', label: 'Sale Services', icon: 'ri-shopping-bag-3-line' },
  { to: '/travel', label: 'Travel', icon: 'ri-plane-line' },
  { to: '/education', label: 'School', icon: 'ri-graduation-cap-line' },
  { to: '/manpower', label: 'Manpower', icon: 'ri-team-line' },
]

export default function CustomerDashboard() {
  const { user } = useAuth()

  return (
    <DashboardShell
      eyebrow="Customer Portal"
      title={`Hi ${user?.name?.split(' ')[0] || 'there'}, here’s your account`}
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

      <section className="portal-panel" id="bills">
        <div className="portal-panel-head">
          <h3>Upcoming Bills</h3>
          <span>Dummy data for demo</span>
        </div>
        <ul className="bill-list">
          {upcomingBills.map((bill) => (
            <li key={bill.id} className="bill-item">
              <span className="bill-icon">
                <i className={bill.icon} />
              </span>
              <div className="bill-info">
                <strong>{bill.name}</strong>
                <small>{bill.provider}</small>
              </div>
              <div className="bill-meta">
                <strong>{bill.amount}</strong>
                <small className={bill.urgent ? 'is-urgent' : ''}>{bill.due}</small>
              </div>
              <Link to="/paynow" className="portal-action-btn compact">
                Pay Now
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="portal-panel" id="quick-pay">
        <div className="portal-panel-head">
          <h3>Quick Pay</h3>
        </div>
        <div className="quick-pay-grid">
          {quickPayServices.map((service) => (
            <Link key={service.to} to={service.to} className="quick-pay-card">
              <i className={service.icon} />
              <span>{service.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="portal-panel" id="history">
        <div className="portal-panel-head">
          <h3>Payment History</h3>
          <span>Last 5 transactions</span>
        </div>
        <div className="portal-table-wrap">
          <table className="portal-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.service}</td>
                  <td>{row.amount}</td>
                  <td>
                    <span className={`portal-status status-${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="portal-panel">
        <div className="portal-panel-head">
          <h3>Need Something Else?</h3>
        </div>
        <div className="portal-actions">
          <Link to="/contact" className="portal-action-btn">
            Contact Support
          </Link>
          <Link to="/grievance-redressal" className="portal-action-btn outline">
            Raise a Complaint
          </Link>
          <Link to="/" className="portal-action-btn outline">
            Back to Website
          </Link>
        </div>
      </section>
    </DashboardShell>
  )
}
