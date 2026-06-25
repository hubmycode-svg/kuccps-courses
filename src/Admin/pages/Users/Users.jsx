import { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import "./Users.css";

function Users() {
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const [users] = useState([
    {
      id: 1,
      index: "23529135248/2025",
      email: "joknyamachgatwech@gmail.com",
      paymentCount: 1,
      confirmed: 0,
      amount: 200,
      level: "Degree",
      paid: true,
      activity: "2026-06-17 08:02",
    },
    {
      id: 2,
      index: "12314210028/2025",
      email: "stevaniojacky@gmail.com",
      paymentCount: 1,
      confirmed: 0,
      amount: 200,
      level: "Diploma",
      paid: true,
      activity: "2026-06-04 08:52",
    },
    {
      id: 3,
      index: "02100005334/2025",
      email: "ammohkahakah@gmail.com",
      paymentCount: 2,
      confirmed: 0,
      amount: 400,
      level: "KMTC",
      paid: true,
      activity: "2026-06-03 03:52",
    },
    {
      id: 4,
      index: "15370310021/2025",
      email: "ellyjoy71@gmail.com",
      paymentCount: 1,
      confirmed: 0,
      amount: 200,
      level: "Degree",
      paid: true,
      activity: "2026-05-29 15:39",
    },
    {
      id: 5,
      index: "44748016103/2025",
      email: "carlosodoyo@gmail.com",
      paymentCount: 1,
      confirmed: 0,
      amount: 200,
      level: "Diploma",
      paid: true,
      activity: "2026-05-26 16:21",
    },
    {
      id: 6,
      index: "12316101195/2025",
      email: "lisamaeve50@gmail.com",
      paymentCount: 1,
      confirmed: 1,
      amount: 0,
      level: "Degree",
      paid: false,
      activity: "2026-05-21 16:06",
    },
    {
      id: 7,
      index: "09222202116/2025",
      email: "mwanajumarwambo8@gmail.com",
      paymentCount: 1,
      confirmed: 0,
      amount: 200,
      level: "Diploma",
      paid: true,
      activity: "2026-05-21 14:35",
    },
    {
      id: 8,
      index: "11241002241/2025",
      email: "stormjmukiri@gmail.com",
      paymentCount: 1,
      confirmed: 1,
      amount: 100,
      level: "Diploma",
      paid: true,
      activity: "2026-05-21 11:48",
    },
    {
      id: 9,
      index: "37617211224/2025",
      email: "fellyk527@gmail.com",
      paymentCount: 1,
      confirmed: 0,
      amount: 200,
      level: "TTC",
      paid: true,
      activity: "2026-05-20 16:46",
    },
    {
      id: 10,
      index: "18381201007/2025",
      email: "kyengomichael94@gmail.com",
      paymentCount: 1,
      confirmed: 0,
      amount: 200,
      level: "Diploma",
      paid: true,
      activity: "2026-05-19 15:29",
    },
  ]);

  const filteredUsers = users
    .filter(
      (user) =>
        user.index.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (user) =>
        statusFilter === "all" ||
        (statusFilter === "paid" && user.paid) ||
        (statusFilter === "unpaid" && !user.paid)
    )
    .filter(
      (user) =>
        levelFilter === "all" ||
        user.level === levelFilter
    );

  const totalStudents = users.length;
  const paidStudents = users.filter((u) => u.paid).length;
  const unpaidStudents = users.filter((u) => !u.paid).length;
  const totalRevenue = users.reduce(
    (sum, u) => sum + u.amount,
    0
  );

  return (
    <div className="dashboard-page">
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">
        <div className="users-header">
          <Header onMenuClick={() => setIsOpen(true)} />
        </div>

        <main className="users-container">

          <section className="page-header">
            <div>
              <h1>Student Payment Records</h1>
              <p>
                Monitor payment records and quickly check
                which students have paid their application
                fees.
              </p>
            </div>
          </section>

          <section className="stats-grid">

            <div className="stat-card blue">
              <span>Total Students</span>
              <h2>{totalStudents}</h2>
            </div>

            <div className="stat-card green">
              <span>Paid Students</span>
              <h2>{paidStudents}</h2>
            </div>

            <div className="stat-card red">
              <span>Unpaid Students</span>
              <h2>{unpaidStudents}</h2>
            </div>

            <div className="stat-card purple">
              <span>Total Revenue</span>
              <h2>KES {totalRevenue}</h2>
            </div>

          </section>

          <section className="toolbar">

            <input
              type="text"
              placeholder="Search by index number or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Payments</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>

            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="Degree">Degree</option>
              <option value="Diploma">Diploma</option>
              <option value="Certificate">Certificate</option>
              <option value="KMTC">KMTC</option>
              <option value="TTC">TTC</option>
            </select>

          </section>
                    <section className="table-card">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Index Number</th>
                  <th>Email</th>
                  <th>Payment Count</th>
                  <th>Confirmed</th>
                  <th>Total Amount</th>
                  <th>Level</th>
                  <th>Payment Status</th>
                  <th>Last Activity</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.index}</td>

                      <td>{user.email}</td>

                      <td>{user.paymentCount}</td>

                      <td>{user.confirmed}</td>

                      <td>KES {user.amount}</td>

                      <td>
                        <span
                          className={`level ${user.level.toLowerCase()}`}
                        >
                          {user.level}
                        </span>
                      </td>

                      <td>
                        <span
                          className={
                            user.paid
                              ? "status paid"
                              : "status unpaid"
                          }
                        >
                          {user.paid ? "Paid" : "Unpaid"}
                        </span>
                      </td>

                      <td>{user.activity}</td>

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
                      colSpan="9"
                      className="empty"
                    >
                      No payment records found.
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

export default Users;