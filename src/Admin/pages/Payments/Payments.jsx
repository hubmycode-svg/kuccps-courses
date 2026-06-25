import { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import "./Payment.css";

function Payments() {
  const [isOpen, setIsOpen] = useState(false);

  const [payments] = useState([
    { id: 1, email: "othienoi95@gmail.com", amount: 200, status: "confirmed", category: "Degree", date: "2026/06/28" },
    { id: 2, email: "john@gmail.com", amount: 150, status: "pending", category: "Diploma", date: "2026/06/27" },
    { id: 3, email: "mary@gmail.com", amount: 300, status: "confirmed", category: "Degree", date: "2026/06/26" },
    { id: 4, email: "peter@gmail.com", amount: 250, status: "failed", category: "Certificate", date: "2026/06/25" },
    { id: 5, email: "jane@gmail.com", amount: 180, status: "pending", category: "Degree", date: "2026/06/24" },
    { id: 6, email: "alex@gmail.com", amount: 400, status: "confirmed", category: "Masters", date: "2026/06/23" },
    { id: 7, email: "faith@gmail.com", amount: 220, status: "failed", category: "Diploma", date: "2026/06/22" },
    { id: 8, email: "dan@gmail.com", amount: 175, status: "confirmed", category: "Certificate", date: "2026/06/21" },
    { id: 9, email: "grace@gmail.com", amount: 320, status: "pending", category: "Degree", date: "2026/06/20" },
    { id: 10, email: "kevin@gmail.com", amount: 275, status: "confirmed", category: "Diploma", date: "2026/06/19" },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredPayments =
    filter === "all"
      ? payments
      : payments.filter((payment) => payment.status === filter);

  return (
    <div className="dashboard-page">
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">
        <Header onMenuClick={() => setIsOpen(true)} />

        <main className="payments-container">
          <div className="payments-header">
            <h1>Payments Management</h1>
            <p>Manage and monitor all payment transactions.</p>
          </div>

          <div className="payments-controls">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Payments</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <div className="table-wrapper">
            <table className="payments-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.email}</td>
                    <td>KES {payment.amount}</td>
                    <td>{payment.category}</td>
                    <td>
                      <span className={`status ${payment.status}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td>{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Payments;