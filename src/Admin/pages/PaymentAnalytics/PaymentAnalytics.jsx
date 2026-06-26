import { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import "./PaymentAnalytics.css";

const stats = [
  {
    icon: "💵",
    value: "Ksh 26,700.00",
    title: "Total Revenue",
    subtitle: "388 payments total",
    color: "#2563eb",
  },
  {
    icon: "✅",
    value: "143",
    title: "Confirmed Payments",
    subtitle: "Ksh 186.71 average",
    color: "#16a34a",
  },
  {
    icon: "📅",
    value: "0",
    title: "Today's Payments",
    subtitle: "Ksh 0 revenue",
    color: "#f59e0b",
  },
  {
    icon: "🗓️",
    value: "0",
    title: "Weekly Payments",
    subtitle: "Ksh 0 revenue",
    color: "#06b6d4",
  },
];

const payments = [
  {
    index: "23529135248/2025",
    email: "joknyamachgatwech@gmail.com",
    level: "Degree",
    amount: "Ksh 200",
    status: "Failed",
    receipt: "N/A",
    ref: "N/A",
    date: "2026-06-17 08:02",
  },
  {
    index: "12314210028/2025",
    email: "stevaniojacky@gmail.com",
    level: "Diploma",
    amount: "Ksh 200",
    status: "Failed",
    receipt: "N/A",
    ref: "N/A",
    date: "2026-06-04 08:52",
  },
  {
    index: "02100005334/2025",
    email: "ammohkahkah@gmail.com",
    level: "KMTC",
    amount: "Ksh 200",
    status: "Failed",
    receipt: "N/A",
    ref: "KMTC-6381",
    date: "2026-06-03 03:52",
  },
];

function PaymentAnalytics() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">
        <Header onMenuClick={() => setIsOpen(true)} />

        <main className="analytics-container">

          <section className="analytics-header">
            <h1>Payment Management Dashboard</h1>
            <p>
              Monitor transactions, payment trends, failed payments and
              revenue statistics.
            </p>
          </section>

          <section className="stats-grid">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="stat-card"
              >
                <div
                  className="stat-icon"
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </div>

                <h2
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </h2>

                <h4>{stat.title}</h4>

                <p>{stat.subtitle}</p>
              </div>
            ))}
          </section>

          <section className="quick-actions">

            <div>
              <h2>Quick Actions</h2>
              <p>
                Manage payment records and perform bulk operations.
              </p>
            </div>

            <div className="action-buttons">

              <button className="delete-btn">
                🗑 Delete Failed Payments
              </button>

              <button className="export-btn">
                📄 Export to CSV
              </button>

              <button className="refresh-btn">
                🔄 Refresh
              </button>

            </div>

          </section>

          <section className="filter-card">

            <h2>Filter Payments</h2>

            <div className="filters">

              <div>
                <label>Start Date</label>

                <input
                  type="date"
                />
              </div>

              <div>
                <label>End Date</label>

                <input
                  type="date"
                />
              </div>

              <div>
                <label>Payment Status</label>

                <select>
                  <option>All Payments</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Failed</option>
                </select>
              </div>

              <div className="filter-buttons">

                <button className="apply-btn">
                  🔎 Apply Filters
                </button>

                <button className="clear-btn">
                  ✖ Clear Filters
                </button>

              </div>

            </div>

          </section>
                    <section className="payments-table-card">

            <div className="table-header">

              <h2>
                Payment Records ({payments.length} total)
              </h2>

              <div className="table-badges">

                <span className="confirmed-badge">
                  143 confirmed
                </span>

                <span className="failed-badge">
                  245 failed
                </span>

              </div>

            </div>

            <div className="table-wrapper">

              <table>

                <thead>

                  <tr>
                    <th>Index Number</th>
                    <th>Email</th>
                    <th>Level</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>M-Pesa Receipt</th>
                    <th>Transaction Ref</th>
                    <th>Date</th>
                  </tr>

                </thead>

                <tbody>

                  {payments.map((payment, index) => (

                    <tr key={index}>

                      <td>{payment.index}</td>

                      <td>{payment.email}</td>

                      <td>

                        <span
                          className={`level ${payment.level.toLowerCase()}`}
                        >
                          {payment.level}
                        </span>

                      </td>

                      <td>
                        <strong>{payment.amount}</strong>
                      </td>

                      <td>

                        <span
                          className={
                            payment.status === "Confirmed"
                              ? "status confirmed"
                              : payment.status === "Pending"
                              ? "status pending"
                              : "status failed"
                          }
                        >
                          {payment.status}
                        </span>

                      </td>

                      <td>{payment.receipt}</td>

                      <td>{payment.ref}</td>

                      <td>{payment.date}</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </main>

        <Footer />

      </div>

    </div>
  );
}

export default PaymentAnalytics;