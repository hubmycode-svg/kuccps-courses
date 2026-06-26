import { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import "./SystemHealth.css";

const systemStatus = [
  {
    label: "Database Connection",
    value: "Connected",
    badge: true,
  },
  {
    label: "Session Keys",
    value: "6",
  },
  {
    label: "Current Time",
    value: "2026-06-26 17:54:31",
  },
];

const databaseStats = [
  {
    label: "User Payments",
    value: "388",
  },
  {
    label: "User Courses",
    value: "151",
  },
  {
    label: "User Baskets",
    value: "95",
  },
  {
    label: "Manual Activations",
    value: "9",
  },
];

const activities = [
  {
    email: "joknyamachgatwech@gmail.com",
    index: "23529135248/2025",
    level: "Degree",
    amount: "Ksh 200",
    date: "2026-06-17 08:02",
  },
  {
    email: "stevaniojacky@gmail.com",
    index: "12314210028/2025",
    level: "Diploma",
    amount: "Ksh 200",
    date: "2026-06-04 08:52",
  },
  {
    email: "ammohkahkah@gmail.com",
    index: "02100005334/2025",
    level: "KMTC",
    amount: "Ksh 200",
    date: "2026-06-03 03:52",
  },
  {
    email: "ammohkahakah@gmail.com",
    index: "02100005334/2025",
    level: "KMTC",
    amount: "Ksh 200",
    date: "2026-06-03 03:22",
  },
  {
    email: "ellyjoy71@gmail.com",
    index: "15370310021/2025",
    level: "Degree",
    amount: "Ksh 200",
    date: "2026-05-29 15:39",
  },
  {
    email: "carlosodoyo@gmail.com",
    index: "44748016103/2025",
    level: "Diploma",
    amount: "Ksh 200",
    date: "2026-05-26 16:21",
  },
  {
    email: "lisamaeve50@gmail.com",
    index: "12316101195/2025",
    level: "Degree",
    amount: "Ksh 0",
    date: "2026-05-21 16:06",
  },
  {
    email: "mwanajumarwambo8@gmail.com",
    index: "09222202116/2025",
    level: "Diploma",
    amount: "Ksh 200",
    date: "2026-05-21 14:35",
  },
  {
    email: "stormjmukiri@gmail.com",
    index: "11241002241/2025",
    level: "Diploma",
    amount: "Ksh 100",
    date: "2026-05-21 11:48",
  },
  {
    email: "fellyk527@gmail.com",
    index: "37617211224/2025",
    level: "TTC",
    amount: "Ksh 200",
    date: "2026-05-20 16:46",
  },
];

function SystemHealth() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">

        <Header onMenuClick={() => setIsOpen(true)} />

        <main className="system-container">

          <section className="system-header">
            <h1>System Health & Monitoring</h1>
          </section>

          <section className="top-grid">

            <div className="status-card">

              <div className="card-title">
                <h2>System Status</h2>
              </div>

              <div className="card-body">

                {systemStatus.map((item) => (

                  <div
                    className="status-row"
                    key={item.label}
                  >

                    <strong>{item.label}</strong>

                    {item.badge ? (
                      <span className="connected">
                        {item.value}
                      </span>
                    ) : (
                      <span>{item.value}</span>
                    )}

                  </div>

                ))}

              </div>

            </div>

            <div className="status-card">

              <div className="card-title">
                <h2>Database Statistics</h2>
              </div>

              <div className="card-body">

                {databaseStats.map((item) => (

                  <div
                    className="status-row"
                    key={item.label}
                  >

                    <strong>{item.label}</strong>

                    <span>{item.value}</span>

                  </div>

                ))}

              </div>

            </div>

          </section>
                    <section className="activity-card">

            <div className="card-title">
              <h2>Recent Activities</h2>
            </div>

            <div className="table-wrapper">

              <table>

                <thead>

                  <tr>
                    <th>Email</th>
                    <th>Index</th>
                    <th>Level</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>

                </thead>

                <tbody>

                  {activities.map((activity, index) => (

                    <tr key={index}>

                      <td>{activity.email}</td>

                      <td>{activity.index}</td>

                      <td>

                        <span
                          className={`level ${activity.level.toLowerCase()}`}
                        >
                          {activity.level}
                        </span>

                      </td>

                      <td>{activity.amount}</td>

                      <td>{activity.date}</td>

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

export default SystemHealth;