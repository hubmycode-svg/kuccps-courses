import { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import "./Payment.css";

function Payments() {
  // Sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Filters
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Payments
  const [payments] = useState([
    {
      id: 1,
      email: "othienoi95@gmail.com",
      amount: 200,
      status: "confirmed",
      category: "Degree",
      date: "2026/06/28",
    },
    {
      id: 2,
      email: "john@gmail.com",
      amount: 150,
      status: "pending",
      category: "Diploma",
      date: "2026/06/27",
    },
    {
      id: 3,
      email: "mary@gmail.com",
      amount: 300,
      status: "confirmed",
      category: "Degree",
      date: "2026/06/26",
    },
    {
      id: 4,
      email: "peter@gmail.com",
      amount: 250,
      status: "failed",
      category: "Certificate",
      date: "2026/06/25",
    },
    {
      id: 5,
      email: "jane@gmail.com",
      amount: 180,
      status: "pending",
      category: "Degree",
      date: "2026/06/24",
    },
    {
      id: 6,
      email: "alex@gmail.com",
      amount: 400,
      status: "confirmed",
      category: "Masters",
      date: "2026/06/23",
    },
    {
      id: 7,
      email: "faith@gmail.com",
      amount: 220,
      status: "failed",
      category: "Diploma",
      date: "2026/06/22",
    },
    {
      id: 8,
      email: "dan@gmail.com",
      amount: 175,
      status: "confirmed",
      category: "Certificate",
      date: "2026/06/21",
    },
    {
      id: 9,
      email: "grace@gmail.com",
      amount: 320,
      status: "pending",
      category: "Degree",
      date: "2026/06/20",
    },
    {
      id: 10,
      email: "kevin@gmail.com",
      amount: 275,
      status: "confirmed",
      category: "Diploma",
      date: "2026/06/19",
    },
  ]);

  // Derived Data
  const filteredPayments = payments
    .filter(
      (payment) =>
        filter === "all" || payment.status === filter
    )
    .filter((payment) =>
      payment.email
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  // Statistics
  const total = payments.length;

  const confirmed = payments.filter(
    (payment) => payment.status === "confirmed"
  ).length;

  const pending = payments.filter(
    (payment) => payment.status === "pending"
  ).length;

  const failed = payments.filter(
    (payment) => payment.status === "failed"
  ).length;

  return (
    <div className="dashboard-page">
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">
        {/* Sticky Header */}
        <div className="payments-header">
          <Header
            onMenuClick={() => setIsOpen(true)}
          />
        </div>

        <main className="payments-container">
          {/* Page Header */}

          <section className="page-heading">
            <div>
              <h1>Payment Management</h1>

              <p>
                View, search and manage all student
                payment transactions.
              </p>
            </div>

            <button className="export-btn">
              Export Report
            </button>
          </section>

          {/* Statistics */}

          <section className="stats-grid">
            <div className="stat-card total">
              <span>Total Payments</span>

              <h2>{total}</h2>
            </div>

            <div className="stat-card success">
              <span>Confirmed</span>

              <h2>{confirmed}</h2>
            </div>

            <div className="stat-card warning">
              <span>Pending</span>

              <h2>{pending}</h2>
            </div>

            <div className="stat-card danger">
              <span>Failed</span>

              <h2>{failed}</h2>
            </div>
          </section>

          {/* Sticky Toolbar */}

          <section className="toolbar">
            <input
              type="text"
              placeholder="Search email..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >
              <option value="all">
                All Payments
              </option>

              <option value="confirmed">
                Confirmed
              </option>

              <option value="pending">
                Pending
              </option>

              <option value="failed">
                Failed
              </option>
            </select>
          </section>

          {/* Payments Table */}

          <section className="table-card">
            <table className="payments-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.id}</td>

                      <td>{payment.email}</td>

                      <td>{payment.category}</td>

                      <td>
                        KES {payment.amount}
                      </td>

                      <td>
                        <span
                          className={`status ${payment.status}`}
                        >
                          {payment.status}
                        </span>
                      </td>

                      <td>{payment.date}</td>

                      <td>
                        <button className="view-btn">
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="empty"
                    >
                      No payments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Payments;