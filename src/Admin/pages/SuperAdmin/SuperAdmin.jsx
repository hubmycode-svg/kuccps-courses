import { useState } from "react";
import Header from "../../components/layout/Header";
import DashboardCard from "../../components/cards/DashboardCard";
import Footer from "../../components/layout/Footer.jsx";
import Sidebar from "../../components/layout/Sidebar.jsx";
import "./SuperAdmin.css";

const cards = [
  {
    title: "Payments",
    subtitle: "Manage Transactions",
    buttonText: "View Details",
    path: "/admin/payments",
    color: "#2563eb",
    icon: "💳",
  },
  {
    title: "Users",
    subtitle: "Manage System Users",
    buttonText: "View Users",
    path: "/admin/users",
    color: "#16a34a",
    icon: "👥",
  },
  {
    title: "Manual Activation",
    subtitle: "Activate Student Accounts",
    buttonText: "Activate Users",
    path: "/admin/manual-activation",
    color: "#d97706",
    icon: "✅",
  },
  {
    title: "Payment Analytics",
    subtitle: "View Payment Reports",
    buttonText: "View Analytics",
    path: "/admin/payments-analytics",
    color: "#1f2937",
    icon: "📊",
  },
  {
    title: "Payment Issues",
    subtitle: "Review Failed Payments",
    buttonText: "View Issues",
    path: "/admin/payment-issues",
    color: "#dc2626",
    icon: "⚠️",
  },
  {
    title: "News Management",
    subtitle: "Manage News Articles",
    buttonText: "Manage News",
    path: "/admin/news-management",
    color: "#7c3aed",
    icon: "📰",
  },
  {
    title: "System Health",
    subtitle: "Monitor System Status",
    buttonText: "Check Health",
    path: "/admin/system-health",
    color: "#0891b2",
    icon: "🖥️",
  },
  {
    title: "AI Chat Assistant",
    subtitle: "Monitor AI Statistics",
    buttonText: "View AI Stats",
    path: "/admin/ai-chat",
    color: "#4b5563",
    icon: "🤖",
  },
  {
    title: "Cached Answers",
    subtitle: "View Stored Responses",
    buttonText: "View Cache",
    path: "/admin/cached-answers",
    color: "#6b7280",
    icon: "📦",
  },
  {
    title: "Clear Cache",
    subtitle: "Remove Cached Data",
    buttonText: "Clear Cache",
    path: "/admin/clear-cache",
    color: "#b91c1c",
    icon: "🗑️",
  },
];

function SuperAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-page">
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">
        <Header onMenuClick={() => setIsOpen(true)} />

        <main className="dashboard-container">
          <section className="dashboard-header">
            <h1>Admin Dashboard</h1>
            <p>
              Welcome to the KUCCPS Administration Portal. Manage users,
              payments, analytics, news, and system operations from one place.
            </p>
          </section>

          <section className="dashboard-grid">
            {cards.map((card) => (
              <DashboardCard
                key={card.path}
                {...card}
              />
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default SuperAdmin;