import { Link } from "react-router-dom";
import "./DashboardCard.css";

function DashboardCard({
  title,
  subtitle,
  buttonText,
  path,
  color,
  icon = "📋",
  disabled = false,
}) {
  return (
    <div
      className={`dashboard-card ${disabled ? "disabled" : ""}`}
      style={{ backgroundColor: color }}
    >
      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{subtitle}</p>

      {disabled ? (
        <button
          className="card-button disabled-button"
          disabled
        >
          Coming Soon
        </button>
      ) : (
        <Link
          to={path}
          className="card-button"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}

export default DashboardCard;