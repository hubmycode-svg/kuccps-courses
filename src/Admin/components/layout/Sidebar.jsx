import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  const links = [
    { path: "/admin/dashboard", label: "🏠 Dashboard" },
    { path: "/admin/payments", label: "💳 Payments" },
    { path: "/admin/users", label: "👥 Users" },
    { path: "/admin/manual-activation", label: "⚡ Manual Activation" },
    { path: "/admin/system-health", label: "🖥️ System Health" },
    { path: "/admin/payment-issues", label: "⚠️ Payment Issues" },
    { path: "/admin/news-management", label: "📰 News Management" },
    { path: "/admin/ai-chat", label: "🤖 AI Stats" },
    { path: "/admin/clear-cache", label: "🗑️ Manage Cache" },
  ];

  return (
    <div
      className={`sidebar-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <nav
        className={`sidebar ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={onClose}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;