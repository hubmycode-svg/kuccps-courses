import { useState, useEffect } from "react";
import './Footer.css'

const cards = [
  {
    id: "payments",
    label: "Total Payments",
    icon: "💳",
  },
  {
    id: "users",
    label: "Active Users",
    icon: "👥",
  },
  {
    id: "issues",
    label: "Pending Issues",
    icon: "⚠️",
  },
  {
    id: "articles",
    label: "News Articles",
    icon: "📰",
  },
];

function Footer() {
  const [data, setData] = useState({
    payments: null,
    users: null,
    issues: null,
    articles: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        payments: "$48,295",
        users: "1,340",
        issues: "27",
        articles: "182",
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="dashboard-footer">
      <div className="footer-container">
        <h2 className="footer-title">System Overview</h2>

        <div className="footer-grid">
          {cards.map((card) => (
            <div key={card.id} className="footer-card">
              <div className="footer-icon">{card.icon}</div>

              <p className="footer-label">{card.label}</p>

              <p className="footer-value">
                {data[card.id] ?? "Loading..."}
              </p>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} KUCCPS Administration Portal. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;