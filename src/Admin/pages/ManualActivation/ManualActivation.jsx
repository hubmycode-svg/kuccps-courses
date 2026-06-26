import { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import "./ManualActivation.css";

function ManualActivation() {

  const [isOpen, setIsOpen] = useState(false);

  /* Form */

  const [email, setEmail] = useState("");

  const [kcseIndex, setKcseIndex] = useState("");

  const [mpesaReceipt, setMpesaReceipt] = useState("");

  const [activationType, setActivationType] =
    useState("Degree");

  const [search, setSearch] = useState("");

  /* Sample Activations */

  const [activations] = useState([
    {
      id: 1,
      index: "12316101195/2025",
      email: "lisamaeve50@gmail.com",
      receipt: "UEL7M59QTK",
      used: "None",
      available: ["Degree", "Diploma", "Certificate"],
      date: "2026-06-26",
    },
    {
      id: 2,
      index: "23529135248/2025",
      email: "joknyamachgatwech@gmail.com",
      receipt: "QWE45RTY12",
      used: "Degree",
      available: ["Diploma", "Certificate"],
      date: "2026-06-25",
    },
    {
      id: 3,
      index: "02100005334/2025",
      email: "ammohkahakah@gmail.com",
      receipt: "ABC123XYZ",
      used: "Diploma",
      available: ["Degree", "Certificate"],
      date: "2026-06-24",
    },
    {
      id: 4,
      index: "11241002241/2025",
      email: "stormjmukiri@gmail.com",
      receipt: "RTY98POIU",
      used: "Certificate",
      available: ["Degree", "Diploma"],
      date: "2026-06-23",
    },
    {
      id: 5,
      index: "37617211224/2025",
      email: "fellyk527@gmail.com",
      receipt: "MPS563TR",
      used: "None",
      available: [
        "Degree",
        "Diploma",
        "Certificate",
        "KMTC",
      ],
      date: "2026-06-22",
    },
  ]);

  /* Search */

  const filteredActivations = activations.filter(
    (student) =>
      student.index
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.receipt
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  /* Statistics */

  const activeActivations = activations.filter(
    (a) => a.used === "None"
  ).length;

  const partiallyUsed = activations.filter(
    (a) =>
      a.used !== "None" &&
      a.available.length > 0
  ).length;

  const fullyUsed = activations.filter(
    (a) => a.available.length === 0
  ).length;

  const todayActivations = activations.filter(
    (a) => a.date === "2026-06-26"
  ).length;

  return (

    <div className="dashboard-page">

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">

        <div className="manual-header">
          <Header
            onMenuClick={() => setIsOpen(true)}
          />
        </div>

        <main className="manual-container">

          <section className="page-title">

            <h1>Manual Activation</h1>

            <p>
              Manually activate students who
              experienced payment verification
              problems or require administrator
              intervention.
            </p>

          </section>

          {/* Statistics */}

          <section className="stats-grid">

            <div className="stat-card blue">
              <span>Active Activations</span>
              <h2>{activeActivations}</h2>
            </div>

            <div className="stat-card gray">
              <span>Partially Used</span>
              <h2>{partiallyUsed}</h2>
            </div>

            <div className="stat-card red">
              <span>Fully Used</span>
              <h2>{fullyUsed}</h2>
            </div>

            <div className="stat-card orange">
              <span>Today's Activations</span>
              <h2>{todayActivations}</h2>
            </div>

          </section>
                    {/* Form + Instructions */}

          <section className="manual-grid">

            {/* ================= FORM ================= */}

            <div className="activation-card">

              <div className="card-title green">
                <h2>➕ Create New Activation</h2>
              </div>

              <div className="card-body">

                <div className="form-group">
                  <label>User Email</label>

                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                  <small>
                    Student's email address for
                    notifications.
                  </small>
                </div>

                <div className="form-group">
                  <label>KCSE Index Number</label>

                  <input
                    type="text"
                    placeholder="12345678901/2025"
                    value={kcseIndex}
                    onChange={(e) =>
                      setKcseIndex(e.target.value)
                    }
                  />

                  <small>
                    Format:
                    12345678901/2025
                  </small>
                </div>

                <div className="form-group">
                  <label>M-PESA Receipt</label>

                  <input
                    type="text"
                    placeholder="UBG9D6ZO3J"
                    value={mpesaReceipt}
                    onChange={(e) =>
                      setMpesaReceipt(
                        e.target.value
                      )
                    }
                  />

                  <small>
                    Enter the payment confirmation
                    receipt number.
                  </small>
                </div>

                <div className="form-group">
                  <label>Activation Type</label>

                  <select
                    value={activationType}
                    onChange={(e) =>
                      setActivationType(
                        e.target.value
                      )
                    }
                  >
                    <option>Degree</option>
                    <option>Diploma</option>
                    <option>Certificate</option>
                    <option>KMTC</option>
                    <option>TTC</option>
                    <option>Artisan</option>
                  </select>
                </div>

                <button className="activate-btn">
                  Activate Student
                </button>

              </div>

            </div>

            {/* ================= INSTRUCTIONS ================= */}

            <div className="instruction-card">

              <div className="card-title cyan">
                <h2>ℹ Activation Instructions</h2>
              </div>

              <div className="instruction-body">

                <div className="instruction-column">

                  <h3>
                    🟡 When to use Manual Activation
                  </h3>

                  <ul>
                    <li>
                      Student paid but has not
                      received results.
                    </li>

                    <li>
                      Payment confirmation failed.
                    </li>

                    <li>
                      System error during payment
                      processing.
                    </li>

                    <li>
                      Valid M-PESA receipt but no
                      account access.
                    </li>

                    <li>
                      Technical support cases.
                    </li>

                    <li>
                      Compensation for system
                      downtime.
                    </li>
                  </ul>

                </div>

                <div className="instruction-column">

                  <h3>
                    ⚙ What happens after activation
                  </h3>

                  <ul>
                    <li>
                      Student can access ONE course
                      category.
                    </li>

                    <li>
                      Used categories are marked as
                      consumed.
                    </li>

                    <li>
                      Different categories may still
                      be activated.
                    </li>

                    <li>
                      The same category cannot be
                      activated twice.
                    </li>

                    <li>
                      M-PESA receipt remains linked
                      to the student's account.
                    </li>

                  </ul>

                </div>

              </div>

              <div className="example-box">

                <h4>
                  💡 Example Usage
                </h4>

                <p>

                  <span className="badge free">
                    Diploma (FREE)
                  </span>

                  ➜

                  <span className="badge used">
                    Diploma (USED)
                  </span>

                  ➜

                  <span className="badge pay">
                    Degree (PAY REQUIRED)
                  </span>

                </p>

                <small>
                  One manual activation can unlock
                  multiple different categories,
                  but each category can only be
                  activated once.
                </small>

              </div>

            </div>

          </section>
                    {/* ================= RECENT ACTIVATIONS ================= */}

          <section className="recent-card">

            <div className="recent-header">

              <h2>↻ Recent Activations</h2>

              <input
                type="text"
                placeholder="Search by index, email or receipt..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            <div className="table-container">

              <table className="activation-table">

                <thead>

                  <tr>
                    <th>Index Number</th>
                    <th>Email</th>
                    <th>M-PESA Receipt</th>
                    <th>Used Category</th>
                    <th>Available Categories</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredActivations.length > 0 ? (

                    filteredActivations.map((student) => (

                      <tr key={student.id}>

                        <td>{student.index}</td>

                        <td>{student.email}</td>

                        <td>
                          <span className="receipt">
                            {student.receipt}
                          </span>
                        </td>

                        <td>

                          {student.used === "None" ? (

                            <span className="badge none">
                              None Used Yet
                            </span>

                          ) : (

                            <span className="badge used">
                              {student.used}
                            </span>

                          )}

                        </td>

                        <td>

                          <div className="category-list">

                            {student.available.length > 0 ? (

                              student.available.map(
                                (category, index) => (

                                  <span
                                    key={index}
                                    className="badge free"
                                  >
                                    {category}
                                  </span>

                                )
                              )

                            ) : (

                              <span className="badge full">
                                Fully Used
                              </span>

                            )}

                          </div>

                        </td>

                        <td>{student.date}</td>

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
                        No activation records found.
                      </td>

                    </tr>

                  )}

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

export default ManualActivation;